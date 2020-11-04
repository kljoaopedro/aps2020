export function buildFormData(event) {
    const data = new FormData(event.target);
    let dataObj = {};
    for (let key of data.entries()) {
        dataObj = {
            ...dataObj,
            [key[0]]: key[1]
        }
    }
    return dataObj;
}

export function replaceTo(history, path) {
    history.push(path);
}

export const getErrorMessage = (exception) => {
    if (exception.response) {
        return exception.response.data.message;
    }
    return 'Ocorreu um erro inesperado';
};

export const formatMoney = (value) => {
    if (value || value === 0) {
        return Number(String(value))
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
    }
    return value;
};