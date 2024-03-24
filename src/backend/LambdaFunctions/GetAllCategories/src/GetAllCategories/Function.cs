using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using GetAllCategories.Models;
using System.Net;
using System.Text.Json;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace GetAllCategories
{
    public class Function
    {
        private IDynamoDBContext _dbContext;

        public Function()
        {
            var dBClient = new AmazonDynamoDBClient();
            _dbContext = new DynamoDBContext(dBClient);
        }

        public async Task<IEnumerable<Category>> FunctionHandler(ILambdaContext context)
        {
            var conditions = new List<ScanCondition>()
            {
                new ScanCondition("PK", ScanOperator.Contains, "category"),
                new ScanCondition("SK", ScanOperator.Contains, "category")
            };
            var categories = await _dbContext.ScanAsync<Category>(conditions).GetRemainingAsync();

            return categories;
        }
    }
}
