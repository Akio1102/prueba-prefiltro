import { useContext, useEffect } from "react";
import { MainContext } from "../../Context/MainContext.jsx";
import TrPedidos from "../Tr/TrPedidos.jsx";

export default function BodyPedidos() {
  const { Pedidos, getPedidos } = useContext(MainContext);

  useEffect(() => {
    getPedidos();
  }, []);

  return (
    <tbody>
      {Pedidos.map((pedido, index) => (
        <TrPedidos pedido={pedido} index={index} key={index + 1} />
      ))}
    </tbody>
  );
}
