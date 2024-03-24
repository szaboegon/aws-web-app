import { Condition } from "./enums/condition";
import { Location } from "./location";

export interface ProductFormData {
  name?: string;
  categoryName?: string;
  condition?: Condition;
  location?: Location;
  price?: number;
  description?: string;
  images?: File[];
}
