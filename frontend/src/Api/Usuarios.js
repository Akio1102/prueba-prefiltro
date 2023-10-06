import axios from "./axios.js";

export const getUsuariosRequest = async () => {
  try {
    const res = await axios.get("/Usuarios/All");
    return res.data.data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const postUsuariosRequest = async (usuario) => {
  try {
    await axios.post("/Usuarios/New", usuario);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const patchUsuariosRequest = async (id, usuario) => {
  try {
    await axios.patch(`/Usuarios/Update/${id}`, usuario);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const deleteUsuariosRequest = async (id) => {
  try {
    await axios.delete(`/Usuarios/Delete/${id}`);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
