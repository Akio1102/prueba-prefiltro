import ConectDB from "../Database/Connection.js";
import { ObjectId } from "mongodb";

export const getAllUsuarios = async () => {
  try {
    const Usuarios = await ConectDB("Usuarios");
    const AllUsuarios = await Usuarios.find().toArray();

    return AllUsuarios.length > 0
      ? {
          msg: "Usuarios Encontrados",
          data: AllUsuarios,
        }
      : {
          msg: "No hay Usuarios",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const createUsuario = async (UsuarioData) => {
  try {
    const Usuario = await ConectDB("Usuarios");
    const newUsuario = await Usuario.insertOne(UsuarioData);

    return newUsuario.acknowledged
      ? {
          msg: "Usuarios Creado Exitosamente",
        }
      : {
          msg: "Faltan Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const updateUsuarios = async (id, UsuarioData) => {
  try {
    const Usuario = await ConectDB("Usuarios");
    const updateOneUsuario = await Usuario.updateOne(
      { _id: new ObjectId(id) },
      { $set: UsuarioData }
    );

    return updateOneUsuario.acknowledged
      ? {
          msg: `Usuario con ID:${id} Actualizado Exitosamente`,
        }
      : {
          msg: "Faltan Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};

export const deleteUsuarios = async (id) => {
  try {
    const Usuario = await ConectDB("Usuarios");
    const deleteOneUsuario = await Usuario.deleteOne({
      _id: new ObjectId(id),
    });

    return deleteOneUsuario.acknowledged
      ? {
          msg: `Usuario con ID:${id} Eliminado Exitosamente`,
        }
      : {
          msg: "Faltan Datos",
          status: 404,
        };
  } catch (error) {
    throw new Error(`Error en el Servidor: ${error.message}`);
  }
};
