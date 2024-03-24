import { Condition } from "./enums/condition";
import { Location } from "./location";

export interface Product {
  pk: string;
  sk: string;
  name: string;
  //seller?
  condition: Condition;
  location: Location;
  // paymentOptions: [string];
  price: number;
  description: string;
  images: [string];
  created_at: Date;
}
