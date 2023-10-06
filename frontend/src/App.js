import { BrowserRouter, Routes, Route } from "react-router-dom";

import { QueryClientProvider, QueryClient } from "react-query";
import Navbar from "./Components/Navbar.jsx";
import ProductosPage from "./Pages/ProductosPage.jsx";
import CategoriasPage from "./Pages/CategoriasPage.jsx";
import ComentariosPage from "./Pages/ComentariosPage.jsx";
import PedidosPage from "./Pages/PedidosPage.jsx";
import UsuariosPage from "./Pages/UsuariosPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
