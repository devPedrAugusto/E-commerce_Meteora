import { useContext,} from 'react'
import { ContextCarrinho} from '../context/CarrinhoContext'
import { ADD_PRODUTO, REMOVE_PRODUTO, UPDATE_QUANTIDADE } from '../reducers/carrinhoReducer';

const addProdutoAction = (novoProduto) =>(
  {
  type: ADD_PRODUTO,
  upload: novoProduto
})

const removeProdutoAction = (produtoRemove) => ({
  type: REMOVE_PRODUTO,
  upload: produtoRemove
})

const updateProdutoAction = (Produto) => ({
  type: UPDATE_QUANTIDADE,
  upload: Produto
})

export const useCarrinho = () => {
  const { carrinho,
    dispatch,
    valorTotal,
    quantidadeTotal,  
  } = useContext(ContextCarrinho);

  function adicionarProduto(novoProduto) {
    dispatch(addProdutoAction(novoProduto))
  }

  function removerProduto(produtoRemovido) {
    
    if(produtoRemovido.quantidade > 1){
      dispatch(updateProdutoAction({
        id: produtoRemovido.id,
        quantidade: produtoRemovido.quantidade--
        }
      ));
    }else
    dispatch(removeProdutoAction(produtoRemovido.id));

  }

  function removerProdutoCarrinho(produtoId) {
    dispatch(removeProdutoAction(produtoId));
  }

  return {
    carrinho,
    valorTotal,
    quantidadeTotal,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho
  }
}

