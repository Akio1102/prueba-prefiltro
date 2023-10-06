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
    return <div className="text-3xl">Loading....</div>;
  } else if (isError) {
    <div>Error: {error.message}</div>;
  }

  return (
    <tbody>
      {Comentarios.map((comentario, index) => (
        <TrComentarios comentario={comentario} index={index} key={index + 1} />
      ))}
    </tbody>
  );
}
