//! DECLARANDO AS FUNÇÕES E VARIÁVEIS
//! Através do EXPORTS

// Exporta a variável 'texto' que recebe a 'string'
exports.texto = 'Sou o Módulo Cálculo 3'

// Exporta a função 'soma'
exports.soma = function(a, b) {
    return a + b
}

// Exporta a função 'sub'
exports.sub = function (a, b) {
    return a - b
}

// Exporta os Objetos 'objeto' e 'filiacao'
exports.objeto = {
    nome: 'Marcos',
    idade: 45,
    cor: 'pardo',
    filiacao: {
        pai: 'Flávio',
        mae: 'Edith'
    }
}
// // Exportando somente o nome das funções e variáveis
// module.exports = {
//     texto, soma, sub
// }
