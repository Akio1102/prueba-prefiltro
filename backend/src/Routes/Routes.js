import { Router } from "express";
import CATEGORIASROUTES from "./Categorias.routes.js";
import COMENTARIOSROUTES from "./Comentarios.routes.js";
import PEDIDOSROUTES from "./Pedidos.routes.js";
import PRODUCTOSROUTES from "./Productos.routes.js";
import USUARIOSROUTES from "./Usuarios.routes.js";

const ROUTES = Router();

export default ROUTES.use("/Categorias", CATEGORIASROUTES)
  .use("/Comentarios", COMENTARIOSROUTES)
  .use("/Pedidos", PEDIDOSROUTES)
  .use("/Productos", PRODUCTOSROUTES)
  .use("/Usuarios", USUARIOSROUTES);
