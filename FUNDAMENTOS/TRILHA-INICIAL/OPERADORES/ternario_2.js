//! OPERADOR TERNÁRIO
// No operador ternário, logo após a expressão
// tem o sinal ? após executa se for TRUE
// depois de : executa se for FALSE

const x = 8
const y = 4

const operacao = '/'   // + - * /

// Se operação for estritamente igual a '+'
// Então '?' some 'x + y'
// Senão ':' Se operação for estritamente igual a '-'
// Então '?' subtraia 'x - y'
// Senão ':' Se operação for estritamente igual a '*'
// Então '?' multiplique 'x * y'
// Senão ':' divida 'x / y'
const resultado = operacao === '+' ? x + y
    : operacao === '-' ? x - y
        : operacao === '*' ? x * y : x / y

console.log(resultado)

//! PS. Deve se evitar operações ternárias uma dentro da outra por dificultar o entendimento.