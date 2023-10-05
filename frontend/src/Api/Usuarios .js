import axios from "./axios.js";

export const getUsuariosRequest = () => axios.get("/Usuarios/All");

export const postUsuariosRequest = (usuario) =>
  axios.post("/Usuarios/New", usuario);

export const patchUsuariosRequest = (id, usuario) =>
  axios.patch(`/Usuarios/Update/${id}`, usuario);

export const deleteUsuariosRequest = (id) =>
  axios.delete(`/Usuarios/Delete/${id}`);
