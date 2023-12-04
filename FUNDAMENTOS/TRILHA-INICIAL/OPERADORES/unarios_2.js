let a = 1
let b = 2

// O incremento ou decremento antes da variável
// dita a prioridade da operação. Neste caso:
// - Primero incrementa 'a' que passa a valer '2'
// - Depois compara se 'a === b' que é verdadeiro
// - Por último decrementa 'b' que passa a valer '1'
console.log(a++ === --b)

a = 1
b = 2

// O certo e mais comum a se fazer é:
a++
console.log(a === b)
b--
console.log(a === b)