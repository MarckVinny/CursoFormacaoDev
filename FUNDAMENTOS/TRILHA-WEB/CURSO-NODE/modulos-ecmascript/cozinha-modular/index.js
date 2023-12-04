
// //! IMPORTANDO OS MÓDULOS DA PASTA COZINHA

// import cozinha from './cozinha/principal.js'

// console.log('\nMódulos importados da pasta Cozinha')
// console.log('cozinha.cortar(cozinha.alimentos[3])')
// console.log(cozinha.cortar(cozinha.alimentos[3]))


// //! IMPORTANDO OS MÓDULOS SEPARADAMENTE

// import acoes from './cozinha/acoesCozinhar.js'
// import { alimentos } from './cozinha/alimentos.js'

// console.log('\nMódulos importados separadamente')
// console.log('acoes.cozinhar(alimentos[0])')
// console.log(acoes.cozinhar(alimentos[0]))

//! IMPORTANDO O MÓDULO RECEITA

// import cozinha from './cozinha/principal.js'
// import receita from './receita.js'

// console.log('\nMódulo Receitas\n' + receita(['Legumes', 'Carne'], cozinha.cortar, cozinha.assar))


//! IMPORTANDO O MÓDULO REFEIÇÃO E CHAMANDO DE VÁRIAS MANEIRAS

import refeicao from "./refeicao.js"

const vouComerNoAlmoco = refeicao('Almoço')
const vouComerNoJantar = refeicao('Jantar')

vouComerNoAlmoco('Feijão', ' Arroz', ' Batata')
vouComerNoJantar('Feijão', ' Arroz', ' Salada')