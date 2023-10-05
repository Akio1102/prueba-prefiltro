import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar navbar-floating p-4 flex-wrap sm:flex-nowrap">
      <div className="navbar-start justify-center sm:justify-normal">
        <NavLink to="/" className="navbar-item text-2xl">
          TechFlow
        </NavLink>
      </div>
      <div className="navbar-end justify-center flex-wrap-reverse sm:flex-nowrap">
        <NavLink
          to="/"
          className="navbar-item btn btn-ghost btn-lg btn-rounded"
        >
          Productos
        </NavLink>
        <NavLink
          to="/Categorias"
          className="navbar-item btn btn-ghost btn-lg btn-rounded"
        >
          Categorias
        </NavLink>
        <NavLink
          to="/Comentarios"
          className="navbar-item btn btn-ghost btn-lg btn-rounded"
        >
          Comentarios
        </NavLink>
        <NavLink
          to="/Pedidos"
          className="navbar-item btn btn-ghost btn-lg btn-rounded"
        >
          Pedidos
        </NavLink>
        <NavLink
          to="/Usuarios"
          className="navbar-item btn btn-ghost btn-lg btn-rounded"
        >
          Usuarios
        </NavLink>
      </div>
    </div>
  );
}
