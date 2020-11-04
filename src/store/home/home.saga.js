import {API_GET_ALL_CATEGORIAS, API_GET_ALL_PRODUTOS, API_GET_PRODUTO_BY_CATEGORIA_ID} from "./home.constants";
import {call, put} from 'redux-saga/effects';
import {getAllCategorias, getAllProdutos, getProdutoByCategoriaId} from "../../service/home/home.service";
import {takeLatest} from "@redux-saga/core/effects";
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
        console.log(data);
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
        const {data} = yield call(getProdutoByCategoriaId,idCategoria);
        yield put(setHomeValuesAction('produtos', data));
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
};