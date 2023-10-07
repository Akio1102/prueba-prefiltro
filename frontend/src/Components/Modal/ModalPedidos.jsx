import { useState } from "react";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { postPedidosRequest } from "../../Api/Pedidos.js";
import { getUsuariosRequest } from "../../Api/Usuarios.js";
import { getProductosRequest } from "../../Api/Productos.js";
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

  const { isLoading: loadingUsuarios, data: usuarios } = useQuery({
    queryKey: ["usuarios"],
    queryFn: getUsuariosRequest,
    refetchOnWindowFocus: false,
  });

  const { isLoading: loadingProductos, data: productos } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductosRequest,
    refetchOnWindowFocus: false,
  });

  const addPedidoMutation = useMutation(postPedidosRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries("pedidos");
      setFormValues((prevValues) => ({
        ...prevValues,
        usuario: "",
        productos: [],
        total: 0,
        fecha: "",
        estado: "",
      }));
      notify();
    },
    onError: (error) => {
      console.error("Error al agregar pedido:", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    addPedidoMutation.mutate(formValues);
    const modalCheckbox = document.getElementById("modal-1");
    if (modalCheckbox) {
      modalCheckbox.checked = false;
    }
  };

  const handleInputChange = (e) => {
    const { name, value, options } = e.target;
    let newValue = value;

    if (name === "productos") {
      newValue = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
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
                    <option value="">Selecciona un Usuario</option>
                    {loadingUsuarios ? (
                      <option>Cargando...</option>
                    ) : (
                      usuarios.map((usuario) => (
                        <option key={usuario._id} value={usuario._id}>
                          {usuario.nombre}
                        </option>
                      ))
                    )}
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">Productos del Pedido</label>
                  <select
                    className="select max-w-full h-32"
                    name="productos"
                    required
                    multiple
                    value={formValues.productos}
                    onChange={handleInputChange}
                  >
                    {loadingProductos ? (
                      <option>Cargando...</option>
                    ) : (
                      productos.map((producto) => (
                        <option key={producto._id} value={producto._id}>
                          {producto.nombre}
                        </option>
                      ))
                    )}
                  </select>
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
                    placeholder="Escriba la Fecha del Pedido"
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
                  <select
                    className="select max-w-full"
                    name="estado"
                    required
                    value={formValues.estado}
                    onChange={handleInputChange}
                  >
                    <option value="">Seleecione el Estado del Pedido</option>
                    <option value="Entregado">Entregado</option>
                    <option value="Pendiente">Pendiente</option>
                  </select>
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
