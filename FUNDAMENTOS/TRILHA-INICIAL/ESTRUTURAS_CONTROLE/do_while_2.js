
//! LAÇO DO/WHILE
//* É a única Estrutura de Controle, onde,
//* o Bloco de Código vem antes da Expressão,
//* garantindo que Ela seja executada pelo menos uma vez.

// Quantidade indeterminada de repetições

let quantidade = 0   // Variável de controle

//todo> A Função Math.random() gera um número aleatório entre 0 e 1
// DO/WHILE
do {
    quantidade++   // Mudança do valor
} while (Math.random() < 0.98)  // Expressão que pode ser TRUE ou FALSE

console.log('Quantidade de Iterações =', quantidade)