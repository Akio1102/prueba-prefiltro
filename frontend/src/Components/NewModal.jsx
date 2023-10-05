export default function NewModal({ collection }) {
  const collectionContent = {
    Categorias: (
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
    ),
    Comentarios: (
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
    ),
    Pedidos: (
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
    ),
    Productos: (
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
                    <label className="form-label">
                      Descripción del Producto
                    </label>
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
    ),
    Usuarios: (
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
                <form className="form-group">
                  <div className="form-field">
                    <label className="form-label">Nombre Usuario</label>
                    <input
                      placeholder="Escriba el Nombre del Usuario"
                      type="text"
                      className="input max-w-full"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label">Email Usuario</label>
                    <input
                      placeholder="Escriba el Email del Usuario"
                      type="email"
                      className="input max-w-full"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label">Rol del Usuario</label>
                    <select className="select max-w-full" required>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Telefono del Usuario</label>
                    <input
                      placeholder="Escriba el Telefono del Usuario"
                      type="text"
                      className="input max-w-full"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label">Dirección del Usuario</label>
                    <input
                      placeholder="Escriba el Dirección del Usuario"
                      type="text"
                      className="input max-w-full"
                      required
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
    ),
  };
  const content = collectionContent[collection];

  return content;
}
