import React from "react";
import { useProdutos } from "../../../hooks/useProdutos";


const Categoria = ({ alt, src, descricao }) => {

  const { filtrarProduto } = useProdutos();

  return (
    <div className="col-6 col-md-4 col-xxl-2"
      onClick={() => filtrarProduto(descricao)}
    >
      <div className="card rounded-0 border-0">
        <img className="img-fluid" src={src} alt={alt} />
        <div className="card-header bg-black text-bg-dark">
          <p className="text-center card-text">{descricao}</p>
        </div>
      </div>
    </div>
  );
};

export default Categoria;
