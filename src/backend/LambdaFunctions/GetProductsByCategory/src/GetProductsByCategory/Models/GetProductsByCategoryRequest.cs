using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace GetProductsByCategory.Models
{
    public record GetProductsByCategoryRequest([property: JsonPropertyName("categoryName")]string CategoryName);
   
}
