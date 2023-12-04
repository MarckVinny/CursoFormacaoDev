
import calculos from './calculo.js'              // utilizando variável "export default"
import { texto, soma, sub } from './calculo.js'  // utilizando destructuring "export"

let x, y
x = 10
y = 72

// utilizando a variável
console.log(calculos.texto)
console.log(calculos.soma(x, y))
console.log(calculos.sub(x, y))

// utilizando destructuring
console.log(texto)
console.log(soma(x, y))
console.log(sub(x, y))
