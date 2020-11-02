import React, {useCallback} from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './home.styles'
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router";
import Icon from "@material-ui/core/Icon";


function Home() {
    const styles = useStyles();
    const dispatch = useDispatch();
    const clienteLogado = useSelector(states => states.authStore.clienteLogado);

    const onClickMenuOpHandler = useCallback(() => {

    }, []);


    return (
        <>
            <div className={styles.div__header}>
                <div className={styles.div__menuOp}>
                    <ul>
                        <li onClick={onClickMenuOpHandler}>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                        <li>Item 5</li>
                        <li>Item 6.</li>
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
            <div>

            </div>
        </>
    )
}

export default withRouter(Home);