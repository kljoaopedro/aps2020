import {SET_AUTH_VALUES, SET_DADOS_CLIENTE_LOGADO, SET_LOGAR} from "./auth.constants";

function buildClienteLogado() {
    return {
        idCliente: '',
        nome: '',
        email: '',
        numero: '',
        rua: '',
        telefone: '',
    }
}

function buildCadastrar() {
    return {
        idCliente: '',
        nome: '',
        email: '',
        numero: '',
        rua: '',
        telefone: '',
    }
}

function buildLogar() {
    return {
        username: '',
        senha: '',
    }
}

function buildInitialStates() {
    return {
        errorMessage: '',
        authLoading: false,
        logar: buildLogar(),
        cadastrar: buildCadastrar(),
        clienteLogado: buildClienteLogado(),
    }
}

export const setAuthValuesAction = (name, value) => ({
    type: SET_AUTH_VALUES,
    name,
    value,
});

export const setDadosClienteLogadoAction = (data) => ({
    type: SET_DADOS_CLIENTE_LOGADO,
    data,
});

function setLogarHandler(states, actions) {
    const {name, value} = actions;

    return {
        ...states,
        logar: {
            ...states.logar,
            [name]: value,
        },
    };
}

function setAuthValuesHandler(states, actions) {
    const {name, value} = actions;

    return {
        ...states,
        [name]: value,
    };
}

function setDadosClienteLogadoHandler(states, actions) {
    const {
        idCliente,
        nome,
        email,
        numero,
        rua,
        telefone
    } = actions.data;

    return {
        ...states,
        clienteLogado: {
            ...states.clienteLogado,
            idCliente,
            nome,
            email,
            numero,
            rua,
            telefone
        }
    };
}

export default (states = buildInitialStates(), actions) => {
    switch (actions.type) {
        case SET_AUTH_VALUES:
            return setAuthValuesHandler(states, actions);
        case SET_DADOS_CLIENTE_LOGADO:
            return setDadosClienteLogadoHandler(states, actions);
        default:
            return states;
    }
}