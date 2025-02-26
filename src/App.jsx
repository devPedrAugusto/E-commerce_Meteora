import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import PaginaErro from "./pages/PaginaErro";

import "./App.css";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import NaoEncontrado from "./pages/NaoEncontrado";
import { ListaProdutosProvider } from "./context/ListaProdutosContext"; // ✅ Correção aqui

function App() {
  return (
    <BrowserRouter>
      <CarrinhoProvider>
        <ListaProdutosProvider>  {/* ✅ Correção aqui */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/nao_encontrado" element={<NaoEncontrado />} />
            <Route path="*" element={<PaginaErro />} />
          </Routes>
        </ListaProdutosProvider>
      </CarrinhoProvider>
    </BrowserRouter>
  );
}

export default App;
