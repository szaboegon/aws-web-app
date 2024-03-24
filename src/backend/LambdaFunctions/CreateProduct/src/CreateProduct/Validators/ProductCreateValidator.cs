using CreateProduct.Dtos;
using FluentValidation;

namespace CreateProduct.Validators
{
    public class ProductCreateValidator: AbstractValidator<ProductCreateDto>
    {
        public ProductCreateValidator() 
        { 
            RuleFor(p => p.Name)
                .NotNull()
                .NotEmpty();

            RuleFor(c => c.CategoryName)
                .NotNull()
                .NotEmpty();

            RuleFor(c => c.Condition)
                .NotNull()
                .NotEmpty();

            RuleFor(c => c.Price)
                .NotNull()
                .NotEmpty()
                .GreaterThan(0);

            RuleFor(c => c.Description)
                .NotNull()
                .NotEmpty()
                .MinimumLength(50)
                .MaximumLength(1000);

            RuleFor(c => c.Location)
                .NotNull()
                .NotEmpty();

            RuleFor(c => c.Location.Country)
                .NotNull()
                .NotEmpty()
                .Matches("^[A-Za-zÀ-ÖØ-öø-ÿ\\-]+$")
                .When(c => c.Location is not null);

            RuleFor(c => c.Location.City)
                .NotNull()
                .NotEmpty()
                .Matches("^[A-Za-zÀ-ÖØ-öø-ÿ\\-]+$").When(c => c.Location is not null);

            RuleFor(c => c.Location.PostalCode)
                .NotNull()
                .NotEmpty()
                .Matches("^[A-Za-z0-9\\s]+$").When(c => c.Location is not null);

            RuleFor(c => c.Location.StreetAddress)
                .NotNull()
                .NotEmpty()
                .Matches("^[A-Za-zÀ-ÖØ-öø-ÿ0-9\\-.,/\\s]+$").When(c => c.Location is not null);

            RuleFor(c => c.ImageNames)
                .NotEmpty();
        }
    }
}
