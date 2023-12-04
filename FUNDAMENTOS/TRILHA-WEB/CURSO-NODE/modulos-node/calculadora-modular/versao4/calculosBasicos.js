
const info = 'Sou o módulo calculoBasico'

function soma(a, b) {
    return a + b
}

function  sub(a, b) {
    return a - b
}

// Recebendo o valor da constante 'info' na chave 'texto'
module.exports = {
    texto: info,
    soma,
    sub
}
