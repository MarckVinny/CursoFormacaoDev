
//! LAÇO WHILE

// Quantidade indeterminada de repetições

let quantidade = 0   // Variável de controle

// A Função Math.random() gera um número aleatório entre 0 e 1
while (Math.random() < 0.98) { // Expressão que pode ser TRUE ou FALSE
    quantidade++   // Mudança do valor
}

console.log('Quantidade de Iterações =', quantidade)