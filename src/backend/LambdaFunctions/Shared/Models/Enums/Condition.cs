using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace GetAllProducts.Models.Enums
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
