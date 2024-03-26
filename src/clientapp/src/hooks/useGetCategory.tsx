import { useQuery } from "react-query";
import { Category } from "../models/category";
import { CategoryService } from "../services/categoryService";
import { useSearchParams } from "react-router-dom";

export const useGetCategory = () => {
  const [searchParams, _] = useSearchParams();
  return useQuery<Category[], Error>(["categories", searchParams], () =>
    CategoryService.get(searchParams.get("category") ?? "")
  );
};
