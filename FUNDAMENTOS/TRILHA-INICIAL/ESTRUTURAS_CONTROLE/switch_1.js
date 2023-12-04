
//! SWITCH - Seleção Múltipla
/*
 * É a única Estrutura de Controle, onde,
 * não se utiliza um expressão de TRUE ou FALSE.
 * Ele possui uma particularidade, se não colocar BREAK
 * após cada CASE, ele irá executar todos os CASES.
 * Outra questão é que caso nenhum dos CASES seja a opção correta,
 * será executado o case DEFAULT, que por padrão é a última opção.
*/

const conceito = 'A'

switch (conceito) {
    case 'A':
        console.log('Excelente!!!')
        break
    case 'B':
        console.log('Muito Bom!!!')
        break
    case 'C':
        console.log('Somente Bom!')
        break
    default:
        console.log('Não sei informar!!!')
}

console.log('Fim')

