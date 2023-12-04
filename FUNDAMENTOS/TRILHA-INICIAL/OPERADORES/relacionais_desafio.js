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

let a = 5
let b = 7

// 5 expressões que o resultado seja TRUE
console.log('O número', a, '<', b, '(menor que)?\n R:', a < b)
console.log('O número', a, '<=', b, '(menor ou igual)?\n R:', a <= b)
console.log('O número', a, '!=', b, '(diferente)?\n R:', a != b)
console.log('O número', a, '!==', b, '(estritamente diferente)?\n R:', a !== b)
console.log('O número', a, '>', b, '(maior)?\n R:', b > a)

// 5 expressões que o resultado seja FALSE
console.log('O número', a, '>', b, '(maior que)?\n R:', a > b)
console.log('O número', a, '>=', b, '(maior ou igual)?\n R:', a >= b)
console.log('O número', a, '==', b, '(igual)?\n R:', a == b)
console.log('O número', b, '<', a, '(menor que)?\n R:', b < a)
console.log('O número', b, '<=', a, '(menor ou igual)?\n R:', b <= a)