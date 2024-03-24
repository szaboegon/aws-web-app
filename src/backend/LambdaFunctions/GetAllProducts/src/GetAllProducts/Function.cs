using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.Lambda.Core;
using GetAllProducts.Models;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace GetAllProducts
{
    public class Function
    {
        private readonly IDynamoDBContext _dbContext;

        public Function()
        {
            var dBClient = new AmazonDynamoDBClient();
            _dbContext = new DynamoDBContext(dBClient);
        }

        public async Task<IEnumerable<Product>> FunctionHandler(ILambdaContext context)
        {
            var conditions = new List<ScanCondition>() 
            { 
                new ScanCondition("SK", ScanOperator.Contains, "product")
            };

            var products = await _dbContext.ScanAsync<Product>(conditions).GetRemainingAsync();

            return products;
        }

    }
}
