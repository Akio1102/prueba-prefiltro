import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { postUsuariosRequest } from "../../Api/Usuarios.js";
import { toast } from "react-toastify";

export default function ModalUsuarios() {
  const queryClient = useQueryClient();
  const [formValues, setFormValues] = useState({
    nombre: "",
    email: "",
    password: "",
    rol: "",
    telefono: "",
    direccion: "",
  });

  const notify = () => {
    toast.success("Usuario Agregado Exitosamente", {
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

  const addUsuarioMutation = useMutation(
    (newUsuario) => postUsuariosRequest(newUsuario),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("usuarios");
        setFormValues({
          nombre: "",
          email: "",
          password: "",
          rol: "",
          telefono: "",
          direccion: "",
        });
        notify();
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const fechaActual = new Date();
    const updatedFormValues = {
      ...formValues,
      fechaRegistro: fechaActual,
    };
    console.log(updatedFormValues);
    addUsuarioMutation.mutate(updatedFormValues);
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
          Agregar un Usuario
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
                Agrega un nuevo Usuario
              </h2>
            </div>

            <section>
              <form className="form-group" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label className="form-label" htmlFor="nombre">
                    Nombre Usuario
                  </label>
                  <input
                    id="nombre"
                    placeholder="Escriba el Nombre del Usuario"
                    type="text"
                    className="input max-w-full"
                    required
                    name="nombre"
                    value={formValues.nombre}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="email">
                    Email Usuario
                  </label>
                  <input
                    id="email"
                    placeholder="Escriba el Email del Usuario"
                    type="email"
                    className="input max-w-full"
                    required
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="email">
                    Pasword Usuario
                  </label>
                  <input
                    id="password"
                    placeholder="Escriba el password del Usuario"
                    type="password"
                    className="input max-w-full"
                    required
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="rol">
                    Rol del Usuario
                  </label>
                  <select
                    id="rol"
                    className="select max-w-full"
                    required
                    name="rol"
                    value={formValues.rol}
                    onChange={handleInputChange}
                  >
                    <option>Selecciona un Rol</option>
                    <option value="Jefe">Jefe</option>
                    <option value="Trabajador">Trabajador</option>
                    <option value="Cliente">Cliente</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="telefono">
                    Telefono del Usuario
                  </label>
                  <input
                    id="telefono"
                    placeholder="Escriba el Telefono del Usuario"
                    type="text"
                    className="input max-w-full"
                    required
                    name="telefono"
                    value={formValues.telefono}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="direccion">
                    Dirección del Usuario
                  </label>
                  <input
                    id="direccion"
                    placeholder="Escriba el Dirección del Usuario"
                    type="text"
                    className="input max-w-full"
                    required
                    name="direccion"
                    value={formValues.direccion}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-field pt-5">
                  <div className="form-control justify-between">
                    <button type="submit" className="btn btn-primary w-full">
                      Registrar Usuario
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
