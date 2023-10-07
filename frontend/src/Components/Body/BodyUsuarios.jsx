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
    return (
      <tbody>
        <tr>
          <td colSpan="9" className="text-3xl">
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
        <td colSpan="9">Error: {error.message}</td>
      </tr>
    </tbody>;
  }

  return (
    <tbody>
      {Usuarios.map((user, index) => (
        <TrUsuarios user={user} index={index} key={index + 1} />
      ))}
    </tbody>
  );
}
