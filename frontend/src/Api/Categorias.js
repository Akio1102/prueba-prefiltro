import axios from "./axios.js";

export const getCategoriasRequest = async () => {
  try {
    const res = await axios.get("/Categorias/All");
    return res.data.data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const postCategoriasRequest = async (categoria) => {
  try {
    await axios.post("/Categorias/New", categoria);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const patchCategoriasRequest = async (id, categoria) => {
  try {
    await axios.patch(`/Categorias/Update/${id}`, categoria);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const deleteCategoriasRequest = async (id) => {
  try {
    await axios.delete(`/Categorias/Delete/${id}`);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
