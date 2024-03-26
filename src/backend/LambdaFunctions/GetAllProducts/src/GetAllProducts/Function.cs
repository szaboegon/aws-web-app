using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.Lambda.Core;
using Shared.Dtos;
using Shared.Extensions;
using Shared.Models;
using Shared.Services;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace GetAllProducts
{
    public class Function
    {
        private readonly IDynamoDBContext _dbContext;
        private readonly S3Service _s3Service = new S3Service();

        public Function()
        {
            var dBClient = new AmazonDynamoDBClient();
            _dbContext = new DynamoDBContext(dBClient);

        }

        public async Task<IEnumerable<ProductDto>> FunctionHandler(ILambdaContext context)
        {
            var conditions = new List<ScanCondition>() 
            { 
                new ScanCondition("SK", ScanOperator.Contains, "product")
            };

            var products = await _dbContext.ScanAsync<Product>(conditions).GetRemainingAsync();

            return products.Select(p => p.ToDto(_s3Service.GeneratePresignedUrls(p.Images).GetAwaiter().GetResult()));
        }

    }
}
