import { useQuery } from "react-query";
import { Category } from "../models/category";
import { CategoryService } from "../services/categoryService";

export const useGetAllCategories = () => {
  return useQuery<Category[], Error>("categories", CategoryService.getAll);
};
