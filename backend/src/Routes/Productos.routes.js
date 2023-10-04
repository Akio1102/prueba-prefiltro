import { Router } from "express";
import * as ProductosControllers from "../Controller/Productos.js";

const ROUTER = Router();

export default ROUTER.get("/All", ProductosControllers.GetAllProductos)
  .post("/New", ProductosControllers.CreateOneProducto)
  .patch("/Update/:Id", ProductosControllers.UpdateOneProducto)
  .delete("/Delete/:Id", ProductosControllers.DeleteOneProducto);
