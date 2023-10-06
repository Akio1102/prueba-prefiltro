export default function TrPedidos({ pedido, index }) {
  const { usuario, productos, total, fecha, estado } = pedido;

  const productosList = productos.map((producto, prodIndex) => (
    <li key={prodIndex}>
      Producto ID: {producto.productoId}, Cantidad: {producto.cantidad}
    </li>
  ));

  return (
    <tr>
      <th># {index + 1}</th>
      <th>{usuario}</th>
      <th>
        <ul>{productosList}</ul>
      </th>
      <th>${total}</th>
      <th>{new Date(fecha).toLocaleDateString()}</th>
      <th>{estado}</th>
      <th className="flex gap-3">
        <button className="btn btn-outline-warning">Editar</button>
        <button className="btn btn-outline-error">Eliminar</button>
      </th>
    </tr>
  );
}
