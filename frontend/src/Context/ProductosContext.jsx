import { createContext, useState, useEffect } from "react";
import * as APIPRODUCTOS from "../Api/Productos.js";

export const ProductosContext = createContext();

export const ProductosContextProvider = (props) => {
  const [Productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const res = await APIPRODUCTOS.getProductosRequest();
      setProductos(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <ProductosContext.Provider value={{ Productos }}>
      {props.children}
    </ProductosContext.Provider>
  );
};
