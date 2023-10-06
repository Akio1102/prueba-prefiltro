import { useMutation, useQueryClient } from "react-query";
import { deleteCategoriasRequest } from "../../Api/Categorias.js";
import { ToastContainer, toast } from "react-toastify";

export default function TrCategorias({ categoria, index }) {
  const queryClient = useQueryClient();

  const notify = () => {
    toast.error("Categoria Eliminado Exitosamente", {
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

  const deleteCategoriasMutate = useMutation({
    mutationFn: deleteCategoriasRequest,
    onSuccess: () => {
      queryClient.invalidateQueries("categorias");
    },
  });

  const deleteCategoria = () => {
    deleteCategoriasMutate.mutate(categoria._id);
    notify();
  };

  return (
    <tr>
      <th># {index + 1}</th>
      <th>{categoria.nombre} </th>
      <th>{categoria.descripcion} </th>
      <th className="flex gap-3">
        <button className="btn btn-outline-warning">Editar</button>
        <button className="btn btn-outline-error" onClick={deleteCategoria}>
          Eliminar
        </button>
      </th>
      <th>
        <ToastContainer />
      </th>
    </tr>
  );
}
