import axios from "./axios.js";

export const getProductosRequest = async () => {
  try {
    const res = await axios.get("/Productos/All");
    return res.data.data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const postProductosRequest = async (producto) => {
  try {
    await axios.post("/Productos/New", producto);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const patchProductosRequest = async (id, producto) => {
  try {
    await axios.patch(`/Productos/Update/${id}`, producto);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const deleteProductosRequest = async (id) => {
  try {
    await axios.delete(`/Productos/Delete/${id}`);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
