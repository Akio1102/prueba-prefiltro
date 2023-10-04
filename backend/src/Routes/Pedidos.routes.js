import { Router } from "express";
import * as PedidosControllers from "../Controller/Pedidos.js";

const ROUTER = Router();

export default ROUTER.get("/All", PedidosControllers.GetAllPedidos)
  .post("/New", PedidosControllers.CreateOnePedido)
  .patch("/Update/:Id", PedidosControllers.UpdateOnePedido)
  .delete("/Delete/:Id", PedidosControllers.DeleteOnePedido);
