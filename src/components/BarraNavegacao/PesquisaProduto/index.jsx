import { useState } from "react";
import CampoTexto from "@/components/CampoTexto";
import { useProdutos } from '../../../hooks/useProdutos'
import Botao from '../../Botao'

const PesquisaProduto = () => {

    const { filtrarProduto, resetarProdutos } = useProdutos()
    const [pesquisa, setPesquisa] = useState('');

    const aoPesquisar = (e) => {

        e.preventDefault();

        if (pesquisa)
            filtrarProduto(pesquisa)
    }

    return (
        <form className="d-flex" role="search" onSubmit={aoPesquisar}>
            <CampoTexto
                className="me-2"
                type="search"
                placeholder="Digite o nome do produto"
                aria-label="Pesquisar"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                onInput={(e) => e.target.value === "" && resetarProdutos()}
            />
            <Botao type="submit">Pesquisar</Botao>
        </form>
    )
}

export default PesquisaProduto
