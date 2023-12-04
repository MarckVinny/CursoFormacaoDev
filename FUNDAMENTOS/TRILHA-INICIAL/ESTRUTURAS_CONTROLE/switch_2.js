
//! SWITCH - Seleção Múltipla
//* É a única Estrutura de Controle, onde,
//* não se utiliza um expressão de TRUE ou FALSE.
//* Ele possui uma particularidade, se não colocar BREAK
//* após cada CASE, ele irá executar todos os CASES.
//* Outra questão é que caso nenhum dos CASES seja a opção correta,
//* será executado o case DEFAULT, que por padrão é a última opção.


const nota = 6.9

console.log(`Sua nota é: ${nota}`)

// A Função Math.ceil() arredonda o ponto flutuante para cima
//* Ou seja: 6.1 vira 7
switch (Math.ceil(nota)) {
    
    //* Pode-se usar cases iguais na mesma linha quanto em linhas diferentes
    //! Mas precisa seguir um padrão: ou fica na mesma linha ou em em linhas diferentes
    case 10: case 9: case 8: case 7:
        console.log('Aprovado! \nParabéns!')
        break
    case 6:
    case 5:
        console.log('Recuperação')
        break
    case 4: case 3:
        console.log('Reprovado')
        break
    case 2: case 1: case 0:
        console.log('Muito Reprovado')
        break
    default:
        console.log('Nota inválida!!!')
}

// A Função Math.floor() arredonda o ponto flutuante para baixo
//* Ou seja: 6.9 vira 6
console.log(`Nota arredondada para baixo: ${Math.floor(nota)}`)

console.log('Fim')

