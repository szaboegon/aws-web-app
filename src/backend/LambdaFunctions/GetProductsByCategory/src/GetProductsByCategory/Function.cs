using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.Lambda.Core;
using Shared.Dtos;
using Shared.Models;
using Shared.Services;
using Shared.Extensions;
using GetAllCategories.Models;
using System.Runtime.InteropServices.JavaScript;
using Newtonsoft.Json.Linq;
using Amazon.Lambda.APIGatewayEvents;
using GetProductsByCategory.Models;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace GetProductsByCategory
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

        public async Task<IEnumerable<ProductDto>> FunctionHandler(GetProductsByCategoryRequest request, ILambdaContext context)
        {
            var (categoryName, subCategoryName) = request.CategoryName.Split(':') switch
            {
                var a when a.Length == 2 => (a[0], a[1]),
                var a when a.Length == 1 => (a[0], null),
                _ => (null, null)
            };

            var products = new List<Product>();
            if(subCategoryName is null)
            {
                var subCategories = await _dbContext.QueryAsync<Category>($"category#{categoryName}").GetRemainingAsync();
                var subCategorySKs = subCategories.Select(c => c.SK).ToArray();

                var conditions = new List<ScanCondition>()
                {
                    new ScanCondition("PK", ScanOperator.In, subCategorySKs),
                    new ScanCondition("SK", ScanOperator.Contains, "product")
                };

                products = await _dbContext.ScanAsync<Product>(conditions).GetRemainingAsync();
            }
            else
            {
                products = await _dbContext.QueryAsync<Product>($"category#{subCategoryName}",
                   QueryOperator.BeginsWith, new[] { "product" }).GetRemainingAsync();
            }
           
            return products.Select(p => p.ToDto(_s3Service.GeneratePresignedUrls(p.Images).GetAwaiter().GetResult()));
        }
    }
}
