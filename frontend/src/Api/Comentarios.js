import axios from "./axios.js";

export const getComentariosRequest = async () => {
  try {
    const res = await axios.get("/Comentarios/All");
    return res.data.data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const postComentariosRequest = async (comentario) => {
  try {
    await axios.post("/Comentarios/New", comentario);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const patchComentariosRequest = async (id, comentario) => {
  try {
    await axios.patch(`/Comentarios/Update/${id}`, comentario);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const deleteComentariosRequest = async (id) => {
  try {
    await axios.delete(`/Comentarios/Delete/${id}`);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
