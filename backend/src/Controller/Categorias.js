import * as CategoriasServices from "../Services/Categorias.service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/SendResponse.js";

export const GetAllCategorias = async (req, res) => {
  try {
    const allCategorias = await CategoriasServices.getAllCategorias();
    sendSuccessResponse(res, allCategorias);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const CreateOneCategoria = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const dataCategoria = {
      nombre,
      descripcion,
    };
    const newCategoria = await CategoriasServices.createCategoria(
      dataCategoria
    );
    sendSuccessResponse(res, newCategoria);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const UpdateOneCategoria = async (req, res) => {
  try {
    const { Id } = req.params;
    const updateCategoria = await CategoriasServices.updateCategoria(
      Id,
      req.body
    );
    sendSuccessResponse(res, updateCategoria);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const DeleteOneCategoria = async (req, res) => {
  try {
    const { Id } = req.params;
    const Categoria = await CategoriasServices.deleteCategoria(Id);
    sendSuccessResponse(res, Categoria);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
