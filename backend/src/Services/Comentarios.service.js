import ConectDB from "../Database/Connection.js";
import { ObjectId } from "mongodb";

export const getAllComentarios = async () => {
  try {
    const Comentario = await ConectDB("Comentarios");
    const AllComentarios = await Comentario.find().toArray();

    return AllComentarios.length > 0
      ? {
          msg: "Comentarios Encontrados",
          data: AllComentarios,
        }
      : {
          msg: "No hay Comentarios",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const createComentario = async (ComentarioData) => {
  try {
    const Comentario = await ConectDB("Comentarios");
    const newComentario = await Comentario.insertOne(ComentarioData);

    return newComentario.acknowledged
      ? {
          msg: "Comentarios Creado Exitosamente",
        }
      : {
          msg: "Faltan Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const updateComentario = async (id, ComentarioData) => {
  try {
    const Comentario = await ConectDB("Comentarios");
    const updateOneComentario = await Comentario.updateOne(
      { _id: new ObjectId(id) },
      { $set: ComentarioData }
    );

    return updateOneComentario.acknowledged
      ? {
          msg: `Comentario con ID:${id} Actualizado Exitosamente`,
        }
      : {
          msg: "Faltan Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const deleteComentario = async (id) => {
  try {
    const Comentario = await ConectDB("Comentarios");
    const deleteOneComentario = await Comentario.deleteOne({
      _id: new ObjectId(id),
    });

    return deleteOneComentario.acknowledged
      ? {
          msg: `Comentario con ID:${id} Eliminado Exitosamente`,
        }
      : {
          msg: "Faltan Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};
