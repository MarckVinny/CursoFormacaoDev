
// importando o módulo utilizando destructuring
const {texto, soma, sub, objeto,} = require('./calculos')

let x, y
x = 10
y = 5

console.log(soma(x, y))
console.log(sub(x, y))
console.log(texto)
console.log(objeto.filiacao.pai)