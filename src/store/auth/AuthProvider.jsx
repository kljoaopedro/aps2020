import React, { createContext } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { createDispatchHook, createSelectorHook, Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './auth.store';
import watchAuth from './auth.saga';

export const authContext = createContext();
export const useAuthSelector = createSelectorHook(authContext);
export const useAuthDispatch = createDispatchHook(authContext);

export default function AuthProvider({ children }) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(watchAuth);

    return (
        <Provider context={authContext} store={store}>
            {children}
        </Provider>
    );
}
