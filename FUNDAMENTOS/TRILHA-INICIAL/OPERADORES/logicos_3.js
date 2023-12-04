
const emBlacKFriday = false
const temEstoque = true
const temPerfilFuncionario = true

// se está na Black Friday e tem estoque 
// permiteDescontoMaximo = true
//! se NÃO está na Black Friday e tem estoque 
//! permiteDescontoMaximo = false
//todo se está na Black Friday e NÃO tem estoque 
//todo permiteDescontoMaximo = false
//* se NÃO está na Black Friday e NÃO tem estoque 
//* permiteDescontoMaximo = false
const permiteDescontoMaximo = emBlacKFriday && temEstoque

console.log('Permitir desconto máximo?', permiteDescontoMaximo)


//* Primeiro resolve a Operação Lógica entre parenteses 
//* Por mais que, não tenha estoque e não esteja na Black Friday
//* Irá retornar true por causa do || temPerfilFuncionario
const permiteDescontoMaximoPF = (emBlacKFriday && temEstoque) || temPerfilFuncionario

console.log('Permitir desconto máximo?', permiteDescontoMaximoPF)


//! OBS: caso a operação fique muito grande, com vários Operadores Lógicos
//! quebre a operação em variáveis para tornar mais legível
//
//? const produtoDisponivelBlackFriday = emBlacKFriday && temEstoque
//? const permiteDescontoMaximoPF = produtoDisponivelBlackFriday || temPerfilFuncionario