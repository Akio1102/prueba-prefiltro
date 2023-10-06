import { useContext, useEffect } from "react";
import { MainContext } from "../../Context/MainContext.jsx";
import TrCategorias from "../Tr/TrCategorias.jsx";

export default function BodyCategorias() {
  const { Categorias, getCategorias } = useContext(MainContext);

  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <tbody>
      {Categorias.map((categoria, index) => (
        <TrCategorias categoria={categoria} index={index} key={index + 1} />
      ))}
    </tbody>
  );
}
