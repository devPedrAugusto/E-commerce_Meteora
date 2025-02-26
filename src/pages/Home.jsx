import React from "react";

import BarraNavegacao from "@/components/BarraNavegacao";
import Carrossel from "@/components/Carrossel";
import Rodape from "@/components/Rodape";
import Produtos from "@/components/Produtos";
import CarrinhoSuspenso from "@/components/CarrinhoSuspenso";
import Categorias from "@/components/Categorias";
import Facilidades from "@/components/Facilidades";

const Home = () => {
  return (
    <>
      <BarraNavegacao />
      <CarrinhoSuspenso />
      <main>
        <Carrossel />
        <Categorias />
        <Produtos />
        <Facilidades />
      </main>
      <Rodape />
    </>
  );
};

export default Home;
