import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import useStyles from './dialog.styles';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import {formatMoney} from "../../../utils";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


function AvisoPedidoDialog({
                               open = false,
                               onCloseHandler,
                               idPedido = '',
                               valorTotal = 0,
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
                <DialogTitle style={{textAlign: 'center', color: 'white'}} id="alert-dialog-title">{"Pedido Gerado!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{color: 'white'}}>
                        <div className={styles.dialog__icon}>
                            <CheckCircleIcon/>
                        </div>
                        O seu pedido foi gerado, agradecemos a preferência.
                        <br/>
                        Código do pedido: <strong>{idPedido}</strong>
                        <br/>
                        Valor do pedido: <strong>{formatMoney(valorTotal)}</strong>
                        <br/>
                        Voce pode conferir seus pedidos na aba de Pedidos.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseHandler} style={{color: 'orange'}}>
                        Ok, entendi.
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AvisoPedidoDialog;
