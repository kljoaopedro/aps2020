import React, {useCallback, useState} from 'react';

import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Accordion, AccordionDetails, AccordionSummary} from './pedidoAcordion.makeStyles';
import useStyles from './pedidoAcordion.styles';
import {getItemValue} from "../../Carrinho/carrinhoUtils";
import {formatMoney} from "../../../utils";


export default function PedidoAcordiun({panelId, pedido}) {
    const styles = useStyles();
    const [expanded, setExpanded] = useState(false);

    const onChangeHandler = useCallback((event, newExpanded) => {
        setExpanded(newExpanded);
    }, [setExpanded]);

    return (
        <div className={styles.div__root}>
            <Accordion square expanded={expanded} onChange={onChangeHandler}>
                <AccordionSummary id={panelId}>
                    <Typography className={styles.typography}
                                component="p">{`Pedido número #${pedido.idPedido}`}</Typography>
                    <div>
                        <ExpandMoreIcon/>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {pedido.itensPedido.map(itenPedido => (
                            <ul>
                                <li>
                                    <strong>{`${getItemValue(itenPedido)} ${formatMoney(itenPedido.produto.preco)} cada.`}</strong>
                                </li>
                            </ul>
                    ))}
                    <Typography component="p" className={styles.acordionText}>
                        <strong>Valor total: {formatMoney(pedido.valorTotal)}</strong>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
