
//! DESAFIO FOR - MATRIZ
//* [1-1] [1-2] [1-3]
//* [2-1] [2-2] [2-3]
//* [3-1] [3-2] [3-3]

let conteudo = ''

// Primeiro executa o,laço for externo 'lin'
// Cria a primeira linha
// Entra no laço for interno 'col'
// Cria as 3 colunas da primeira linha
// Incrementa a quebra de linha '\n'
// Repete o processo
for (let lin = 1; lin <= 3; lin++) {
    for (let col = 1; col <= 3; col++) {
        conteudo += `[${lin}-${col}] `
    }
    conteudo += '\n'
}

console.log(conteudo)