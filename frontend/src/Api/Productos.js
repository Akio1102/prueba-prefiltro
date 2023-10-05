import axios from "./axios.js";

export const getProductosRequest = () => axios.get("/Productos/All");

export const postProductosRequest = (producto) =>
  axios.post("/Productos/New", producto);

export const patchProductosRequest = (id, producto) =>
  axios.patch(`/Productos/Update/${id}`, producto);

export const deleteProductosRequest = (id) =>
  axios.delete(`/Productos/Delete/${id}`);
