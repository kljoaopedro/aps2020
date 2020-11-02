function buildInitialStates() {
    return {
        home: '',
    }
}

export default (states = buildInitialStates(), actions) => {
    switch (actions.type) {
        default:
            return states;
    }
}