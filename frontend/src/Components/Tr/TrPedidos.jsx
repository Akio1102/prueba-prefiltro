import { useMutation, useQueryClient } from "react-query";
import { deletePedidosRequest } from "../../Api/Pedidos.js";
import { ToastContainer, toast } from "react-toastify";

export default function TrPedidos({ pedido, index }) {
  const queryClient = useQueryClient();

  const notify = () => {
    toast.error("Pedido Eliminado Exitosamente", {
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

  const deletePedidosMutate = useMutation({
    mutationFn: deletePedidosRequest,
    onSuccess: () => {
      queryClient.invalidateQueries("pedidos");
    },
  });

  const deletePedido = () => {
    deletePedidosMutate.mutate(pedido._id);
    notify();
  };

  return (
    <tr>
      <th># {index + 1}</th>
      <th>{pedido.usuario}</th>
      <th>
        <ul>Cantidad: {pedido.productos.length}</ul>
      </th>
      <th>${pedido.total}</th>
      <th>{new Date(pedido.fecha).toLocaleDateString()}</th>
      <th>{pedido.estado}</th>
      <th className="flex gap-3">
        <button className="btn btn-outline-warning">Editar</button>
        <button className="btn btn-outline-error" onClick={deletePedido}>
          Eliminar
        </button>
      </th>
      <th>
        <ToastContainer />
      </th>
    </tr>
  );
}
