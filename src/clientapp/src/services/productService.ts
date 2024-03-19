import axios from "axios";
import { Product } from "../models/product";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_GATEWAY_URL,
  headers: { "Content-Type": "application/json" },
});

const getAll = async () => {
  var response = await apiClient.get<Product[]>("/products");
  return response.data;
};

export const ProductService = {
  getAll,
};
