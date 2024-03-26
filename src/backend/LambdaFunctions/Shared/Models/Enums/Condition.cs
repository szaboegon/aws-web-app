using System.Text.Json.Serialization;

namespace Shared.Models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum Condition
    {
        satisfactory,
        fair,
        good,
        excellent,
        brandNew,
    }
}
