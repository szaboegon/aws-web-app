using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.DocumentModel;
using Shared.Models;
using System.Text.Json;

namespace GetAllProducts.Converters
{
    public class LocationConverter : IPropertyConverter
    {
        public object? FromEntry(DynamoDBEntry entry)
        {
            if (entry == null || entry is DynamoDBNull)
                return null;

            var document = entry as Document;
            var location = JsonSerializer.Deserialize<Location>(document?.ToJsonPretty() ?? "");

            return location;
        }

        public DynamoDBEntry ToEntry(object value)
        {
            var location = value as Location ?? throw new ArgumentOutOfRangeException();

            var doc = new Document();
            doc["country"] = location.Country;
            doc["city"] = location.City;
            doc["postalCode"] = location.PostalCode;
            doc["streetAddress"] = location.StreetAddress;

            return doc;
        }
    }
}
