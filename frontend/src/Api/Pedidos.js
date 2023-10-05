import axios from "./axios.js";

export const getPedidosRequest = () => axios.get("/Pedidos/All");

export const postPedidosRequest = (pedido) =>
  axios.post("/Pedidos/New", pedido);

export const patchPedidosRequest = (id, pedido) =>
  axios.patch(`/Pedidos/Update/${id}`, pedido);

export const deletePedidosRequest = (id) =>
  axios.delete(`/Pedidos/Delete/${id}`);
