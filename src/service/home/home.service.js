import { awms } from '../api.service';

export function getAllProdutos() {
    return awms.get('/api/produtosComImg');
}

export function getAllCategorias() {
    return awms.get('/api/categorias');
}

export function getProdutoByCategoriaId(idCategoria) {
    return awms.get(`/api/produtosComImg/categoria/${idCategoria}`);
}