import * as PedidosServices from "../Services/Pedidos.service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/SendResponse.js";

export const GetAllPedidos = async (req, res) => {
  try {
    const allPedidos = await PedidosServices.getAllPedidos();
    sendSuccessResponse(res, allPedidos);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const CreateOnePedido = async (req, res) => {
  try {
    const { usuario, productos, total, fecha, estado } = req.body;
    const dataPedido = {
      usuario,
      productos,
      total,
      fecha,
      estado,
    };
    const newPedido = await PedidosServices.createPedido(dataPedido);
    sendSuccessResponse(res, newPedido);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const UpdateOnePedido = async (req, res) => {
  try {
    const { Id } = req.params;
    const updatePedido = await PedidosServices.updatePedido(Id, req.body);
    sendSuccessResponse(res, updatePedido);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const DeleteOnePedido = async (req, res) => {
  try {
    const { Id } = req.params;
    const Pedido = await PedidosServices.deletePedido(Id);
    sendSuccessResponse(res, Pedido);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
