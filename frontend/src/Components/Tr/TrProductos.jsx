export default function TrProductos({ producto, index }) {
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
        <button className="btn btn-outline-error">Eliminar</button>
      </th>
    </tr>
  );
}
