
import { soma, sub, texto } from './calculosBasicos.js'
import {texto as texto2, pot, resto} from './calculosComplementares.js'   // Utilizando o comando "as" dá um apelido para a variável
import textoDivisao  from './calculosDivisao.js'

let x, y
x = 20
y = 3

console.log(texto)
console.log(`${x} + ${y} =`, soma(x, y))
console.log(`${x} - ${y} =`, sub(x, y))
console.log();
console.log(texto2)
console.log(`A potência de ${x} elevado a ${y} (${x}^${y}) =`, pot(x, y))
console.log(`O Resto de ${x} / ${y} =`, resto(x, y))
console.log(textoDivisao(x,y))