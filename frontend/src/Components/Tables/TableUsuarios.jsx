import ModalUsuarios from "../Modal/ModalUsuarios.jsx";
import HeadUsuarios from "../Head/HeadUsuarios.jsx";
import BodyUsuarios from "../Body/BodyUsuarios.jsx";

export default function TableUsuarios() {
  return (
    <div className="flex flex-col gap-6 w-full overflow-auto bg-zinc-800">
      <h2 className="text-white text-5xl text-center mt-32">
        Tabla Categorias
      </h2>
      <ModalUsuarios />
      <table className="table-hover table mb-8 px-10">
        <HeadUsuarios />
        <BodyUsuarios />
      </table>
    </div>
  );
}
