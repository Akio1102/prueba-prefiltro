import axios from "./axios.js";

export const getCategoriasRequest = () => axios.get("/Categorias/All");

export const postCategoriasRequest = (categoria) =>
  axios.post("/Categorias/New", categoria);

export const patchCategoriasRequest = (id, categoria) =>
  axios.patch(`/Categorias/Update/${id}`, categoria);

export const deleteCategoriasRequest = (id) =>
  axios.delete(`/Categorias/Delete/${id}`);
