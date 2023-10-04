import ConectDB from "../Database/Connection.js";
import { ObjectId } from "mongodb";

export const getAllProductos = async () => {
  try {
    const Productos = await ConectDB("Productos");
    const AllProductos = await Productos.find().toArray();

    return AllProductos.length > 0
      ? {
          msg: "Productos Encontrados",
          data: AllProductos,
        }
      : {
          msg: "No hay Productos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const createProducto = async (ProductoData) => {
  try {
    const Producto = await ConectDB("Productos");
    const newProducto = await Producto.insertOne(ProductoData);

    return newProducto.acknowledged
      ? {
          msg: "Productos Creado Exitosamente",
        }
      : {
          msg: "Faltan Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const updateProducto = async (id, ProductoData) => {
  try {
    const Producto = await ConectDB("Productos");
    const updateOneProducto = await Producto.updateOne(
      { _id: new ObjectId(id) },
      { $set: ProductoData }
    );

    return updateOneProducto.acknowledged
      ? {
          msg: `Producto con ID:${id} Actualizado Exitosamente`,
        }
      : {
          msg: "Faltan Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const deleteProducto = async (id) => {
  try {
    const Producto = await ConectDB("Productos");
    const deleteOneProducto = await Producto.deleteOne({
      _id: new ObjectId(id),
    });

    return deleteOneProducto.acknowledged
      ? {
          msg: `Producto con ID:${id} Eliminado Exitosamente`,
        }
      : {
          msg: "Faltan Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};
