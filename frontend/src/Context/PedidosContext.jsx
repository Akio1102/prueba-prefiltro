import { createContext, useState, useEffect } from "react";
import * as APIPEDIDOS from "../Api/Pedidos.js";

export const PedidosContext = createContext();

export const PedidosContextProvider = (props) => {
  const [Pedidos, setPedidos] = useState([]);

  const getPedidos = async () => {
    try {
      const res = await APIPEDIDOS.getPedidosRequest();
      setPedidos(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPedidos();
  }, []);

  return (
    <PedidosContext.Provider value={{ Pedidos }}>
      {props.children}
    </PedidosContext.Provider>
  );
};
