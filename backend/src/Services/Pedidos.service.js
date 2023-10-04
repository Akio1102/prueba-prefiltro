import ConectDB from "../Database/Connection.js";
import { ObjectId } from "mongodb";

export const getAllPedidos = async () => {
  try {
    const Pedido = await ConectDB("Pedidos");
    const AllPedidos = await Pedido.find().toArray();

    return AllPedidos.length > 0
      ? {
          msg: "Pedidos Encontrados",
          data: AllPedidos,
        }
      : {
          msg: "No hay Pedidos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const createPedido = async (PedidoData) => {
  try {
    const Pedido = await ConectDB("Pedidos");
    const newPedido = await Pedido.insertOne(PedidoData);

    return newPedido.acknowledged
      ? {
          msg: "Pedidos Creado Exitosamente",
        }
      : {
          msg: "Faltan Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const updatePedido = async (id, PedidoData) => {
  try {
    const Pedido = await ConectDB("Pedidos");
    const updateOnePedido = await Pedido.updateOne(
      { _id: new ObjectId(id) },
      { $set: PedidoData }
    );

    return updateOnePedido.acknowledged
      ? {
          msg: `Pedido con ID:${id} Actualizado Exitosamente`,
        }
      : {
          msg: "Faltan Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const deletePedido = async (id) => {
  try {
    const Pedido = await ConectDB("Pedidos");
    const deleteOnePedido = await Pedido.deleteOne({
      _id: new ObjectId(id),
    });

    return deleteOnePedido.acknowledged
      ? {
          msg: `Pedido con ID:${id} Eliminado Exitosamente`,
        }
      : {
          msg: "Faltan Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};
