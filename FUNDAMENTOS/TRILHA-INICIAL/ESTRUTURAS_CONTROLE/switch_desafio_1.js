
//! SWITCH - Seleção Múltipla
/**
 * * É a única Estrutura de Controle, onde,
 * * não se utiliza um expressão de TRUE ou FALSE.
 * * Ele possui uma particularidade, se não colocar BREAK
 * * após cada CASE, ele irá executar todos os CASES.
 * * Outra questão é que caso nenhum dos CASES seja a opção correta,
 * * será executado o case DEFAULT, que por padrão é a última opção.
*/

//! DESAFIO SWITCH
/**
 * * Gere um mapeamento entre conceito e nota com os valores abaixo:
 * 
 * A+ => 10
 * A => 9
 * B+ => 8
 * B => 7
 * C+ => 6
 * C => 5
 * D+ => 4
 * D => 3
 * E+ => 2
 * E => 1
 * F => 0
 */

const { clear } = require('console')
const readline = require('readline')

// Cria a interface para o usuário inserir os dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function exibirTitulo() {
    clear();
    console.log('=== Sistema de Notas ===\n');
  }  

function conceitoNota(input) {
    clear() // Limpa o Terminal antes da resposta
    switch (input) {
        case 'A+':
        case '10':
            console.log('Excelente!!! \nSua nota é: 10\n\n')
            break
        case 'A':
        case '9':
            console.log('Excelente!!! \nSua nota é: 9\n\n')
            break
        case 'B+':
        case '8':
            console.log('Muito Bom!!! \nSua nota é: 8\n\n')
            break
        case 'B':
        case '7':
            console.log('Muito Bom!!! \nSua nota é: 7\n\n')
            break
        case 'C+':
        case '6':
            console.log('Você está de Recuperação! \nSua nota é: 6\n\n')
            break
        case 'C':
        case '5':
            console.log('Você está de Recuperação! \nSua nota é: 5\n\n')
            break
        case 'D+':
        case '4':
            console.log('Você está de Reprovado! \nSua nota é: 4\n\n')
            break
        case 'D':
        case '3':
            console.log('Você está de Reprovado! \nSua nota é: 3\n\n')
            break
        case 'E+':
        case '2':
            console.log('Você está de Muito Reprovado! \nSua nota é: 2\n\n')
            break
        case 'E':
        case '1':
            console.log('Você está de Muito Reprovado! \nSua nota é: 1\n\n')
            break
        case 'F':
        case '0':
            console.log('Não foi dessa vez! \nSua nota é: 0\n\n')
            break
        default:
            console.log('Não sei informar!!! \nDigite um conceito ou uma nota válida!\n\n')
    }
    rl.close()  // Encerra a interface para o usuário inserir os dados
}

exibirTitulo()
rl.question('Digite um Conceito ou Nota válida.\n', conceitoNota)