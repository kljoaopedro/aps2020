import {SET_HOME_VALUES} from "./home.constants";

function buildInitialStates() {
    return {
        homeLoading: false,
        produtos: [],
        categorias: [],
        carrinho: [],
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

export default (states = buildInitialStates(), actions) => {
    switch (actions.type) {
        case SET_HOME_VALUES:
            return setHomeValuesHandler(states, actions);
        default:
            return states;
    }
}