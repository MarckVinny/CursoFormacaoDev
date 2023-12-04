
//! \nSWITCH - Seleção Múltipla
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

const readline = require('readline')
const { clear } = require('console')

// Cria a interface para o usuário inserir os dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function exibirTitulo() {
    clear()// Limpa o Terminal antes da resposta
    console.log('=== Sistema de Notas ===\n')
}

function inserirDados(input) {
    clear()

    // Verificar se a entrada é um número de ponto flutuante
    const nota = parseFloat(input)
    if (!isNaN(nota)) {

        // Arredondar para cima e limitar o valor entre 0 e 10
        const notaArredondada = Math.ceil(nota)
        exibirTitulo()

        switch (notaArredondada) {
            case 10:
                console.log(`Excelente!!! \nSua nota é: ${notaArredondada} \nSeu Conceito é: A+\n\n`)
                break
            case 9:
                console.log(`Excelente!!! \nSua nota é: ${notaArredondada} \nSeu Conceito é: A\n\n`)
                break
            case 8:
                console.log(`Muito Bom!!! \nSua nota é: ${notaArredondada} \nSeu Conceito é: B+\n\n`)
                break
            case 7:
                console.log(`Muito Bom!!! \nSua nota é: ${notaArredondada} \nSeu Conceito é: B\n\n`)
                break
            case 6:
                console.log(`Você está de Recuperação! \nSua nota é: ${notaArredondada} \nSeu Conceito é: C+\n\n`)
                break
            case 5:
                console.log(`Você está de Recuperação! \nSua nota é: ${notaArredondada} \nSeu Conceito é: C\n\n`)
                break
            case 4:
                console.log(`Você está de Reprovado! \nSua nota é: ${notaArredondada} \nSeu Conceito é: D+\n\n`)
                break
            case 3:
                console.log(`Você está de Reprovado! \nSua nota é: ${notaArredondada} \nSeu Conceito é: D\n\n`)
                break
            case 2:
                console.log(`Você está de Muito Reprovado! \nSua nota é: ${notaArredondada} \nSeu Conceito é: E+\n\n`)
                break
            case 1:
                console.log(`Você está de Muito Reprovado! \nSua nota é: ${notaArredondada} \nSeu Conceito é: E\n\n`)
                break
            case 0:
                console.log(`Não foi dessa vez! \nSua nota é: ${notaArredondada} \nSeu Conceito é: F\n\n`)
                break
            default:
                return rl.question('Digite um Conceito ou Nota válida:\n', inserirDados)
        }
    } else {
        exibirTitulo()

        switch (input.toUpperCase()) {
            case 'A+':
                console.log(`Excelente!!! \nSeu conceito é: ${input.toUpperCase()} \nSua Nota é: 10\n\n`)
                break
            case 'A':
                console.log(`Excelente!!! \nSeu conceito é: ${input.toUpperCase()} \nSua Nota é: 9\n\n`)
                break
            case 'B+':
                console.log(`Muito Bom!!! \nSeu conceito é: ${input.toUpperCase()} \nSua Nota é: 8\n\n`)
                break
            case 'B':
                console.log(`Muito Bom!!! \nSeu conceito é: ${input.toUpperCase()} \nSua Nota é: 7\n\n`)
                break
            case 'C+':
                console.log(`Você está de Recuperação! \nSeu conceito é: ${input.toUpperCase()} \nSua Nota é: 6\n\n`)
                break
            case 'C':
                console.log(`Você está de Recuperação! \nSeu conceito é: ${input.toUpperCase()} \nSua Nota é: 5\n\n`)
                break
            case 'D+':
                console.log(`Você está de Reprovado! \nSeu conceito é: ${input.toUpperCase()} \nSua Nota é: 4\n\n`)
                break
            case 'D':
                console.log(`Você está de Reprovado! \nSeu conceito é: ${input.toUpperCase()} \nSua Nota é: 3\n\n`)
                break
            case 'E+':
                console.log(`Você está de Muito Reprovado! \nSeu conceito é: ${input.toUpperCase()} \nSua Nota é: 2\n\n`)
                break
            case 'E':
                console.log(`Você está de Muito Reprovado! \nSeu conceito é: ${input.toUpperCase()} \nSua Nota é: 1\n\n`)
                break
            case 'F':
                console.log(`Não foi dessa vez! \nSeu conceito é: ${input.toUpperCase()} \nSua Nota é: 0\n\n`)
                break
            default:
                return rl.question('Digite um Conceito ou Nota válida:\n', inserirDados)
        }
    }
    rl.close()  // Encerra a interface para o usuário inserir os dados
}

exibirTitulo()
rl.question('Digite um Conceito ou Nota válida:\n', inserirDados)
