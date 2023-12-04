//! DECLARANDO AS FUNÇÕES E VARIÁVEIS FORA DO MÓDULO

const texto = 'Sou o Módulo Cálculo 2'

function soma(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

// Exportando somente o nome das funções e variáveis
module.exports = {
    texto, soma, sub
}
