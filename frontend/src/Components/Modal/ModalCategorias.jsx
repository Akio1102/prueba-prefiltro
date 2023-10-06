import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { postCategoriasRequest } from "../../Api/Categorias.js";
import { toast } from "react-toastify";

export default function ModalCategorias() {
  const queryClient = useQueryClient();
  const [formValues, setFormValues] = useState({
    nombre: "",
    descripcion: "",
  });

  const notify = () => {
    toast.success("Categoria Agregado Exitosamente", {
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

  const addCategoriaMutation = useMutation({
    mutationFn: postCategoriasRequest,
    onSuccess: () => {
      queryClient.invalidateQueries("categorias");
      setFormValues({
        nombre: "",
        descripcion: "",
      });
      notify();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const newCategoria = Object.fromEntries(formdata);
    addCategoriaMutation.mutate(newCategoria);
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
          Agregar una Categoria
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
                Agrega una nueva Categoria
              </h2>
            </div>

            <section>
              <form className="form-group" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label className="form-label">Nombre de la Categoria</label>
                  <input
                    placeholder="Escriba el Nombre de la Categorias"
                    type="text"
                    className="input max-w-full"
                    name="nombre"
                    required
                    value={formValues.nombre}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">
                    Descripción de la Categoria
                  </label>
                  <textarea
                    placeholder="Ingrese la Descripción de la Categoria"
                    className="textarea max-w-full h-32"
                    name="descripcion"
                    required
                    value={formValues.descripcion}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-field pt-5">
                  <div className="form-control justify-between">
                    <button type="submit" className="btn btn-primary w-full">
                      Registrar Categoria
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
