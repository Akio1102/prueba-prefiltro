import { useMutation, useQueryClient } from "react-query";
import { deleteComentariosRequest } from "../../Api/Comentarios.js";
import { ToastContainer, toast } from "react-toastify";

export default function TrComentarios({ comentario, index }) {
  const queryClient = useQueryClient();

  const notify = () => {
    toast.error("Comentario Eliminado Exitosamente", {
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

  const deleteComentariosMutate = useMutation({
    mutationFn: deleteComentariosRequest,
    onSuccess: () => {
      queryClient.invalidateQueries("comentarios");
    },
  });

  const deleteComentario = () => {
    deleteComentariosMutate.mutate(comentario._id);
    notify();
  };

  return (
    <tr>
      <th># {index + 1}</th>
      <th>{comentario.usuario} </th>
      <th>{comentario.producto} </th>
      <th>{comentario.texto} </th>
      <th>{comentario.calificacion} </th>
      <th className="flex gap-3">
        <button className="btn btn-outline-warning">Editar</button>
        <button className="btn btn-outline-error" onClick={deleteComentario}>
          Eliminar
        </button>
      </th>
      <th>
        <ToastContainer />
      </th>
    </tr>
  );
}
