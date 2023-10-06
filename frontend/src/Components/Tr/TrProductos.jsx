import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { MainContext } from "../../Context/MainContext";

export default function TrProductos({ producto, index }) {
  const queryClient = useQueryClient();
  const { deleteProducto } = useContext(MainContext);

  const deleteProductoMutate = useMutation({
    mutationFn: deleteProducto,
    onSuccess: () => {
      queryClient.invalidateQueries("productos");
    },
  });

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
        <button
          className="btn btn-outline-error"
          onClick={() => deleteProductoMutate.mutate(producto._id)}
        >
          Eliminar
        </button>
      </th>
    </tr>
  );
}
