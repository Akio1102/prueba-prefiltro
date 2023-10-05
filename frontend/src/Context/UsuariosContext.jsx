import { createContext, useState, useEffect } from "react";
import * as APIUSUARIOS from "../Api/Usuarios.js";

export const UsuariosContext = createContext();

export const UsuariosContextProvider = (props) => {
  const [Usuarios, setUsuarios] = useState([]);

  const getProductos = async () => {
    try {
      const res = await APIUSUARIOS.getUsuariosRequest();
      setUsuarios(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <UsuariosContext.Provider value={{ Usuarios }}>
      {props.children}
    </UsuariosContext.Provider>
  );
};
