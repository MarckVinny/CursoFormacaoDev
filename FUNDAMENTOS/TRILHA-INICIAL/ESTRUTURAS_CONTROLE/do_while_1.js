
//! LAÇO DO/WHILE
//* É a única Estrutura de Controle, onde,
//* o Bloco de Código vem antes da Expressão,
//* garantindo que Ela seja executada pelo menos uma vez.

// Quantidade indeterminada de repetições

// Date.now() retorna um numero em milissegundos
// desde o dia 1 de janeiro de 1970 até o momento atual
//* A dataNoFuturo vai receber o Date.now() + 3 segundos
const dataNoFuturo = Date.now() + 3000

let quantidade = 0   // Variável de controle

// DO/WHILE
do {
    quantidade++   // Mudança do valor
} while (Date.now() < dataNoFuturo)   // Expressão que pode ser TRUE ou FALSE

console.log('Quantidade de Iterações =', quantidade)