import axios from "./axios.js";

export const getComentariosRequest = () => axios.get("/Comentarios/All");

export const postComentariosRequest = (comentario) =>
  axios.post("/Comentarios/New", comentario);

export const patchComentariosRequest = (id, comentario) =>
  axios.patch(`/Comentarios/Update/${id}`, comentario);

export const deleteComentariosRequest = (id) =>
  axios.delete(`/Comentarios/Delete/${id}`);
