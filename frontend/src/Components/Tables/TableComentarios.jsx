import ModalComentarios from "../Modal/ModalComentarios.jsx";
import HeadComentarios from "../Head/HeadComentarios.jsx";
import BodyComentarios from "../Body/BodyComentarios.jsx";

export default function TableComentarios() {
  return (
    <div className="flex flex-col gap-6 w-full overflow-auto bg-zinc-800">
      <h2 className="text-white text-5xl text-center mt-32">
        Tabla Categorias
      </h2>
      <ModalComentarios />
      <table className="table-hover table mb-8 px-10">
        <HeadComentarios />
        <BodyComentarios />
      </table>
    </div>
  );
}
