import { useContext } from "react";
import { MainContext } from "../../Context/MainContext.jsx";
import { useQuery } from "react-query";
import TrProductos from "../Tr/TrProductos.jsx";

export default function BodyProductos() {
  const { getProductos } = useContext(MainContext);
  const {
    isLoading,
    data: productos,
    isError,
    error,
  } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductos,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div>Loading....</div>;
  } else if (isError) {
    <div>Error: {error.message}</div>;
  }
  return (
    <tbody>
      {productos.map((producto, index) => (
        <TrProductos producto={producto} index={index} key={index + 1} />
      ))}
    </tbody>
  );
}
