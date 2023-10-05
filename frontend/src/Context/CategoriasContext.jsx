import { createContext, useState, useEffect } from "react";
import * as APICATEGORIAS from "../Api/Categorias.js";

export const CategoriasContext = createContext();

export const CategoriasContextProvider = (props) => {
  const [Categorias, setCategorias] = useState([]);

  const getProductos = async () => {
    try {
      const res = await APICATEGORIAS.getCategoriasRequest();
      setCategorias(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <CategoriasContext.Provider value={{ Categorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};
