import { Condition } from "../models/enums/condition";
import { Product } from "../models/product";

export const products: Product[] = [
  {
    name: "Microwave",
    condition: Condition.excellent,
    created_at: new Date(),
    description: "Very cool michael wave",
    location: {
      city: "Szolnok",
      counrty: "Hungary",
      postalCode: 5000,
      streetAddress: "Asd st.",
    },
    paymentOptions: ["cash"],
    price: 3000,
    images: [
      "https://cdn.britannica.com/73/191973-131-DD21FA2E/microwave-oven.jpg",
    ],
  },
  {
    name: "Microwave2",
    condition: Condition.good,
    created_at: new Date(),
    description: "Very cool michael wave",
    location: {
      city: "Szolnok",
      counrty: "Hungary",
      postalCode: 5000,
      streetAddress: "Asd st.",
    },
    paymentOptions: ["cash"],
    price: 3000,
    images: [
      "https://cdn.britannica.com/73/191973-131-DD21FA2E/microwave-oven.jpg",
    ],
  },
  {
    name: "Microwave3",
    condition: Condition.satisfactory,
    created_at: new Date(),
    description: "Very cool michael wave",
    location: {
      city: "Szolnok",
      counrty: "Hungary",
      postalCode: 5000,
      streetAddress: "Asd st.",
    },
    paymentOptions: ["cash"],
    price: 3000,
    images: [
      "https://cdn.britannica.com/73/191973-131-DD21FA2E/microwave-oven.jpg",
    ],
  },
  {
    name: "Microwave4",
    condition: Condition.fair,
    created_at: new Date(),
    description: "Very cool michael wave",
    location: {
      city: "Szolnok",
      counrty: "Hungary",
      postalCode: 5000,
      streetAddress: "Asd st.",
    },
    paymentOptions: ["cash"],
    price: 3000,
    images: [
      "https://cdn.britannica.com/73/191973-131-DD21FA2E/microwave-oven.jpg",
    ],
  },
  {
    name: "Microwave5",
    condition: Condition.excellent,
    created_at: new Date(),
    description: "Very cool michael wave",
    location: {
      city: "Szolnok",
      counrty: "Hungary",
      postalCode: 5000,
      streetAddress: "Asd st.",
    },
    paymentOptions: ["cash"],
    price: 3000,
    images: [
      "https://cdn.britannica.com/73/191973-131-DD21FA2E/microwave-oven.jpg",
    ],
  },
  {
    name: "Microwave6",
    condition: Condition.excellent,
    created_at: new Date(),
    description: "Very cool michael wave",
    location: {
      city: "Szolnok",
      counrty: "Hungary",
      postalCode: 5000,
      streetAddress: "Asd st.",
    },
    paymentOptions: ["cash"],
    price: 3000,
    images: [
      "https://www.hindustantimes.com/ht-img/img/2023/12/11/550x309/oven_1702285600024_1702285613171.jpg",
    ],
  },
];
