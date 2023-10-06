import axios from "./axios.js";

export const getPedidosRequest = async () => {
  try {
    const res = await axios.get("/Pedidos/All");
    return res.data.data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const postPedidosRequest = async (pedido) => {
  try {
    await axios.post("/Pedidos/New", pedido);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const patchPedidosRequest = async (id, pedido) => {
  try {
    await axios.patch(`/Pedidos/Update/${id}`, pedido);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const deletePedidosRequest = async (id) => {
  try {
    await axios.delete(`/Pedidos/Delete/${id}`);
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
