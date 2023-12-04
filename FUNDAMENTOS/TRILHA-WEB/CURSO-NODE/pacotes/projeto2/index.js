
import pensador from 'pensador-scrap'
import fs from 'fs'

let salvarPensamento
let lerArquivo
const linha = '='

const autor = 'Moraes'
const { error, success } = await pensador.search({
    query: autor.trim(),   // A Função trim() faz com que se tiver um espaço em branco no inicio e no final, o mesmo é deletado.
    limit: 58
})

try {
    const pensamentos = success.thought
    const indiceAleatorio = Math.floor(Math.random() * pensamentos.length)
    const pensamentoSelecionado = pensamentos[indiceAleatorio]
    salvarPensamento = `Pensamento de ${pensamentoSelecionado.author}
"\n${pensamentoSelecionado.content}"\n\n${linha.repeat(80)}\n\n`
} catch (erro) {
    salvarPensamento = `"${autor}" Pensador inexistente.\n\n${linha.repeat(80)}\n\n`
} finally {
    // Sobrescreve o conteúdo do arquivo
    // fs.writeFileSync('pensamentos.txt', salvarPensamento, 'utf8')

    // Adiciona o conteúdo na última linha do arquivo
    fs.appendFileSync('pensamentos.txt', salvarPensamento, 'utf8')

    // Lê o conteúdo do arquivo
    lerArquivo = fs.readFileSync('pensamentos.txt', 'utf8')

    console.log(`Mensagem de erro: ${error}\n`)
    console.log(`Conteúdo do arquivo Salvo:\n\n${lerArquivo}`)
}
