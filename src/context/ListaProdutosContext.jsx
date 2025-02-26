import React, { createContext, useReducer } from 'react'
import { produtosReducer } from '../reducers/produtosReducer'
import produtos from '../mocks/produtos.json'


export const ContextLista = createContext();
ContextLista.displayName = 'ListaProdutos'

export const ListaProdutosProvider = ({ children }) => {
    const [listaProdutos, dispatchLista] = useReducer(produtosReducer, produtos)

    return (
        <ContextLista.Provider
            value={{ listaProdutos, dispatchLista, produtos }}
        >
            {children}
        </ContextLista.Provider >
    )
}

