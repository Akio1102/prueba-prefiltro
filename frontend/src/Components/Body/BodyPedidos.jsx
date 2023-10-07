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
    return (
      <tbody>
        <tr>
          <td colSpan="7" className="text-3xl">
            <div className="skeleton h-40 rounded-md text-center p-16 text-2xl">
              Loading....
            </div>
          </td>
        </tr>
      </tbody>
    );
  } else if (isError) {
    <tbody>
      <tr>
        <td colSpan="7">Error: {error.message}</td>
      </tr>
    </tbody>;
  }

  return (
    <tbody>
      {Pedidos.map((pedido, index) => (
        <TrPedidos pedido={pedido} index={index} key={index + 1} />
      ))}
    </tbody>
  );
}
