import ModalProductos from "../Modal/ModalProductos.jsx";
import HeadProductos from "../Head/HeadProductos.jsx";
import BodyProductos from "../Body/BodyProductos.jsx";

export default function TableProductos() {
  return (
    <div className="flex flex-col gap-6 w-full overflow-auto bg-zinc-800">
      <h2 className="text-white text-5xl text-center mt-32">Tabla Productos</h2>
      <ModalProductos />
      <table className="table-hover table mb-8 px-10">
        <HeadProductos />
        <BodyProductos />
      </table>
    </div>
  );
}
