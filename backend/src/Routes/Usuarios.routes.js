import { Router } from "express";
import * as UsuariosControllers from "../Controller/Usuarios.js";

const ROUTER = Router();

export default ROUTER.get("/All", UsuariosControllers.GetAllUsuarios)
  .post("/New", UsuariosControllers.CreateOneUsuario)
  .patch("/Update/:Id", UsuariosControllers.UpdateOneUsuario)
  .delete("/Delete/:Id", UsuariosControllers.DeleteOneUsuario);
