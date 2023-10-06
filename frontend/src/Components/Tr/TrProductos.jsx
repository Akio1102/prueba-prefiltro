import { useMutation, useQueryClient } from "react-query";
import { deleteProductosRequest } from "../../Api/Productos.js";
import { ToastContainer, toast } from "react-toastify";

export default function TrProductos({ producto, index }) {
  const queryClient = useQueryClient();

  const notify = () => {
    toast.error("Producto Eliminado Exitosamente", {
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

  const deleteProductoMutate = useMutation({
    mutationFn: deleteProductosRequest,
    onSuccess: () => {
      queryClient.invalidateQueries("productos");
    },
  });

  const deleteProduct = () => {
    deleteProductoMutate.mutate(producto._id);
    notify();
  };

  return (
    <tr>
      <th># {index + 1}</th>
      <th>{producto.nombre} </th>
      <th>{producto.categoria} </th>
      <th>{producto.descripcion} </th>
      <th>$ {producto.precio} </th>
      <th>{producto.stock} </th>
      <th className="flex gap-3">
        <button className="btn btn-outline-warning">Editar</button>
        <button className="btn btn-outline-error" onClick={deleteProduct}>
          Eliminar
        </button>
      </th>
      <th>
        <ToastContainer />
      </th>
    </tr>
  );
}
