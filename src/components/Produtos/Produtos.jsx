import React from 'react';

import CardProdutos from "./Card/CardProdutos";
import {useSelector} from "react-redux";


function Produtos() {
    const produtos = useSelector(states => states.homeStore.produtos);
    return (
        <>
            {produtos !== undefined ?
                produtos.map(produto => (
                    <CardProdutos
                        key={produto.idProduto}
                        idProduto={produto.idProduto}
                        descricao={produto.descricao}
                        img={produto.img}
                        descricaoHover={produto.descricao}
                        preco={produto.preco}
                    />
                    )) : null}
        </>
    );
}

export default Produtos;