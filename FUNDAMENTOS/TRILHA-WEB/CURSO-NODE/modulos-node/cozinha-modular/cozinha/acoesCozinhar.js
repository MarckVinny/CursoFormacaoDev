
//! MÓDULO AÇÕES COZINHAR

// functions - Ações a serem realizadas 
function cozinhar(alimento){
    return `Cozinhando ${alimento}`
}

function assar(alimento){
    return `Assando ${alimento}`
}

function ferver(alimento){
    return `Fervendo ${alimento}`
}

function cortar(alimento){
    return `Cortando ${alimento}`
}

function servir(alimento){
    return `Servindo ${alimento}`
}

module.exports = {
    cozinhar, assar, ferver, cortar, servir
}

