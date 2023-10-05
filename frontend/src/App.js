import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductosContextProvider } from "./Context/ProductosContext.jsx";
import Navbar from "./Components/Navbar.jsx";
import ProductosPage from "./Pages/ProductosPage.jsx";
import CategoriasPage from "./Pages/CategoriasPage.jsx";
import ComentariosPage from "./Pages/ComentariosPage.jsx";
import PedidosPage from "./Pages/PedidosPage.jsx";
import UsuariosPage from "./Pages/UsuariosPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";

function App() {
  return (
    <ProductosContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductosPage />} />
          <Route path="/Categorias" element={<CategoriasPage />} />
          <Route path="/Comentarios" element={<ComentariosPage />} />
          <Route path="/Pedidos" element={<PedidosPage />} />
          <Route path="/Usuarios" element={<UsuariosPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ProductosContextProvider>
  );
}

export default App;
