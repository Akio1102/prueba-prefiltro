import { useQuery } from "react-query";
import { getProductosRequest } from "../../Api/Productos.js";
import TrProductos from "../Tr/TrProductos.jsx";

export default function BodyProductos() {
  const {
    isLoading,
    data: Productos,
    isError,
    error,
  } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductosRequest,
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
        <td colSpan="7" className="text-3xl">
          Error: {error.message}
        </td>
      </tr>
    </tbody>;
  }

  return (
    <tbody>
      {Productos.map((producto, index) => (
        <TrProductos producto={producto} index={index} key={index + 1} />
      ))}
    </tbody>
  );
}
