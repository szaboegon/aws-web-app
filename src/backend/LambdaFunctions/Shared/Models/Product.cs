using Amazon.DynamoDBv2.DataModel;
using GetAllProducts.Converters;
using GetAllProducts.Models.Enums;
using Shared.Models;
using System.Text.Json.Serialization;

namespace GetAllProducts.Models
{
    [DynamoDBTable("eMarketplace")]
    public class Product
    {
        [DynamoDBHashKey]
        [JsonPropertyName("pk")]
        public string? PK { get; set; }

        [DynamoDBRangeKey]
        [JsonPropertyName("sk")]
        public string? SK { get; set; }

        [DynamoDBProperty]
        [JsonPropertyName("name")]
        public string? Name { get; set; }

        [DynamoDBProperty]
        [JsonPropertyName("categoryName")]
        public string? CategoryName { get; set; }

        [DynamoDBProperty(typeof(LocationConverter))]
        [JsonPropertyName("location")]
        public Location? Location { get; set; }

        [DynamoDBProperty]
        [JsonPropertyName("price")]
        public double Price { get; set; }

        [DynamoDBProperty]
        [JsonPropertyName("description")]
        public string? Description { get; set; }

        [DynamoDBProperty]
        [JsonPropertyName("images")]
        public string[]? Images { get; set; }

        [DynamoDBProperty(typeof(EnumStringConverter<Condition>))]
        [JsonPropertyName("condition")]
        public Condition Condition { get; set; }
    }
}
