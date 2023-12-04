// VARIÁVEIS calculando desconto
let preco = 19.90
// 40% de desconto
let desconto = 0.4
let precoComDesconto = preco * (1 - desconto)

/*
  Usa-se "let" ou "var" somente quando 
  declara a variável pela primeira vez
*/
preco = 21.90

console.log(precoComDesconto)

/*
  CONCATENAÇÃO: para concatenar (juntar) duas variáveis
  do tipo string, usa-se o sinal de "+".
*/
let nome = 'Caderno'
let categoria = 'Papelaria'

console.log(
  '\nProduto: ' + nome +
  '\nCategoria: ' + categoria +
  '\nDesconto: ' + desconto * 100 + '%' +
  '\nPreço Final: ' + precoComDesconto
)
