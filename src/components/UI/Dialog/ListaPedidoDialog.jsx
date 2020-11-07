import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import useStyles from './dialog.styles';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Pedidos from "../../Pedidos/Pedidos";


function ListaPedidoDialog({
                               open = false,
                               onCloseHandler,
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
                <DialogTitle style={{textAlign: 'center', color: 'white'}}
                             id="alert-dialog-title">{"Seus Pedidos"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{color: 'white'}}>
                        <Pedidos/>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ListaPedidoDialog;
