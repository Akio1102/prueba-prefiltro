import { Router } from "express";
import * as ComentariosControllers from "../Controller/Comentarios.js";

const ROUTER = Router();

export default ROUTER.get("/All", ComentariosControllers.GetAllComentarios)
  .post("/New", ComentariosControllers.CreateOneComentario)
  .patch("/Update/:Id", ComentariosControllers.UpdateOneComentario)
  .delete("/Delete/:Id", ComentariosControllers.DeleteOneComentario);
