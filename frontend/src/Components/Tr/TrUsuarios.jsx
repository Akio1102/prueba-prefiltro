export default function TrUsuarios({ user, index }) {
  const { nombre, email, password, rol, telefono, direccion, fechaRegistro } =
    user;

  return (
    <tr>
      <th># {index + 1}</th>
      <th>{nombre}</th>
      <th>{email}</th>
      <th>{password}</th>
      <th>{rol}</th>
      <th>{telefono}</th>
      <th>{direccion}</th>
      <th>{new Date(fechaRegistro).toLocaleDateString()}</th>
      <th className="flex gap-3">
        <button className="btn btn-outline-warning">Editar</button>
        <button className="btn btn-outline-error">Eliminar</button>
      </th>
    </tr>
  );
}
