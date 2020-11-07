import React, {useCallback, useState} from "react";
import useStyles from './carrinho.styles';
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteItemCarrinhoAction, postPedidoAction} from "../../store/home/home.saga";
import PedidoDialog from "../UI/Dialog/PedidoDialog";
import {getItemValue, getTotalCarrinho} from "./carrinhoUtils";
import {setHomeValuesAction} from "../../store/home/home.store";
import AvisoPedidoDialog from "../UI/Dialog/AvisoPedidoDialog";

function Carrinho({open, loading, onMouseLeave}) {

    const styles = useStyles();
    const dispatch = useDispatch();

    const carrinho = useSelector(states => states.homeStore.carrinho);
    const openGerarPedidoDialog = useSelector(states => states.homeStore.openGerarPedidoDialog);
    const openAvisoPedidoDialog = useSelector(states => states.homeStore.openAvisoPedidoDialog);
    const pedidoGerado = useSelector(states => states.homeStore.pedidoGerado);

    const [carrinhoPedido, setCarrinhoPedido] = useState([]);

    const carrinhoStyle = clsx({
        [styles.div__root__carrinho]: true,
        [styles.div__carrinho__active]: open && !loading,
    });

    const onDeleteItemCarrinho = useCallback((e, idCarrinho) => {
        dispatch(deleteItemCarrinhoAction(idCarrinho));
    }, [dispatch]);

    const onClickGerarPedidoHandler = useCallback(() => {
        dispatch(setHomeValuesAction('openGerarPedidoDialog', true));
        setCarrinhoPedido(carrinho);
    }, [dispatch, setCarrinhoPedido, carrinho]);

    const onClosePedidoHandler = useCallback(() => {
        dispatch(setHomeValuesAction('openGerarPedidoDialog', false));
        setCarrinhoPedido([]);
    }, [dispatch, setCarrinhoPedido]);

    const onGerarPedidoHandler = useCallback(() => {
        dispatch(postPedidoAction());
    }, [dispatch]);

    const onCloseAvisoPedidoHandler = useCallback(() => {
        dispatch(setHomeValuesAction('openAvisoPedidoDialog', false));
    }, [dispatch]);

    return (
        <>
            <PedidoDialog
                open={openGerarPedidoDialog}
                onGerarPedidoHandler={onGerarPedidoHandler}
                onCloseHandler={onClosePedidoHandler}
                carrinho={carrinhoPedido}
            />
            <AvisoPedidoDialog
                idPedido={pedidoGerado.idPedido}
                valorTotal={pedidoGerado.valorTotal}
                open={openAvisoPedidoDialog}
                onCloseHandler={onCloseAvisoPedidoHandler}
            />
            {carrinho !== undefined ?
                (
                    <div className={carrinhoStyle} onMouseLeave={onMouseLeave}>
                        {carrinho.map(item => (
                            <div key={item.idCarrinho} className={styles.div__item__root}>
                                <span className={styles.span__item}>{getItemValue(item)}</span>
                                <div className={styles.div__deleteIcon}>
                                    <DeleteIcon onClick={e => onDeleteItemCarrinho(e, item.idCarrinho)}/>
                                </div>
                                <br/>
                            </div>
                        ))}
                        <div className={styles.div__totalCarrinho}>
                            Total: {getTotalCarrinho(carrinho)}
                        </div>
                        <div className={styles.div__gerarPedidoBtn}>
                            <button type="button" onClick={onClickGerarPedidoHandler}>Gerar Pedido</button>
                        </div>
                    </div>
                ) : null}
        </>
    )
}

export default Carrinho;