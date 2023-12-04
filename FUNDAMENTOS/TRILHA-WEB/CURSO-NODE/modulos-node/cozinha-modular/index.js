
// //! IMPORTANDO OS MÓDULOS SEPARADAMENTE

// const acoes = require('./cozinha/acoesCozinhar')
// const { alimentos } = require('./cozinha/alimentos')

// console.log('\nMódulos importados separadamente')
// console.log('acoes.cozinhar(alimentos[0])')
// console.log(acoes.cozinhar(alimentos[0]))


// //! IMPORTANDO OS MÓDULOS DA PASTA COZINHA

// const cozinha = require('./cozinha')

// console.log('\nMódulos importados da pasta Cozinha')
// console.log('cozinha.cortar(cozinha.alimentos[3])')
// console.log(cozinha.cortar(cozinha.alimentos[3]))

// const receita = require('./receita')
// console.log('\nMódulo Receitas\n' + receita(cozinha.alimentos, cozinha.cortar, cozinha.assar))

//! IMPORTANDO O MÓDULO REFEIÇÃO E CHAMANDO DE VÁRIAS MANEIRAS

// //todo Fazendo duas chamadas Literais
// const r = require('./refeicao')

// r.vouComer('feijão', 'arroz', 'alface')     // chamada Almoço
// r.refeicao = 'Jantar'                       // altera o valor da variável
// r.vouComer('feijão', 'arroz', 'batata')     // chamada Jantar

//todo Inicializando a Variável na Importação
const refeicao = require('./refeicao')('Almoço')  // parâmetro da Função Externa
refeicao('feijão', 'arroz', 'alface')     // chamada Almoço

const refeicao2 = require('./refeicao')('Jantar')
refeicao2('feijão', 'arroz', 'batata')     // chamada Jantar