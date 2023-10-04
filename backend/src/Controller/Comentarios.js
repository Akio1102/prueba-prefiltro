import * as ComentariosServices from "../Services/Comentarios.service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/SendResponse.js";

export const GetAllComentarios = async (req, res) => {
  try {
    const allComentarios = await ComentariosServices.getAllComentarios();
    sendSuccessResponse(res, allComentarios);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const CreateOneComentario = async (req, res) => {
  try {
    const { usuario, producto, texto, calificacion } = req.body;
    const dataComentario = {
      usuario,
      producto,
      texto,
      calificacion,
    };
    const newComentario = await ComentariosServices.createComentario(
      dataComentario
    );
    sendSuccessResponse(res, newComentario);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const UpdateOneComentario = async (req, res) => {
  try {
    const { Id } = req.params;
    const updateComentario = await ComentariosServices.updateComentario(
      Id,
      req.body
    );
    sendSuccessResponse(res, updateComentario);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const DeleteOneComentario = async (req, res) => {
  try {
    const { Id } = req.params;
    const Comentario = await ComentariosServices.deleteComentario(Id);
    sendSuccessResponse(res, Comentario);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
