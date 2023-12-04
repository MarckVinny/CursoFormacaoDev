
import fs from 'fs'
import {v4 as uuidv4} from 'uuid'

// Aceita Objetos no formato {nome, id}
let dadosManipulaveis = _carregarValores()

// Lê as informações do arquivo
function _carregarValores() {
    const dadosJSON = fs.readFileSync('banco.json', 'utf8')
    const dados = JSON.parse(dadosJSON)
    return dados
}

// Salva os valores em formato JSON
export function persistirValores() {
    const dadosJSON = JSON.stringify(dadosManipulaveis, null, 4)
    fs.writeFileSync('banco.json', dadosJSON, 'utf8')
}

// Função Salvar/Editar
export function salvar(nome, id) {
    // verifica se o ID existe no Banco
    const indice = dadosManipulaveis.findIndex((obj) => obj.id === id)
    if (indice >= 0) {   // será feito a atualização
        dadosManipulaveis[indice].nome = nome
    } else {
        const idUnico = uuidv4()
        dadosManipulaveis.push({ nome, id: idUnico })
    }
}

// Função Deletar
export function deletar(id) {
    const dadosFiltrados = dadosManipulaveis.filter((dado) => {
        return dado.id != id
    })
    dadosManipulaveis = dadosFiltrados
}

// Função Ler Dados
export function pegaDados() {
    const dadosImprimiveis = dadosManipulaveis.map((dado) => {
        return `${dado.nome} -> ${dado.id}`
    })
    return dadosImprimiveis    
}