import { useQuery } from "react-query";
import { getCategoriasRequest } from "../../Api/Categorias.js";
import TrCategorias from "../Tr/TrCategorias.jsx";

export default function BodyCategorias() {
  const {
    isLoading,
    data: Categorias,
    isError,
    error,
  } = useQuery({
    queryKey: ["categorias"],
    queryFn: getCategoriasRequest,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div className="text-3xl">Loading....</div>;
  } else if (isError) {
    <div>Error: {error.message}</div>;
  }

  return (
    <tbody>
      {Categorias.map((categoria, index) => (
        <TrCategorias categoria={categoria} index={index} key={index + 1} />
      ))}
    </tbody>
  );
}
