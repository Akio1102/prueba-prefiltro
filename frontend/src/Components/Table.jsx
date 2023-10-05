import NewModal from "./NewModal.jsx";
import TableHead from "./TableHead.jsx";
import TableBody from "./TableBody.jsx";

export default function Table({ table }) {
  return (
    <div className="flex flex-col gap-6 w-full overflow-auto bg-zinc-800">
      <h2 className="text-white text-5xl text-center mt-32">Tabla {table}</h2>
      <NewModal collection={table} />
      <table className="table-hover table mb-8 px-10">
        <TableHead collection={table} />
        <TableBody collection={table} />
      </table>
    </div>
  );
}
