import { useQuery } from "react-query";
import { getUsuariosRequest } from "../../Api/Usuarios.js";
import TrUsuarios from "../Tr/TrUsuarios.jsx";

export default function BodyUsuarios() {
  const {
    isLoading,
    data: Usuarios,
    isError,
    error,
  } = useQuery({
    queryKey: ["usuarios"],
    queryFn: getUsuariosRequest,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div className="text-3xl">Loading....</div>;
  } else if (isError) {
    <div>Error: {error.message}</div>;
  }

  return (
    <tbody>
      {Usuarios.map((user, index) => (
        <TrUsuarios user={user} index={index} key={index + 1} />
      ))}
    </tbody>
  );
}
