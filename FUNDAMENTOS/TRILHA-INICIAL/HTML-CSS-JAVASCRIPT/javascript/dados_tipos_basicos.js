/* 
 ! JavaScript possui 3 tipos básicos:
 * String: com aspas simples (''), duplas ("") ou craze (``)
 * Number: com valor numérico (JavaScript não diferencia entre int e float)
 * Boolean: com valores de verdadeiro (true) ou falso (false)
*/

// typeof: server para verificar qual o tipo da variável.
let quantidade = 100
console.log('A variável é do tipo', typeof quantidade, 'e possui o valor', quantidade)

// número com ponto flutuante
let saldoContaCorrente = 123456.67
console.log('A variável é do tipo', typeof saldoContaCorrente, 'e possui o valor', saldoContaCorrente)

let estaChovendo = true
console.log('A variável é do tipo', typeof estaChovendo, 'e possui o valor', estaChovendo)

// Operação de comparação, para retornar verdadeiro ou falso
let temDinheiroNaConta = saldoContaCorrente > 0
console.log('A variável é do tipo', typeof temDinheiroNaConta, 'e possui o valor', temDinheiroNaConta)

let fraseLegal = 'JavaScript é muito legal!'
console.log('A variável é do tipo', typeof fraseLegal, 'e possui o valor', fraseLegal)