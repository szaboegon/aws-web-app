﻿using Amazon.DynamoDBv2.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace GetAllCategories.Models
{
    [DynamoDBTable("eMarketplace")]
    public class Category
    {
        [DynamoDBHashKey]
        [JsonPropertyName("pk")]
        public string? PK { get; set; }

        [DynamoDBRangeKey]
        [JsonPropertyName("sk")]
        public string? SK { get; set; }

        [DynamoDBProperty]
        [JsonPropertyName("name")]
        public string? Name { get; set; }

        [DynamoDBProperty]
        [JsonPropertyName("normalizedName")]
        public string? NormalizedName { get; set; }

        [DynamoDBProperty]
        [JsonPropertyName("parentCategory")]
        public string? ParentCategory { get; set; }

        [DynamoDBProperty]
        [JsonPropertyName("isTopLevel")]
        public bool IsTopLevel { get; set; }
    }
}
