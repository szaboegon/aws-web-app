import { useQuery } from "react-query";
import { Product } from "../models/product";
import { ProductService } from "../services/productService";
import { useSearchParams } from "react-router-dom";

export const useGetProductsByCategory = () => {
  const [searchParams, _] = useSearchParams();

  return useQuery<Product[], Error>(["productsByCategory", searchParams], () =>
    ProductService.getByCategory(searchParams.get("category") ?? "")
  );
};
