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

  if (isLoading) {
    return (
      <tbody>
        <tr>
          <td colSpan="4" className="text-3xl">
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
        <td colSpan="4">Error: {error.message}</td>
      </tr>
    </tbody>;
  }

  return (
    <tbody>
      {Categorias.map((categoria, index) => (
        <TrCategorias categoria={categoria} index={index} key={index + 1} />
      ))}
    </tbody>
  );
}
