import ConectDB from "../Database/Connection.js";
import { ObjectId } from "mongodb";

export const getAllCategorias = async () => {
  try {
    const Categorias = await ConectDB("Categorias");
    const AllCategorias = await Categorias.find().toArray();

    return AllCategorias.length > 0
      ? {
          msg: "Categorias Encontrados",
          data: AllCategorias,
        }
      : {
          msg: "No hay Categorias",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const createCategoria = async (CategoriaData) => {
  try {
    const Categoria = await ConectDB("Categorias");
    const newUsuario = await Categoria.insertOne(CategoriaData);

    return newUsuario.acknowledged
      ? {
          msg: "Categoria Creado Exitosamente",
        }
      : {
          msg: "Faltan Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const updateCategoria = async (id, CategoriaData) => {
  try {
    const Categoria = await ConectDB("Categorias");
    const updateOneCategoria = await Categoria.updateOne(
      { _id: new ObjectId(id) },
      { $set: CategoriaData }
    );

    return updateOneCategoria.acknowledged
      ? {
          msg: `Categoria con ID:${id} Actualizado Exitosamente`,
        }
      : {
          msg: "Faltan Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const deleteCategoria = async (id) => {
  try {
    const Categoria = await ConectDB("Categorias");
    const deleteOneCategoria = await Categoria.deleteOne({
      _id: new ObjectId(id),
    });

    return deleteOneCategoria.acknowledged
      ? {
          msg: `Categoria con ID:${id} Eliminado Exitosamente`,
        }
      : {
          msg: "Faltan Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};
