import React, {useCallback, useEffect, useState} from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './home.styles'
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router";
import Icon from "@material-ui/core/Icon";
import Produtos from "../Produtos/Produtos";
import {
    getAllCategoriasAction,
    getAllProdutosAction,
    getCarrinhoByClienteIdAction,
    getPedidosAction,
    getProdutoByCategoriaIdAction
} from "../../store/home/home.saga";
import UILoading from "../UI/Loading/UILoading";
import Carrinho from "../Carrinho/Carrinho";
import PedidoDialog from "../UI/Dialog/PedidoDialog";
import {setHomeValuesAction} from "../../store/home/home.store";
import ListaPedidoDialog from "../UI/Dialog/ListaPedidoDialog";


function Home() {
    const styles = useStyles();
    const dispatch = useDispatch();


    const homeLoading = useSelector(states => states.homeStore.homeLoading);
    const categorias = useSelector(states => states.homeStore.categorias);
    const openListarPedidoDialog = useSelector(states => states.homeStore.openListarPedidoDialog);

    const [carrinhoOpen, setCarrinhoOpen] = useState(false);


    const getAllProdutos = useCallback(() => {
        dispatch(getAllProdutosAction());
    }, [dispatch]);

    // Realiza as requisições inicias.
    useEffect(() => {
        getAllProdutos();
        dispatch(getAllCategoriasAction());
    }, [dispatch, getAllProdutos]);

    const onClickMenuOpHandler = useCallback((event, idCategoria) => {
        if (idCategoria) {
            dispatch(getProdutoByCategoriaIdAction(idCategoria))
        } else {
            getAllProdutos();
        }

    }, [dispatch, getAllProdutos]);

    const onClickPedidosHandler = useCallback(() => {
        dispatch(getPedidosAction());
    }, [dispatch]);

    const onClickCarrinhoHandler = useCallback(() => {
        dispatch(getCarrinhoByClienteIdAction());
        setCarrinhoOpen(true);
    }, [dispatch, setCarrinhoOpen]);

    const onMouseLeaveCarrinhoHandler = useCallback(() => {
        setCarrinhoOpen(false);
    }, [setCarrinhoOpen]);


    return (
        <div className={styles.div__root}>
            <UILoading show={homeLoading}/>
            <ListaPedidoDialog
                open={openListarPedidoDialog}
                onCloseHandler={() => dispatch(setHomeValuesAction('openListarPedidoDialog', false))}/>
            <div className={styles.div__header}>
                <div className={styles.div__menuOp}>
                    <ul>
                        <li
                            onClick={onClickPedidosHandler}
                        >
                            Pedidos
                        </li>
                        <li
                            onClick={e => onClickMenuOpHandler(e, '')}
                        >
                            Todos
                        </li>
                        {categorias && (
                            categorias.map(categoria => (
                                <li
                                    key={categoria.idCategoria}
                                    id={categoria.idCategoria}
                                    onClick={e => onClickMenuOpHandler(e, categoria.idCategoria)}
                                >
                                    {categoria.descr}
                                </li>
                            ))
                        )}
                        <li>
                            <Icon onClick={onClickCarrinhoHandler}>
                                <ShoppingCartIcon/>
                            </Icon>
                            <Carrinho
                                loading={homeLoading}
                                open={carrinhoOpen}
                                onMouseLeave={onMouseLeaveCarrinhoHandler}
                            />
                        </li>
                    </ul>
                    <div>
                    </div>
                </div>
            </div>
            <div className={styles.div__content}>
                <div className={styles.div__produtos}>
                    <Produtos/>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Home);