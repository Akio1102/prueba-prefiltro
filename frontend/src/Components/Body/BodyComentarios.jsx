import { useQuery } from "react-query";
import { getComentariosRequest } from "../../Api/Comentarios.js";
import TrComentarios from "../Tr/TrComentarios.jsx";

export default function BodyComentarios() {
  const {
    isLoading,
    data: Comentarios,
    isError,
    error,
  } = useQuery({
    queryKey: ["comentarios"],
    queryFn: getComentariosRequest,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <tbody>
        <tr>
          <td colSpan="6" className="text-3xl">
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
        <td colSpan="6">Error: {error.message}</td>
      </tr>
    </tbody>;
  }

  return (
    <tbody>
      {Comentarios.map((comentario, index) => (
        <TrComentarios comentario={comentario} index={index} key={index + 1} />
      ))}
    </tbody>
  );
}
