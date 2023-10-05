import { useContext } from "react";
import { ProductosContext } from "../Context/ProductosContext.jsx";

export default function ProductosPage() {
  const { Productos } = useContext(ProductosContext);

  return (
    <div>
      {Productos.map((producto) => (
        <p>{producto.nombre}</p>
      ))}
    </div>
  );
}
