
import Usuario from "../models/Usuario";

function salvarTOken(token: string) {
    localStorage.setItem('token', token);
}

function obterToken() {
    localStorage.getItem('token');
}

function removerAutenticacao() {
    localStorage.clear()
}

function salvarUsuario(usuario) {
    const usuariojson = JSON.stringify(usuario);
    localStorage.setItem('usuario', usuariojson);
}

function obterUsuario() {
    const userJson = localStorage.getItem('usuario');
    const jsonOut = JSON.parse(userJson);
    return new Usuario(jsonOut)

}

export { salvarTOken, 
    obterToken, 
    removerAutenticacao,
    salvarUsuario,
    obterUsuario
 };