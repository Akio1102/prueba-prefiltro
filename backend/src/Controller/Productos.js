import * as ProductosServices from "../Services/Productos.service.js";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../Helpers/SendResponse.js";

export const GetAllProductos = async (req, res) => {
  try {
    const allProductos = await ProductosServices.getAllProductos();
    sendSuccessResponse(res, allProductos);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const CreateOneProducto = async (req, res) => {
  try {
    const { nombre, descripcion, categoria, precio, stock } = req.body;
    const dataProducto = {
      nombre,
      descripcion,
      categoria,
      precio,
      stock,
    };
    const newProducto = await ProductosServices.createProducto(dataProducto);
    sendSuccessResponse(res, newProducto);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const UpdateOneProducto = async (req, res) => {
  try {
    const { Id } = req.params;
    const updateProducto = await ProductosServices.updateProducto(Id, req.body);
    sendSuccessResponse(res, updateProducto);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

export const DeleteOneProducto = async (req, res) => {
  try {
    const { Id } = req.params;
    const Producto = await ProductosServices.deleteProducto(Id);
    sendSuccessResponse(res, Producto);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
