import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CategoriasContextProvider } from "./Context/CategoriasContext.jsx";
import { ComentariosContextProvider } from "./Context/ComentariosContext.jsx";
import { PedidosContextProvider } from "./Context/PedidosContext.jsx";
import { ProductosContextProvider } from "./Context/ProductosContext.jsx";
import { UsuariosContextProvider } from "./Context/UsuariosContext.jsx";
import Navbar from "./Components/Navbar.jsx";
import ProductosPage from "./Pages/ProductosPage.jsx";
import CategoriasPage from "./Pages/CategoriasPage.jsx";
import ComentariosPage from "./Pages/ComentariosPage.jsx";
import PedidosPage from "./Pages/PedidosPage.jsx";
import UsuariosPage from "./Pages/UsuariosPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";

function App() {
  return (
    <UsuariosContextProvider>
      <CategoriasContextProvider>
        <ProductosContextProvider>
          <ComentariosContextProvider>
            <PedidosContextProvider>
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
            </PedidosContextProvider>
          </ComentariosContextProvider>
        </ProductosContextProvider>
      </CategoriasContextProvider>
    </UsuariosContextProvider>
  );
}

export default App;
