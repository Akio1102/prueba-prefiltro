import { createContext, useState } from "react";
import * as APICATEGORIAS from "../Api/Categorias.js";
import * as APICOMENTARIOS from "../Api/Comentarios.js";
import * as APIPEDIDOS from "../Api/Pedidos.js";
import * as APIPRODUCTOS from "../Api/Productos.js";
import * as APIUSUARIOS from "../Api/Usuarios.js";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [Categorias, setCategorias] = useState([]);
  const [Comentarios, setComentarios] = useState([]);
  const [Pedidos, setPedidos] = useState([]);
  const [Productos, setProductos] = useState([]);
  const [Usuarios, setUsuarios] = useState([]);

  const getCategorias = async () => {
    try {
      const res = await APICATEGORIAS.getCategoriasRequest();
      setCategorias(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const createCategoria = async (categoria) => {
    try {
      const res = await APICATEGORIAS.postCategoriasRequest(categoria);
      setCategorias(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const updateCategoria = async (id, categoria) => {
    try {
      await APICATEGORIAS.patchCategoriasRequest(id, categoria);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteCategoria = async (id) => {
    try {
      const res = await APICATEGORIAS.deleteCategoriasRequest(id);
      if (res.status === 200) {
        setCategorias(Categorias.filter((categoria) => categoria._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getComentarios = async () => {
    try {
      const res = await APICOMENTARIOS.getComentariosRequest();
      setComentarios(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const createComentario = async (comentario) => {
    try {
      const res = await APICOMENTARIOS.postComentariosRequest(comentario);
      setComentarios(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const updateComentario = async (id, comentario) => {
    try {
      await APICOMENTARIOS.patchComentariosRequest(id, comentario);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteComentario = async (id) => {
    try {
      const res = await APICOMENTARIOS.deleteComentariosRequest(id);
      if (res.status === 200) {
        setComentarios(
          Comentarios.filter((comentario) => comentario._id !== id)
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getPedidos = async () => {
    try {
      const res = await APIPEDIDOS.getPedidosRequest();
      setPedidos(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const createPedido = async (pedidos) => {
    try {
      const res = await APIPEDIDOS.postPedidosRequest(pedidos);
      setPedidos(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const updatePedido = async (id, pedidos) => {
    try {
      await APIPEDIDOS.patchPedidosRequest(id, pedidos);
    } catch (error) {
      console.error(error);
    }
  };
  const deletePedido = async (id) => {
    try {
      const res = await APIPEDIDOS.deletePedidosRequest(id);
      if (res.status === 200) {
        setPedidos(Pedidos.filter((pedido) => pedido._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getProductos = async () => {
    try {
      const res = await APIPRODUCTOS.getProductosRequest();
      setProductos(res.data.data);
      return res.data.data;
    } catch (error) {
      console.error(error);
    }
  };
  const createProducto = async (producto) => {
    try {
      const res = await APIPRODUCTOS.postProductosRequest(producto);
      setProductos(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const updateProducto = async (id, producto) => {
    try {
      await APIPRODUCTOS.patchProductosRequest(id, producto);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteProducto = async (id) => {
    try {
      const res = await APIPRODUCTOS.deleteProductosRequest(id);
      if (res.status === 200) {
        setProductos(Productos.filter((producto) => producto._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUsuarios = async () => {
    try {
      const res = await APIUSUARIOS.getUsuariosRequest();
      setUsuarios(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const createUsuario = async (usuario) => {
    try {
      const res = await APIUSUARIOS.postUsuariosRequest(usuario);
      setUsuarios(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const updateUsuario = async (id, usuario) => {
    try {
      await APIUSUARIOS.patchUsuariosRequest(id, usuario);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteUsuario = async (id) => {
    try {
      const res = await APIUSUARIOS.deleteUsuariosRequest(id);
      if (res.status === 200) {
        setUsuarios(Usuarios.filter((usuario) => usuario._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const contextValue = {
    Categorias,
    getCategorias,
    createCategoria,
    updateCategoria,
    deleteCategoria,
    Comentarios,
    getComentarios,
    createComentario,
    updateComentario,
    deleteComentario,
    Pedidos,
    getPedidos,
    createPedido,
    updatePedido,
    deletePedido,
    Productos,
    getProductos,
    createProducto,
    updateProducto,
    deleteProducto,
    Usuarios,
    getUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario,
  };

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};
