export default function ModalComentarios() {
  return (
    <div className="flex justify-center">
      <article>
        <label className="btn btn-outline-primary" htmlFor="modal-1">
          Agregar un Comentario
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
                Agrega un nuevo Comentario
              </h2>
            </div>

            <section>
              <form className="form-group">
                <div className="form-field">
                  <label className="form-label">Nombre del Usuario</label>
                  <select className="select max-w-full" required>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div className="form-field">
                  <label className="form-label">Nombre del Producto</label>
                  <select className="select max-w-full" required>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div className="form-field">
                  <label className="form-label">Texto del Comentario</label>
                  <textarea
                    placeholder="Ingrese la Descripción de la Comentario"
                    className="textarea max-w-full h-32"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">
                    Calificación del Producto
                  </label>
                  <select className="select max-w-full" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="form-field pt-5">
                  <div className="form-control justify-between">
                    <button type="submit" className="btn btn-primary w-full">
                      Registrar Comentario
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
