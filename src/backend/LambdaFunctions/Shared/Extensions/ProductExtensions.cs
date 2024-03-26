using Shared.Dtos;
using Shared.Models;

namespace Shared.Extensions
{
    public static class ProductExtensions
    {
        public static ProductDto ToDto (this Product product, string[] presignedUrls)
        {
            return new ProductDto(product.PK, product.SK, product.Name, product.CategoryName,
                product.Location.ToDto(), product.Price, product.Description, presignedUrls,
                product.Condition.ToString());
          
        }
    }
}
