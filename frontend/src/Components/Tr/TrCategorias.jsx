export default function TrCategorias({ categoria, index }) {
  return (
    <tr>
      <th># {index + 1}</th>
      <th>{categoria.nombre} </th>
      <th>{categoria.descripcion} </th>
      <th className="flex gap-3">
        <button className="btn btn-outline-warning">Editar</button>
        <button className="btn btn-outline-error">Eliminar</button>
      </th>
    </tr>
  );
}
