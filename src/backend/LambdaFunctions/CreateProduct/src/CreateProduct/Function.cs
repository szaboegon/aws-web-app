using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.Lambda.Core;
using Amazon.S3;
using Amazon.S3.Model;
using CreateProduct.Dtos;
using CreateProduct.Validators;
using FluentValidation;
using Shared.Models;
using Shared.Models.Enums;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace CreateProduct
{
    public class Function
    {
        private readonly IDynamoDBContext _dbContext;
        private readonly IAmazonS3 _s3Client;

        const string S3BucketName = "emarketplace-app-resources";

        public Function()
        {
            var dBClient = new AmazonDynamoDBClient();
            _dbContext = new DynamoDBContext(dBClient);
            _s3Client = new AmazonS3Client();
        }

        public async Task<Dictionary<string, string>> FunctionHandler(ProductCreateDto input, ILambdaContext context)
        {
            var validator = new ProductCreateValidator();
            try
            {
                 await validator.ValidateAndThrowAsync(input);
            }
            // API Gateway error regex dies from new line characters
            catch (ValidationException ex)
            {
                throw new ValidationException($"{ex.Message.Replace("\n", " ")}", ex.Errors);
            }

            var guid = Guid.NewGuid();
            var presignedUrls = await GenerateS3PresignedUrls(guid, input.ImageNames);

            var product = new Product()
            {
                PK = $"category#{input.CategoryName}",
                SK = $"product#{guid}",
                Name = input.Name,
                CategoryName = input.CategoryName,
                Condition = Enum.Parse<Condition>(input.Condition, ignoreCase: true),
                Description = input.Description,
                Location = new Location()
                {
                    City = input.Location.City,
                    Country = input.Location.Country,
                    PostalCode = input.Location.PostalCode,
                    StreetAddress = input.Location.StreetAddress,
                },
                Price = input.Price,
                Images = presignedUrls.Select(u => GetUrlFromPresignedUrl(u.Value)).ToArray()
            };

            await _dbContext.SaveAsync(product);
           
            return presignedUrls;
        }

        private async Task<Dictionary<string, string>> GenerateS3PresignedUrls(Guid productGuid, string[] imageNames)
        {
            var imageNamesToPresignedUrls = new Dictionary<string, string>();
            foreach( var imageName in imageNames)
            {
                var request = new GetPreSignedUrlRequest
                {
                    BucketName = S3BucketName,
                    Key = $"uploads/{productGuid}/{imageName}",
                    Verb = HttpVerb.PUT,
                    Expires = DateTime.UtcNow.AddMinutes(15),
                    ContentType = "image/*"
                };

                var presignedUrl = await _s3Client.GetPreSignedURLAsync(request);
                imageNamesToPresignedUrls[imageName] = presignedUrl;
            }
            
            return imageNamesToPresignedUrls;
        }

        private string GetUrlFromPresignedUrl(string presignedUrl)
        {
            var uri = new Uri(presignedUrl);
            return $"{S3BucketName}:{uri.AbsolutePath.TrimStart('/')}";
        }
    }
}
