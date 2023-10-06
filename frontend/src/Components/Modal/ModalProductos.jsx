export default function ModalProductos() {
  return (
    <div className="flex justify-center">
      <article>
        <label className="btn btn-outline-primary" htmlFor="modal-1">
          Agregar un Producto
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
                Agrega un nuevo Producto
              </h2>
            </div>

            <section>
              <form className="form-group">
                <div className="form-field">
                  <label className="form-label">Nombre del Producto</label>
                  <input
                    placeholder="Escriba el Nombre del Productos"
                    type="text"
                    className="input max-w-full"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Descripción del Producto</label>
                  <textarea
                    placeholder="Ingrese la Descripción del Producto"
                    className="textarea max-w-full h-32"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Categoria del Producto</label>
                  <select className="select max-w-full" required>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">Precio del Producto</label>
                  <input
                    placeholder="Escriba el Precio del Productos"
                    type="text"
                    className="input max-w-full"
                    required
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Stock del Producto</label>
                  <input
                    placeholder="Escriba el Stock del Productos"
                    type="text"
                    className="input max-w-full"
                    required
                  />
                </div>

                <div className="form-field pt-5">
                  <div className="form-control justify-between">
                    <button type="submit" className="btn btn-primary w-full">
                      Registrar Producto
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
