using System.Text.Json.Serialization;

namespace Shared.Dtos
{
    public record ProductDto(
        [property: JsonPropertyName("pk")] string PK,
        [property: JsonPropertyName("sk")] string SK,
        [property: JsonPropertyName("name")] string Name,
        [property: JsonPropertyName("categoryName")] string CategoryName,
        [property: JsonPropertyName("location")] LocationDto Location,
        [property: JsonPropertyName("price")] double Price,
        [property: JsonPropertyName("description")] string Description,
        [property: JsonPropertyName("images")] string[] Images,
        [property: JsonPropertyName("condition")] string Condition
        );
   
}
