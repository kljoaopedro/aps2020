import {
    API_DELETE_ITEM_CARRINHO,
    API_GET_ALL_CATEGORIAS,
    API_GET_ALL_PRODUTOS,
    API_GET_ITENS_CARRINHO,
    API_GET_PEDIDOS,
    API_GET_PRODUTO_BY_CATEGORIA_ID,
    API_POST_ADD_ITEM_CARRINHO,
    API_POST_PEDIDO
} from "./home.constants";
import {call, put} from 'redux-saga/effects';
import {
    addItemCarrinho,
    deleteItemCarrinho,
    getAllCategorias,
    getAllProdutos,
    getCarrinhoByIdCliente,
    getPedidos,
    getProdutoByCategoriaId,
    postCarrinho
} from "../../service/home/home.service";
import {select, takeLatest} from "@redux-saga/core/effects";
import {setHomeValuesAction, setPedidoGeradoAction} from "./home.store";


export const getAllProdutosAction = () => ({
    type: API_GET_ALL_PRODUTOS
});

export const getAllCategoriasAction = () => ({
    type: API_GET_ALL_CATEGORIAS
});

export const getProdutoByCategoriaIdAction = (idCategoria) => ({
    type: API_GET_PRODUTO_BY_CATEGORIA_ID,
    idCategoria,
});

export const addItemCarrinhoAction = (idProduto, quantidade) => ({
    type: API_POST_ADD_ITEM_CARRINHO,
    idProduto,
    quantidade,
});

export const getCarrinhoByClienteIdAction = () => ({
    type: API_GET_ITENS_CARRINHO,
});

export const deleteItemCarrinhoAction = (idCarrinho) => ({
    type: API_DELETE_ITEM_CARRINHO,
    idCarrinho,
});

export const postPedidoAction = () => ({
    type: API_POST_PEDIDO,
});

export const getPedidosAction = () => ({
    type: API_GET_PEDIDOS,
});


function* getAllProdutosHandler() {
    yield put(setHomeValuesAction('homeLoading', true));
    try {
        const {data} = yield call(getAllProdutos);
        yield put(setHomeValuesAction('produtos', data));
    } catch (exception) {
        //Nenhum tratamento definido...
    } finally {
        yield put(setHomeValuesAction('homeLoading', false));
    }
}

function* getAllCategoriasHandler() {
    yield put(setHomeValuesAction('homeLoading', true));
    try {
        const {data} = yield call(getAllCategorias);
        yield put(setHomeValuesAction('categorias', data));
    } catch (exception) {
        //Nenhum tratamento definido...
    } finally {
        yield put(setHomeValuesAction('homeLoading', false));
    }
}

function* getProdutoByCategoriaIdHandler(actions) {
    yield put(setHomeValuesAction('homeLoading', true));
    try {
        const {idCategoria} = actions;
        const {data} = yield call(getProdutoByCategoriaId, idCategoria);
        yield put(setHomeValuesAction('produtos', data));
    } catch (exception) {
        //Nenhum tratamento definido...
    } finally {
        yield put(setHomeValuesAction('homeLoading', false));
    }
}

function buildCarrinhoPayload(idProduto, quantidade, idCliente) {
    return {
        idCliente,
        idProduto,
        quantidade,
    }
}

function* addItemCarrinhoHandler(actions) {
    yield put(setHomeValuesAction('homeLoading', true));
    try {
        const idCliente = yield select(states => states.authStore.clienteLogado.idCliente);
        const {idProduto, quantidade} = actions;

        const carrinhoPayload = yield buildCarrinhoPayload(idProduto, quantidade, idCliente);
        yield call(addItemCarrinho, carrinhoPayload);
    } catch (exception) {
        //Nenhum tratamento definido...
    } finally {
        yield put(setHomeValuesAction('homeLoading', false));
    }
}

function* getAndSetItensCarrinho(idCliente) {
    try {
        const {data} = yield call(getCarrinhoByIdCliente, idCliente);
        yield put(setHomeValuesAction('carrinho', data));
    } catch (exception) {
        // Nenhum tratamento definido
    }
}

function* getItensCarrinhoHandler() {
    yield put(setHomeValuesAction('homeLoading', true));
    try {
        const idCliente = yield select(states => states.authStore.clienteLogado.idCliente);
        yield getAndSetItensCarrinho(idCliente);
    } catch (exception) {
        //Nenhum tratamento definido...
    } finally {
        yield put(setHomeValuesAction('homeLoading', false));
    }
}

function* deleteItemCarrinhoHandler(actions) {
    yield put(setHomeValuesAction('homeLoading', true));
    try {
        const {idCarrinho} = actions;
        const idCliente = yield select(states => states.authStore.clienteLogado.idCliente);

        yield call(deleteItemCarrinho, idCliente, idCarrinho);
        yield getAndSetItensCarrinho(idCliente);
    } catch (exception) {
        //Nenhum tratamento definido...
    } finally {
        yield put(setHomeValuesAction('homeLoading', false));
    }
}

function* postPedidoHandler() {
    yield put(setHomeValuesAction('homeLoading', true));
    try {
        const idCliente = yield select(states => states.authStore.clienteLogado.idCliente);
        const {data} = yield call(postCarrinho, idCliente);

        yield put(setPedidoGeradoAction(data.idPedido, data.valorTotal));
        yield put(setHomeValuesAction('openGerarPedidoDialog', false));
        yield put(setHomeValuesAction('openAvisoPedidoDialog', true));
    } catch (exception) {
        //Nenhum tratamento definido...
    } finally {
        yield put(setHomeValuesAction('homeLoading', false));
    }
}

function* getPedidosHandler() {
    yield put(setHomeValuesAction('homeLoading', true));
    try {
        const idCliente = yield select(states => states.authStore.clienteLogado.idCliente);
        const {data} = yield call(getPedidos, idCliente);

        yield put(setHomeValuesAction('pedidoJaRealizado', data));
        yield put(setHomeValuesAction('openListarPedidoDialog', true));
    } catch (exception) {
        //Nenhum tratamento definido...
    } finally {
        yield put(setHomeValuesAction('homeLoading', false));
    }
}

export default function* watchHome() {
    yield takeLatest(API_GET_ALL_PRODUTOS, getAllProdutosHandler);
    yield takeLatest(API_GET_ALL_CATEGORIAS, getAllCategoriasHandler);
    yield takeLatest(API_GET_PRODUTO_BY_CATEGORIA_ID, getProdutoByCategoriaIdHandler);
    yield takeLatest(API_POST_ADD_ITEM_CARRINHO, addItemCarrinhoHandler);
    yield takeLatest(API_GET_ITENS_CARRINHO, getItensCarrinhoHandler);
    yield takeLatest(API_DELETE_ITEM_CARRINHO, deleteItemCarrinhoHandler);
    yield takeLatest(API_POST_PEDIDO, postPedidoHandler);
    yield takeLatest(API_GET_PEDIDOS, getPedidosHandler);
};