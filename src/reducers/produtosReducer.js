import produtosMocks from '../mocks/produtos.json'


export const produtosReducer = (state, action) => {
    let filtro;

    const removerPlural = (palavra) => palavra.replace(/s$/, ""); // Remove "s", "es" ou "is" no final.

    const normalizarTexto = (texto) => {
        const textoNormalizado = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        return removerPlural(textoNormalizado)
    };

    switch (action.type) {
        case 'FILTER_PRODUCTS':
            filtro = action.value;

            const filtrarProdutos = (filtro, dispatchLista) => {
                const pesquisaNormalizada = normalizarTexto(filtro);
                const palavrasPesquisa = pesquisaNormalizada.split(" ");

                return produtosMocks.filter((produto) => {
                    const tituloNormalizado = normalizarTexto(produto.titulo);
                    const descricaoNormalizada = normalizarTexto(produto.descricao);

                    return palavrasPesquisa.every(
                        (palavra) => tituloNormalizado.includes(palavra) || descricaoNormalizada.includes(palavra)
                    );
                });
            };

            const produtosFiltrados = filtrarProdutos(filtro);

            return produtosFiltrados


        case 'RESET_PRODUCTS':
            return produtosMocks;

        default:
            return state;
    }
};


