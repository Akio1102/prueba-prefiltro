import ModalPedidos from "../Modal/ModalPedidos.jsx";
import HeadPedidos from "../Head/HeadPedidos.jsx";
import BodyPedidos from "../Body/BodyPedidos.jsx";

export default function TablePedidos() {
  return (
    <div className="flex flex-col gap-6 w-full overflow-auto bg-zinc-800">
      <h2 className="text-white text-5xl text-center mt-32">Tabla Pedidos</h2>
      <ModalPedidos />
      <table className="table-hover table mb-8 px-10">
        <HeadPedidos />
        <BodyPedidos />
      </table>
    </div>
  );
}
