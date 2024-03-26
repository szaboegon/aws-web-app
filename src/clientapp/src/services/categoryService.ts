import axios from "axios";
import { Category } from "../models/category";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_GATEWAY_URL,
  headers: { "Content-Type": "application/json" },
});

const get = async (categoryName: string): Promise<Category[]> => {
  var response = await apiClient.get<Category[]>(`/categories/${categoryName}`);
  return response.data;
};

const getAll = async (): Promise<Category[]> => {
  var response = await apiClient.get<Category[]>("/categories");
  return response.data;
};

export const CategoryService = {
  get,
  getAll,
};
