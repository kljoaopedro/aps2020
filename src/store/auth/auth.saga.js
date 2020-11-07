import {API_AUTH_LOGAR} from "./auth.constants";
import {call, put} from 'redux-saga/effects';
import {setAuthValuesAction, setDadosClienteLogadoAction} from "./auth.store";
import {logarCliente} from "../../service/auth/auth.service";
import {takeLatest} from "@redux-saga/core/effects";
import {getErrorMessage, replaceTo} from "../../utils";

export const logarAction = (data, history) => ({
    type: API_AUTH_LOGAR,
    data,
    history,
});

function* logarHandler(actions) {
    yield put(setAuthValuesAction('authLoading', true));
    try {
        const {username, senha} = actions.data;

        const {data} = yield call(logarCliente, username, senha);
        yield put(setDadosClienteLogadoAction(data));
        yield replaceTo(actions.history, '/home');
    } catch (exception) {
        yield put(setAuthValuesAction('errorMessage', getErrorMessage(exception)));
    } finally {
        yield put(setAuthValuesAction('authLoading', false));
    }
}

export default function* watchAuth() {
    yield takeLatest(API_AUTH_LOGAR, logarHandler);
}