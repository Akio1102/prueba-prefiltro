import { useContext } from "react";
import { CategoriasContext } from "../Context/CategoriasContext.jsx";
import { ComentariosContext } from "../Context/ComentariosContext.jsx";
import { PedidosContext } from "../Context/PedidosContext.jsx";
import { ProductosContext } from "../Context/ProductosContext.jsx";
import { UsuariosContext } from "../Context/UsuariosContext.jsx";

export default function TableBody({ collection }) {
  const { Categorias } = useContext(CategoriasContext);
  const { Comentarios } = useContext(ComentariosContext);
  const { Pedidos } = useContext(PedidosContext);
  const { Productos } = useContext(ProductosContext);
  const { Usuarios } = useContext(UsuariosContext);

  const collectionContent = {
    Categorias: (
      <tbody>
        {Categorias.map((categoria, index) => (
          <tr key={index + 1}>
            <th># {index + 1}</th>
            <th>{categoria.nombre} </th>
            <th>{categoria.descripcion} </th>
            <th className="flex gap-3">
              <button className="btn btn-outline-warning">Editar</button>
              <button className="btn btn-outline-error">Eliminar</button>
            </th>
          </tr>
        ))}
      </tbody>
    ),
    Comentarios: (
      <tbody>
        {Comentarios.map((comentario, index) => (
          <tr key={index + 1}>
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
        ))}
      </tbody>
    ),
    Pedidos: (
      <tbody>
        {Pedidos.map((pedido, index) => {
          const { usuario, productos, total, fecha, estado } = pedido;

          const productosList = productos.map((producto, prodIndex) => (
            <li key={prodIndex}>
              Producto ID: {producto.productoId}, Cantidad: {producto.cantidad}
            </li>
          ));

          return (
            <tr key={index + 1}>
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
        })}
      </tbody>
    ),
    Productos: (
      <tbody>
        {Productos.map((producto, index) => (
          <tr key={index + 1}>
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
        ))}
      </tbody>
    ),
    Usuarios: (
      <tbody>
        {Usuarios.map((user, index) => {
          const {
            nombre,
            email,
            password,
            rol,
            telefono,
            direccion,
            fechaRegistro,
          } = user;

          return (
            <tr key={index + 1}>
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
        })}
      </tbody>
    ),
  };
  const content = collectionContent[collection];

  return content;
}
