/**
 * O resultado dos Operadores Relacionais
 * Sempre será Verdadeiro ou Falso TRUE ou FALSE
 * Maior ou igual: >=
 * Menor ou igual: <=
 * Maior: >
 * Menor: <
 * Igual: == ou ===
 * Diferente: != ou !==
 */

let a = 1
let b = 1

b = '1'

// verifica se os valores são iguais
console.log('Os valores', a, 'do tipo', typeof a, 'e', b, 'do tipo', typeof b, 'são "iguais (==)"?\nR:', a == b)

// verifica se são estritamente iguais
// verificando os TIPOS e não os valores.
console.log('\nOs tipos', typeof a, 'e', typeof b, 'são "estritamente iguais (===)"?\nR:', a === b)



let x = 3
let y = '3'

// verifica se os valores são diferentes
console.log('\nOs valores', x, 'do tipo', typeof x, 'e', y, 'do tipo', typeof y, 'são "diferentes (!=)"?\nR:', x != y)

// verifica se são estritamente diferentes
// verificando os TIPOS e não os valores.
console.log('\nOs tipos', typeof x, 'e', typeof y, 'são "estritamente diferentes (!==)"?\nR:', x !== y)
