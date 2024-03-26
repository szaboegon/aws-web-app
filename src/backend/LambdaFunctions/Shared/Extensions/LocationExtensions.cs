using Shared.Dtos;
using Shared.Models;

namespace Shared.Extensions
{
    public static class LocationExtensions
    {
        public static LocationDto ToDto(this Location location)
        {
            return new LocationDto(location.Country, location.City, location.PostalCode, location.StreetAddress);
        }
    }
}
