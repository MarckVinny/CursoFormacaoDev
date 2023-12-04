import kit from 'terminal-kit'
const term = kit.terminal

export async function menu(itens) {
  let options = {
    y: 1,                                  // "y: 1" deixa o MENU no topo do terminal - (padrão "y: 0") deixa na base
    style: term.white.inverse,
    cancelable: true,
    // align: 'center',                    // alinhamento do MENU em relação ao terminal (padrão 'left'), 'center' ou 'right'
    selectedStyle: term.white.bgCyan
  }
  const opcaoSelecionada = await term.singleRowMenu(itens, options).promise
  return opcaoSelecionada.selectedText
}

export async function menuSelecaoUsuario(itens){
  let options = {
    style: term.white.inverse,
    selectedStyle: term.white.bgGray
  }

  const selecionada = await term.singleColumnMenu(itens, options).promise
  console.log(selecionada)
}

export function finalizar() {
  term.slowTyping(
    '\n\n\n>>>>>>>>   ATÉ LOGO!!!   <<<<<<<<\n',
    {
      // style: term.white,                // define a cor da fonte (padrão é verde)
      flashStyle: term.bgBrightWhite,      // define a cor do cursor
      delay: 50                            // velocidade de digitação em milissegundos (padrão 150)
      // flashDelay: 50                    // velocidade de digitação em milissegundos (padrão 50)
    },
    function () {
      term.clear()
      process.exit()
    }
  )
}

export async function ler(enunciado) {
  term(`${enunciado} `)
  const input = await term.inputField().promise
  return input
}

export function textoVerde(texto){
  term.brightGreen(`\n\n${texto}`)
}

export function textoAzul(texto){
  term.brightBlue(texto)
}

export function aviso(texto){
  term.blink.red(`\n\n${texto}`)
}
