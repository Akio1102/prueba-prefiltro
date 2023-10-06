import { useQuery } from "react-query";
import { getPedidosRequest } from "../../Api/Pedidos.js";
import TrPedidos from "../Tr/TrPedidos.jsx";

export default function BodyPedidos() {
  const {
    isLoading,
    data: Pedidos,
    isError,
    error,
  } = useQuery({
    queryKey: ["pedidos"],
    queryFn: getPedidosRequest,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div className="text-3xl">Loading....</div>;
  } else if (isError) {
    <div>Error: {error.message}</div>;
  }

  return (
    <tbody>
      {Pedidos.map((pedido, index) => (
        <TrPedidos pedido={pedido} index={index} key={index + 1} />
      ))}
    </tbody>
  );
}
