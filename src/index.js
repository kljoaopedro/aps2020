import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import homeReducer from './store/home/home.store';
import homeSaga from './store/home/home.saga';
import authReducer from './store/auth/auth.store';
import authSaga from './store/auth/auth.saga';
import createSagaMiddleware from 'redux-saga';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducers = combineReducers({
    homeStore: homeReducer,
    authStore: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(homeSaga);
sagaMiddleware.run(authSaga);

const application = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
serviceWorker.unregister();

