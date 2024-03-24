using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.DocumentModel;

namespace GetAllProducts.Converters
{
    public class EnumStringConverter<TEnum> : IPropertyConverter
    {
        public object FromEntry(DynamoDBEntry entry)
        {
            return (TEnum)Enum.Parse(typeof(TEnum), entry.AsString(), ignoreCase: true);
        }

        public DynamoDBEntry ToEntry(object value)
        {
            return new Primitive(value.ToString());
        }
    }
}
