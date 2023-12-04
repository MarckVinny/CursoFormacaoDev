/**
 * ! Operadores de Atribuição
 * "=": serve para atribuir um valor a uma variável.
 *      let a = 10 (atribui o valor '10' a variável 'a')
 *      let b = a (atribui o valor de 'a' à variável 'b')
 *      let c = a + b + 3 (atribui a expressão 'a + b + 3' à variável 'c')
 *      
 *      let x = 3
 *      x = x + 3 (incrementa '3' à variável 'x')
 * 
 *      let y = 4
 *      y += 3 (incrementa '3' à variável 'y')
 *      y -= 2 (decrementa '2' da variável 'y')
 *      y *= 2 (multiplica o valor da variável 'y' por '2' )
 *      y /= 2 (divide o valor da variável 'y' por '2' )
 */

let a = 2
let b = a

console.log(a, b)

a += 7
console.log(a, b)

b -= 1
console.log(a, b)

b += 1
b *= 8
b /= 4

console.log(a, b)

let saudacao = 'Bom'
saudacao += ' dia'   // atribuição de concatenação
saudacao += '!!!'

console.log(saudacao)

let x = 10
x += 10    // x = x + 10
x -= 4    // x = x + 4
x *= 10    // x = x * 10
x /= 8    // x = x / 8
x %= 3    // x = x % 3

console.log(x)

