
//! LAÇO WHILE

// Quantidade indeterminada de repetições

// Date.now() retorna um numero em milissegundos
// desde o dia 1 de janeiro de 1970 até o momento atual
//* A dataNoFuturo vai receber o Date.now() + 3 segundos
const dataNoFuturo = Date.now() + 3000

let quantidade = 0   // Variável de controle

while (Date.now() < dataNoFuturo) { // Expressão que pode ser TRUE ou FALSE
    quantidade++   // Mudança do valor
}

console.log('Quantidade de Iterações =', quantidade)