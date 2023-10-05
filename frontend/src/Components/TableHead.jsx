export default function TableHead({ collection }) {
  const collectionContent = {
    Categorias: (
      <thead>
        <tr className="text-white">
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Acciones</th>
        </tr>
      </thead>
    ),
    Comentarios: (
      <thead>
        <tr className="text-white">
          <th>ID</th>
          <th>Usuario</th>
          <th>Producto</th>
          <th>Texto</th>
          <th>Calificacion</th>
          <th>Acciones</th>
        </tr>
      </thead>
    ),
    Pedidos: (
      <thead>
        <tr className="text-white">
          <th>ID</th>
          <th>Usuario</th>
          <th>Productos</th>
          <th>Total</th>
          <th>Fecha</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
    ),
    Productos: (
      <thead>
        <tr className="text-white">
          <th>ID</th>
          <th>Nombre</th>
          <th>Categoria</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Acciones</th>
        </tr>
      </thead>
    ),
    Usuarios: (
      <thead>
        <tr className="text-white">
          <th>ID</th>
          <th>Nombre</th>
          <th>Password</th>
          <th>Rol</th>
          <th>Telefono</th>
          <th>Direccion</th>
          <th>Fecha Registro</th>
          <th>Acciones</th>
        </tr>
      </thead>
    ),
  };

  const content = collectionContent[collection];

  return content;
}
