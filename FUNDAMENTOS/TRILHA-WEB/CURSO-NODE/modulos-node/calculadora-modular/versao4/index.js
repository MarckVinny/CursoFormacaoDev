
const { soma, sub, texto } = require('./calculosBasicos')
const complementares = require('./calculosComplementares')
const {pot, resto} = complementares
const textoConflitante = complementares.texto
// const textoConflitante = require('./calculosComplementares').texto
const { textoDivisao } = require('./calculosDivisao')

let x, y
x = 20
y = 3

console.log(texto)
console.log(`${x} + ${y} =`, soma(x, y))
console.log(`${x} - ${y} =`, sub(x, y))
console.log();
console.log(textoConflitante)
console.log(`A potência de ${x} elevado a ${y} (${x}^${y}) =`, pot(x, y))
console.log(`O Resto de ${x} / ${y} =`, resto(x, y))
console.log(textoDivisao(x,y))