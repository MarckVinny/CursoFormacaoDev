import { resto } from './calculosComplementares.js'

function div(a, b) {
    return a / b
}

export default function textoDivisao(a, b) {
    return `A Divisão de ${a} por ${b} é ${div(a, b).toFixed(2)} e o Resto é ${resto(a, b)}`
}
