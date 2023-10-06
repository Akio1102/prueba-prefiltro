export default function TrComentarios({ comentario, index }) {
  return (
    <tr>
      <th># {index + 1}</th>
      <th>{comentario.usuario} </th>
      <th>{comentario.producto} </th>
      <th>{comentario.texto} </th>
      <th>{comentario.calificacion} </th>
      <th className="flex gap-3">
        <button className="btn btn-outline-warning">Editar</button>
        <button className="btn btn-outline-error">Eliminar</button>
      </th>
    </tr>
  );
}
