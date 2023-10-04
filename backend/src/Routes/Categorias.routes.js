import { Router } from "express";
import * as CategoriasControllers from "../Controller/Categorias.js";

const ROUTER = Router();

export default ROUTER.get("/All", CategoriasControllers.GetAllCategorias)
  .post("/New", CategoriasControllers.CreateOneCategoria)
  .patch("/Update/:Id", CategoriasControllers.UpdateOneCategoria)
  .delete("/Delete/:Id", CategoriasControllers.DeleteOneCategoria);
