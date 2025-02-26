import React, { useContext } from "react";
import Produto from "./Produto";
import Titulo from "@/components/Titulo";
import { useCarrinho } from "../../hooks/useCarrinho";
import { ContextLista } from "../../context/ListaProdutosContext";

const Produtos = () => {

  const { listaProdutos } = useContext(ContextLista);
  const { adicionarProduto } = useCarrinho();

  return (
    <section role="produtos" aria-label="Produtos que estão bombando!">
      <Titulo>Produtos que estão bombando!</Titulo>
      <div className="container row mx-auto">
        {listaProdutos.map((produto) => (
          <Produto
            key={produto.id}
            {...produto}
            adicionarProduto={adicionarProduto}
          />
        ))}
      </div>
    </section>
  );
};

export default Produtos;