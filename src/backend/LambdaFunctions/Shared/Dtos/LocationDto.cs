using System.Text.Json.Serialization;

namespace Shared.Dtos
{
    public record LocationDto(
        [property: JsonPropertyName("country")] string Country,
        [property: JsonPropertyName("city")] string City,
        [property: JsonPropertyName("postalCode")] string PostalCode,
        [property: JsonPropertyName("streetAddress")] string StreetAddress
        );
}
