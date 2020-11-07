import {formatMoney} from "../../utils";

export function getTotalCarrinho(carrinhos) {
    let totalCarrinho = 0;

    if (carrinhos !== undefined) {
        carrinhos.forEach(item => {
            totalCarrinho = totalCarrinho + +item.produto.preco * item.quantidade;
        });
    }
    return formatMoney(totalCarrinho);
}

export const getItemValue = (item) => `${item.quantidade}x ${item.produto.descricao}`;