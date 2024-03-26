import { useQuery } from "react-query";
import { Product } from "../models/product";
import { ProductService } from "../services/productService";

export const useGetProducts = () => {
  return useQuery<Product[], Error>("products", ProductService.getAll);
};
