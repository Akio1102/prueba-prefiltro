export default function ModalPedidos() {
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
                  <label className="form-label">Producto del Pedido</label>
                  <div className="flex flex-wrap gap-2">
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
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Fecha del Pedido</label>
                  <input
                    placeholder="Escriba el Total del Pedido"
                    type="date"
                    className="input max-w-full"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Estado del Pedido</label>
                  <div className="flex gap-3">
                    <input
                      placeholder="Escriba el Total del Pedido"
                      type="checkbox"
                      className="input max-w-full switch"
                      required
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
