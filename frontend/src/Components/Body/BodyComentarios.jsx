import { useContext, useEffect } from "react";
import { MainContext } from "../../Context/MainContext.jsx";
import TrComentarios from "../Tr/TrComentarios.jsx";

export default function BodyComentarios() {
  const { Comentarios, getComentarios } = useContext(MainContext);

  useEffect(() => {
    getComentarios();
  }, []);

  return (
    <tbody>
      {Comentarios.map((comentario, index) => (
        <TrComentarios comentario={comentario} index={index} key={index + 1} />
      ))}
    </tbody>
  );
}
