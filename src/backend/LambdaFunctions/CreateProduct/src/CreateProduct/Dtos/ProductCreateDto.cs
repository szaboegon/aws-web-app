using Shared.Dtos;

namespace CreateProduct.Dtos
{
    public record ProductCreateDto(string Name, string CategoryName, string Condition,
        LocationDto Location, double Price, string Description, string[] ImageNames);
}
