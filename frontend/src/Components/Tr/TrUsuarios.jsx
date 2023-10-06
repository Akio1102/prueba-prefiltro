import { useMutation, useQueryClient } from "react-query";
import { deleteUsuariosRequest } from "../../Api/Usuarios.js";
import { ToastContainer, toast } from "react-toastify";

export default function TrUsuarios({ user, index }) {
  const queryClient = useQueryClient();

  const notify = () => {
    toast.error("Usuario Eliminado Exitosamente", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const deleteUsuariosMutate = useMutation({
    mutationFn: deleteUsuariosRequest,
    onSuccess: () => {
      queryClient.invalidateQueries("usuarios");
    },
  });

  const deleteUsuario = () => {
    deleteUsuariosMutate.mutate(user._id);
    notify();
  };

  return (
    <tr>
      <th># {index + 1}</th>
      <th>{user.nombre}</th>
      <th>{user.email}</th>
      <th>{user.password}</th>
      <th>{user.rol}</th>
      <th>{user.telefono}</th>
      <th>{user.direccion}</th>
      <th>{new Date(user.fechaRegistro).toLocaleDateString()}</th>
      <th className="flex gap-3">
        <button className="btn btn-outline-warning">Editar</button>
        <button className="btn btn-outline-error" onClick={deleteUsuario}>
          Eliminar
        </button>
      </th>
      <th>
        <ToastContainer />
      </th>
    </tr>
  );
}
