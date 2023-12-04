// Trocar os valores das variáveis, sem mexer nas mesmas

let numeroA = 14
let numeroB = 2007

console.log('NumeroA ', numeroA, 'NumeroB ', numeroB)

// Solução:
// criar uma nova variável para armazenar o valor da variável numeroA.
let valorTemp = numeroA
numeroA = numeroB
numeroB = valorTemp
console.log('NumeroA ', numeroA, 'NumeroB ', numeroB)