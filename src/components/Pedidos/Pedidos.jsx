import React from "react";
import {useSelector} from "react-redux";
import PedidoAcordiun from "./PedidoAcordiun/PedidoAcordiun";

function Pedidos() {

    const pedidoJaRealizado = useSelector(states => states.homeStore.pedidoJaRealizado);
    return (pedidoJaRealizado.map(pedido => (
        <PedidoAcordiun panelId={pedido.idPedido}
                        pedido={pedido}
        />
    )))
}

export default Pedidos;