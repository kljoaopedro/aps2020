import React from "react";
import useStyles from './carrinho.styles';
import clsx from "clsx";
import {useSelector} from "react-redux";

function Carrinho({open, loading, onMouseLeave}) {

    const styles = useStyles();

    const carrinho = useSelector(states => states.homeStore.carrinho);

    const carrinhoStyle = clsx({
        [styles.div__root__carrinho]: true,
        [styles.div__carrinho__active]: open && !loading,
    });

    const getItemValue = (item) => `${item.quantidade}x ${item.produto.descricao}`;

    function getTotalCarrinho() {
        let totalCarrinho = 0;

        if (carrinho !== undefined) {
            carrinho.forEach(item => {
                totalCarrinho = totalCarrinho + +item.produto.preco * item.quantidade;
            });
        }
        return totalCarrinho;
    }

    return (
        <>
            {carrinho !== undefined ?
                (
                    <div className={carrinhoStyle} onMouseLeave={onMouseLeave}>
                        {carrinho.map(item => (
                            <>
                                <span className={styles.span__item}>{getItemValue(item)}</span>
                                <br/>
                            </>
                        ))}
                        <div className={styles.div__totalCarrinho}>
                            Total: {getTotalCarrinho()}
                        </div>
                    </div>
                ) : null}
        </>
    )
}

export default Carrinho;