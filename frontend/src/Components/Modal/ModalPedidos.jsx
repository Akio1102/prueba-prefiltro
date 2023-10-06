import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { postPedidosRequest } from "../../Api/Pedidos.js";
import { toast } from "react-toastify";

export default function ModalPedidos() {
  const queryClient = useQueryClient();
  const [formValues, setFormValues] = useState({
    usuario: "",
    productos: [],
    total: 0,
    fecha: "",
    estado: "",
  });

  const notify = () => {
    toast.success("Pedido Agregado Exitosamente", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const addPedidoMutation = useMutation({
    mutationFn: postPedidosRequest,
    onSuccess: () => {
      queryClient.invalidateQueries("pedidos");
      setFormValues({
        usuario: "",
        productos: [],
        total: 0,
        fecha: "",
        estado: "",
      });
      notify();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const newPedido = Object.fromEntries(formdata);
    addPedidoMutation.mutate(newPedido);
    const modalCheckbox = document.getElementById("modal-1");
    if (modalCheckbox) {
      modalCheckbox.checked = false;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center">
      <article>
        <label className="btn btn-outline-primary" htmlFor="modal-1">
          Agregar un Pedido
        </label>

        <input className="modal-state" id="modal-1" type="checkbox" />
        <div className="modal">
          <label className="modal-overlay" htmlFor="modal-1"></label>
          <div className="modal-content flex w-full flex-col gap-5 p-7">
            <label
              htmlFor="modal-1"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="flex flex-col gap-2">
              <h2 className="divider text-center text-2xl font-semibold">
                Agrega un nuevo Pedido
              </h2>
            </div>

            <section>
              <form className="form-group" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label className="form-label">Nombre del Usuario</label>
                  <select
                    className="select max-w-full"
                    name="usuario"
                    required
                    value={formValues.usuario}
                    onChange={handleInputChange}
                  >
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">Producto del Pedido</label>
                  <div className="flex flex-wrap gap-2">
                    <label className="flex cursor-pointer gap-2">
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="productos"
                        value={formValues.productos}
                        onChange={handleInputChange}
                      />
                      <span>Maps Productos</span>
                    </label>
                    <label className="flex cursor-pointer gap-2">
                      <input type="checkbox" className="checkbox" />
                      <span>Maps Productos</span>
                    </label>
                    <label className="flex cursor-pointer gap-2">
                      <input type="checkbox" className="checkbox" />
                      <span>Maps Productos</span>
                    </label>
                    <label className="flex cursor-pointer gap-2">
                      <input type="checkbox" className="checkbox" />
                      <span>Maps Productos</span>
                    </label>
                    <label className="flex cursor-pointer gap-2">
                      <input type="checkbox" className="checkbox" />
                      <span>Maps Productos</span>
                    </label>
                    <label className="flex cursor-pointer gap-2">
                      <input type="checkbox" className="checkbox" />
                      <span>Maps Productos</span>
                    </label>
                    <label className="flex cursor-pointer gap-2">
                      <input type="checkbox" className="checkbox" />
                      <span>Maps Productos</span>
                    </label>
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label">Total del Pedido</label>
                  <input
                    placeholder="Escriba el Total del Pedido"
                    type="number"
                    step="any"
                    className="input max-w-full"
                    name="total"
                    required
                    value={formValues.total}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Fecha del Pedido</label>
                  <input
                    placeholder="Escriba el Total del Pedido"
                    type="date"
                    className="input max-w-full"
                    name="fecha"
                    required
                    value={formValues.fecha}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Estado del Pedido</label>
                  <div className="flex gap-3">
                    <input
                      placeholder="Escriba el Total del Pedido"
                      type="checkbox"
                      className="input max-w-full switch"
                      name="estado"
                      required
                      value={formValues.estado}
                      onChange={handleInputChange}
                    />
                    <span>Entregado</span>
                  </div>
                </div>
                <div className="form-field pt-5">
                  <div className="form-control justify-between">
                    <button type="submit" className="btn btn-primary w-full">
                      Registrar Pedido
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
