using System.Text.Json.Serialization;

namespace Shared.Models
{
    public class Location
    {
        [JsonPropertyName("country")]
        public string? Country { get; set; }

        [JsonPropertyName("city")]
        public string? City { get; set; }

        [JsonPropertyName("postalCode")]
        public string? PostalCode { get; set; }

        [JsonPropertyName("streetAddress")]
        public string? StreetAddress { get; set; }
    }
}
