import {
    API_GET_ALL_CATEGORIAS,
    API_GET_ALL_PRODUTOS,
    API_GET_ITENS_CARRINHO,
    API_GET_PRODUTO_BY_CATEGORIA_ID,
    API_POST_ADD_ITEM_CARRINHO
} from "./home.constants";
import {call, put} from 'redux-saga/effects';
import {
    addItemCarrinho,
    getAllCategorias,
    getAllProdutos,
    getCarrinhoByIdCliente,
    getProdutoByCategoriaId
} from "../../service/home/home.service";
import {select, takeLatest} from "@redux-saga/core/effects";
import {setHomeValuesAction} from "./home.store";


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
        console.log(idCliente);

        const carrinhoPayload = yield buildCarrinhoPayload(idProduto, quantidade, idCliente);
        yield call(addItemCarrinho, carrinhoPayload);
    } catch (exception) {
        //Nenhum tratamento definido...
    } finally {
        yield put(setHomeValuesAction('homeLoading', false));
    }
}

function* getItensCarrinhoHandler() {
    yield put(setHomeValuesAction('homeLoading', true));
    try {
        const idCliente = yield select(states => states.authStore.clienteLogado.idCliente);

        const {data} = yield call(getCarrinhoByIdCliente, idCliente);
        yield put(setHomeValuesAction('carrinho', data));
        console.log(data);
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
};