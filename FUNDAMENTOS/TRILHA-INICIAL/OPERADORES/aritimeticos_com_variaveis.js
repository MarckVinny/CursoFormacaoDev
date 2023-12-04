let a = 8
let b = 11


// Usando variáveis
console.log('O resultado de', a, '+', b, 'é =', a + b)
console.log('O resultado de', a, '-', b, 'é =', a - b)
console.log('O resultado de', a, 'x', b, 'é =', a * b)
console.log('O resultado de', a, '/', b, 'é =', (a / b).toFixed(2))
console.log('O módulo', b, 'de', a, 'e', b, 'é =', a % b)
console.log('O módulo', 4, 'de', a, 'e', b, 'é =', a % 4)
console.log('O módulo', 5, 'de', a, 'e', b, 'é =', a % 5, '\n')

// Primeiro multiplica, depois soma e por ultimo subtrai
let resultado = a + b * a - b
console.log('O resultado de', a, '+', b, 'x', a, '-', b, 'é =', resultado)
console.log('Primeiro multiplica, depois soma e por ultimo subtrai.\n')

let valorA = a
a = a + b * a / b
console.log('O novo valor da variável a:', valorA, '+', b, 'x', valorA, '/', b, 'é =', a)
console.log('Primeiro multiplica, depois divide e por ultimo soma.')


