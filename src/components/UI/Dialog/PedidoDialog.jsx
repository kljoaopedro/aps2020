import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import useStyles from './dialog.styles';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import {getItemValue} from "../../Carrinho/carrinhoUtils";


function PedidoDialog({
                      open = false,
                      onCloseHandler,
                      carrinho,
                      onGerarPedidoHandler,
                  }) {
    const styles = useStyles();

    return (
        <div>
            <Dialog
                open={open}
                onClose={onCloseHandler}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className={styles.dialog__root}
            >
                <DialogTitle id="alert-dialog-title">{"Por favor confirme seu pedido"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {carrinho ? carrinho.map(item => (
                            <ul key={item.idCarrinho}>
                                <li>{getItemValue(item)}</li>
                            </ul>
                        )) : (
                            <div>Olá</div>
                        )}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseHandler} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={onGerarPedidoHandler} color="primary" autoFocus>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default PedidoDialog;
