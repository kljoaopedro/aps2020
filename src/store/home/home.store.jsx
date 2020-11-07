import {SET_HOME_VALUES, SET_PEDIDO_GERADO} from "./home.constants";

function buildPedidoGerado() {
    return {
        idPedido: '',
        valorTotal: 0,
    }
}

function buildInitialStates() {
    return {
        homeLoading: false,
        openGerarPedidoDialog: false,
        openAvisoPedidoDialog: false,
        openListarPedidoDialog: false,
        produtos: [],
        categorias: [],
        carrinho: [],
        pedidoGerado: buildPedidoGerado(),
        pedidoJaRealizado: [],
    }
}

export const setHomeValuesAction = (name, value) => ({
    type: SET_HOME_VALUES,
    name,
    value,
});

function setHomeValuesHandler(states, actions) {
    const {name, value} = actions;
    return {
        ...states,
        [name]: value,
    }
}

export const setPedidoGeradoAction = (idPedido, valorTotal) => ({
    type: SET_PEDIDO_GERADO,
    idPedido,
    valorTotal
});

function setPedidoGeradoHandler(states, actions) {
    const {idPedido, valorTotal} = actions;
    return {
        ...states,
        pedidoGerado: {
            ...states.pedidoGerado,
            idPedido,
            valorTotal,
        },
    };
}

export default (states = buildInitialStates(), actions) => {
    switch (actions.type) {
        case SET_HOME_VALUES:
            return setHomeValuesHandler(states, actions);
        case SET_PEDIDO_GERADO:
            return setPedidoGeradoHandler(states, actions);
        default:
            return states;
    }
}