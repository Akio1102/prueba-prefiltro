import { createContext, useState, useEffect } from "react";
import * as APICOMENTARIOS from "../Api/Comentarios.js";

export const ComentariosContext = createContext();

export const ComentariosContextProvider = (props) => {
  const [Comentarios, setComentarios] = useState([]);

  const getComentarios = async () => {
    try {
      const res = await APICOMENTARIOS.getComentariosRequest();
      setComentarios(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getComentarios();
  }, []);

  return (
    <ComentariosContext.Provider value={{ Comentarios }}>
      {props.children}
    </ComentariosContext.Provider>
  );
};
