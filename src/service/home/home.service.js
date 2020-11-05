import {awms} from '../api.service';

export function getAllProdutos() {
    return awms.get('/api/produtosComImg');
}

export function getAllCategorias() {
    return awms.get('/api/categorias');
}

export function getProdutoByCategoriaId(idCategoria) {
    return awms.get(`/api/produtosComImg/categoria/${idCategoria}`);
}

export function addItemCarrinho(carrinhoPayload) {
    return awms.post(`/api/carrinho`, carrinhoPayload);
}

export function getCarrinhoByIdCliente(idCliente) {
    return awms.get(`/api/carrinho/${idCliente}`);
}