import React, {useCallback, useEffect} from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './home.styles'
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router";
import Icon from "@material-ui/core/Icon";
import Produtos from "../Produtos/Produtos";
import {getAllCategoriasAction, getAllProdutosAction, getProdutoByCategoriaIdAction} from "../../store/home/home.saga";
import UILoading from "../UI/Loading/UILoading";


function Home() {
    const styles = useStyles();
    const dispatch = useDispatch();
    const clienteLogado = useSelector(states => states.authStore.clienteLogado);
    const homeLoading = useSelector(states => states.homeStore.homeLoading);
    const categorias = useSelector(states => states.homeStore.categorias);


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
        } else{
            getAllProdutos();
        }

    }, [dispatch, getAllProdutos]);


    return (
        <div className={styles.div__root}>
            <UILoading show={homeLoading}/>
            <div className={styles.div__header}>
                <div className={styles.div__menuOp}>
                    <ul>
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
                        {/*<li onClick={onClickMenuOpHandler}>Item 1</li>*/}
                        {/*<li>Item 2</li>*/}
                        {/*<li>Item 3</li>*/}
                        {/*<li>Item 4</li>*/}
                        {/*<li>Item 5</li>*/}
                        {/*<li>Item 6.</li>*/}
                        <li>
                            <Icon>
                                <ShoppingCartIcon/>
                            </Icon>
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