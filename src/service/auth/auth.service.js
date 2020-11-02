import { awms } from '../api.service';

export function logarCliente(username, senha) {
    return awms.post('api/logarCliente', {
        username,
        senha,
    });
}