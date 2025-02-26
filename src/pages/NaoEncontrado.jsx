import { Link } from "react-router-dom";
import BarraNavegacao from "@/components/BarraNavegacao";
import { useProdutos } from "../hooks/useProdutos";

const NaoEncontrado = () => {

  const { resetarProdutos } = useProdutos();

  return (
    <>
      <BarraNavegacao />
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
          <h1 class="display-1 fw-bold">Desculpe</h1>
          <p class="fs-3">Produto não encontrado</p>
          <p class="lead">
            Infelizmente! não foi possivel encontrar esse produto.
          </p>
          <Link to={`/`} class="btn btn-primary">
            Ir para Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NaoEncontrado;
