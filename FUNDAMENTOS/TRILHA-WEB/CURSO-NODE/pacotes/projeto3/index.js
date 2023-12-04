import { salvar, deletar, pegaDados, persistirValores } from './Banco.js'
import {aviso, finalizar, ler, menu, menuSelecaoUsuario, textoAzul, textoVerde} from './Interface.js'
import kit from 'terminal-kit'

const term = kit.terminal
const itemMenu = [
  ' Adicionar ',
  ' Editar ',
  ' Deletar ',
  ' Exibir ',
  ' Salvar ',
  ' Sair ',
]
const subMenu = pegaDados()
let nome, id

term.clear()

while (1) {
  const selecionado = await menu(itemMenu)
  switch (selecionado.trim().toLowerCase()) {
    case 'adicionar':
      term.clear()
      nome = await ler('\n\nDigite o Nome de Usuário:')
      if (!nome.trim()) {
        // verifica se nome ñ é vazio
        term.clear()
        aviso('O Nome não pode ser vazio!!!')
        break
      }
      term.clear()
      salvar(nome)
      textoVerde('Usuário adicionado com sucesso!!!')
      aviso(
        'Clique em "Exibir" e confirme se foi adicionado.\nDepois clique em "Salvar".'
      )
      break

    case 'editar':
      term.clear()
      menuSelecaoUsuario(pegaDados())
      // id = await ler('\n\nDigite o ID do Usuário: ')
      // if (!id.trim()) {   // verifica se o id ñ é vazio
      //   term.clear()
      //   aviso('O ID não pode ser vazio!!!')
      //   break
      // }
      // nome = await ler('\n\nDigite o novo Nome de Usuário: ')
      // if (!nome.trim()) {
      //   term.clear()
      //   aviso('O Nome não pode ser vazio!!!')
      //   break
      // }
      // salvar(nome, id)
      // textoVerde('Usuário atualizado com sucesso!!!')
      // aviso(
      //   'Clique em "Exibir" e confirme se foi adicionado.\nDepois clique em "Salvar".'
      // )
      break

    case 'deletar':
      term.clear()
      id = await ler('\n\nDigite o ID de Usuário: ')
      if (!id.trim()) {
        term.clear()
        aviso('O ID não pode ser vazio!!!')
        break
      }
      deletar(id)
      textoVerde('Usuário excluído com sucesso!!!')
      aviso(
        'Clique em "Exibir" e confirme se foi adicionado.\nDepois clique em "Salvar".'
      )
      break

    case 'exibir':
      term.clear()
      textoAzul(pegaDados())
      break

    case 'salvar':
      term.clear()
      persistirValores()
      break

    case 'sair':
      term.clear()
      finalizar()
      break

    default:
      term.clear()
      term(`${selecionado.trim().toLowerCase()} não é válido!`)
      break
  }
}
