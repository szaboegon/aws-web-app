import { Condition } from "./enums/condition";
import { Location } from "./location";

export interface Product {
  name: string;
  //seller?
  condition: Condition;
  location: Location;
  paymentOptions: [string];
  price: number;
  description: string;
  images: [string];
  created_at: Date;
}
