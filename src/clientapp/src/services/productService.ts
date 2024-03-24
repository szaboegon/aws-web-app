import axios from "axios";
import { Product } from "../models/product";
import { ProductFormData } from "../models/productFormData";
import { UploaderService } from "./uploaderService";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_GATEWAY_URL,
  //headers: { "Content-Type": "application/json" },
});

const getAll = async (): Promise<Product[]> => {
  var response = await apiClient.get<Product[]>("/products");
  console.log(response.data);
  return response.data;
};

const create = async (data: ProductFormData) => {
  const imageNames = data.images?.map((i) => i.name);
  let { images, ...dataWithoutImages } = data;
  var response = await apiClient.post<Dictionary<string>>("/products", {
    ...dataWithoutImages,
    imageNames: imageNames,
  });

  const preSignedUrls = response.data;

  var promises = [];
  if (data.images) {
    for (const image of data.images) {
      promises.push(UploaderService.putFile(preSignedUrls[image.name], image));
    }
  }

  await Promise.all(promises);
};

export const ProductService = {
  getAll,
  create,
};
