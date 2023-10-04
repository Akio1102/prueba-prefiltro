import * as UsuariosServices from "../Services/Usuarios.service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/SendResponse.js";

export const GetAllUsuarios = async (req, res) => {
  try {
    const allUsuarios = await UsuariosServices.getAllUsuarios();
    sendSuccessResponse(res, allUsuarios);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const CreateOneUsuario = async (req, res) => {
  try {
    const { nombre, email, password, rol, telefono, direccion, fechaRegistro } =
      req.body;
    const dataUsuario = {
      nombre,
      email,
      password,
      rol,
      telefono,
      direccion,
      fechaRegistro,
    };
    const newUsuario = await UsuariosServices.createUsuario(dataUsuario);
    sendSuccessResponse(res, newUsuario);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const UpdateOneUsuario = async (req, res) => {
  try {
    const { Id } = req.params;
    const updateUsuario = await UsuariosServices.updateUsuarios(Id, req.body);
    sendSuccessResponse(res, updateUsuario);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const DeleteOneUsuario = async (req, res) => {
  try {
    const { Id } = req.params;
    const Usuario = await UsuariosServices.deleteUsuarios(Id);
    sendSuccessResponse(res, Usuario);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
