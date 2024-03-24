import axios from "axios";

const apiClient = axios.create({
  headers: { "Content-Type": "image/*" },
});

const putFile = async (uploadUrl: string, file: File) => {
  var fileData = await file.arrayBuffer();
  var response = await apiClient.put(uploadUrl, fileData);
  return response.data;
};

export const UploaderService = {
  putFile,
};
