export default function ModalCategorias() {
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
              <form className="form-group">
                <div className="form-field">
                  <label className="form-label">Nombre de la Categoria</label>
                  <input
                    placeholder="Escriba el Nombre de la Categorias"
                    type="text"
                    className="input max-w-full"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">
                    Descripción de la Categoria
                  </label>
                  <textarea
                    placeholder="Ingrese la Descripción de la Categoria"
                    className="textarea max-w-full h-32"
                    required
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
