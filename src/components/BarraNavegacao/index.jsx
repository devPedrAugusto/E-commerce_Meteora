import Menu from "./Menu";
import Logo from "./Logo";
import BotaoTogglerMenu from "./BotaoTogglerMenu";
import BotaoCarrinho from "./BotaoCarrinho";
import { useCarrinho } from "../../hooks/useCarrinho";
import PesquisaProduto from "./PesquisaProduto";
import { useLocation } from "react-router-dom";

const BarraNavegacao = () => {
  const location = useLocation();
  const { quantidadeTotal } = useCarrinho();

  const ehAPaginaCarrinho = location.pathname === "/carrinho";

  return (
    <header>
      <nav className="navbar navbar-expand-md bg-black navbar-dark">
        <div className="container-fluid custom-margin">
          <Logo />
          <div className="d-flex flex-row-reverse">
            <BotaoTogglerMenu />
            <BotaoCarrinho
              className={`d-md-none ${ehAPaginaCarrinho && "d-none"}`}
              quantidadeProdutos={quantidadeTotal}
            />
          </div>
          <div className="collapse navbar-collapse" id="conteudoBarraNavegacao">
            <Menu />
            <PesquisaProduto />
            <BotaoCarrinho
              className={`d-none d-md-block ${ehAPaginaCarrinho && "d-md-none"}`}
              quantidadeProdutos={quantidadeTotal}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default BarraNavegacao;
