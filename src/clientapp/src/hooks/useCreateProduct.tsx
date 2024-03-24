import { useMutation } from "react-query";
import { ProductService } from "../services/productService";

export const useCreateProduct = () => {
  return useMutation(ProductService.create);
};
