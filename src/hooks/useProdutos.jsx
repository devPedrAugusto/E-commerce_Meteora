import { useContext, useEffect } from "react"
import { ContextLista } from "../context/ListaProdutosContext"
import { useNavigate } from "react-router-dom"

const addFilterAction = (filtro) => {
    return {
        type: 'FILTER_PRODUCTS',
        value: filtro,
    }
}

const resetProductsAction = () => {
    return {
        type: 'RESET_PRODUCTS'
    }
}

export const useProdutos = () => {
    const navigate = useNavigate();
    const { listaProdutos, dispatchLista } = useContext(ContextLista);

    function filtrarProduto(filtro) {
        dispatchLista(addFilterAction(filtro))
    }

    useEffect(() => {
        if (listaProdutos.length === 0) {
            navigate('/nao_encontrado');
            resetarProdutos();
        }
    }, [listaProdutos, navigate]);

    function resetarProdutos() {
        dispatchLista(resetProductsAction())
    }

    return {
        filtrarProduto,
        resetarProdutos
    }
}



