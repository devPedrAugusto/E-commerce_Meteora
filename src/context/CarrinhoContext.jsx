import { createContext, useEffect, useMemo, useReducer, useState } from 'react'
import { carrinhoReducer } from '../reducers/carrinhoReducer';
export const ContextCarrinho = createContext();
ContextCarrinho.displayName = "Carrinho"

const estadoInicial = [];

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, dispatch] = useReducer(carrinhoReducer, estadoInicial);
    const [valorTotal, setValorTotal] = useState([]);
    const [quantidadeTotal, setQuantidadeTotal] = useState([]);

    const { quantidadeTemp, valorTemp } = useMemo(() =>

        carrinho.reduce((acumulador, item) => {
            
            return{
                quantidadeTemp: acumulador.quantidadeTemp + item.quantidade,
                valorTemp: acumulador.valorTemp + (item.preco * item.quantidade) 
            }
        },
            {
                quantidadeTemp: 0,
                valorTemp: 0,
            }
        ), [carrinho]);

    useEffect(() => {
        setQuantidadeTotal(quantidadeTemp)
        setValorTotal(valorTemp)
    }, [carrinho]);

    return (
        <ContextCarrinho.Provider value={{
            carrinho,
            dispatch,
            valorTotal,
            quantidadeTotal
        }}>
            {children}
        </ContextCarrinho.Provider>
    )
}