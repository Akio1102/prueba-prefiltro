import { useContext, useEffect } from "react";
import { MainContext } from "../../Context/MainContext.jsx";
import TrProductos from "../Tr/TrProductos.jsx";

export default function BodyProductos() {
  const { Productos, getProductos } = useContext(MainContext);

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <tbody>
      {Productos.map((producto, index) => (
        <TrProductos producto={producto} index={index} key={index + 1} />
      ))}
    </tbody>
  );
}
