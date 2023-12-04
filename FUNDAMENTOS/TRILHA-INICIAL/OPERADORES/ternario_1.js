//! OPERADOR TERNÁRIO
// No operador ternário, logo após a expressão
// tem o sinal ? após executa se for TRUE
// depois de : executa se for FALSE

const hora = 19
// Caso seja 12 ou mais será Boa Tarde! senão será Bom Dia!
const saudacao1 = hora >= 12 ? 'Boa Tarde!' : 'Bom Dia!'
console.log(saudacao1)

// Caso seja 11 ou menos será Bom Dia! senão Caso seja 17 ou menos será Boa Tarde! senão será Boa Noite!
const saudacao2 = hora <= 11 ? 'Bom Dia!' : (hora <= 17 ? 'Boa Tarde!' : 'Boa Noite!')
console.log(saudacao2)

const nota = 6.9
const aprovado = nota >= 7 ? 'Aprovado!' : 'Reprovado!'
console.log(aprovado)

// Serve para converter true e false em Sim e Não
console.log(true ? 'Sim' : 'Não')