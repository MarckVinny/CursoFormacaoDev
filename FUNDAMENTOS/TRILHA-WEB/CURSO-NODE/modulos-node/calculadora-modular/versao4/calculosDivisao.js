const { resto } = require("./calculosComplementares")

const div = function (a, b) {
    return a / b
}

exports.textoDivisao = function (a, b) {
    return `A Divisão de ${a} por ${b} é ${div(a, b).toFixed(2)} e o Resto é ${resto(a,b)}`
}