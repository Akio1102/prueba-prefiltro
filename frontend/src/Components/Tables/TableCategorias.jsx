import ModalCategorias from "../Modal/ModalCategorias.jsx";
import HeadCategorias from "../Head/HeadCategorias.jsx";
import BodyCategorias from "../Body/BodyCategorias.jsx";

export default function TableCategorias() {
  return (
    <div className="flex flex-col gap-6 w-full overflow-auto bg-zinc-800">
      <h2 className="text-white text-5xl text-center mt-32">
        Tabla Categorias
      </h2>
      <ModalCategorias />
      <table className="table-hover table mb-8 px-10">
        <HeadCategorias />
        <BodyCategorias />
      </table>
    </div>
  );
}
