import kit from "terminal-kit";
const term = kit.terminal;

export async function menu(itens){
    let options = {
        style: term.inverse,
        selectedStyle: term.white.bgCyan
    }

    const opcaoSelecionada = await term.singleLineMenu(itens,options).promise
    return opcaoSelecionada.selectedText;
}

export async function menuSelecaoUsuario(itens){
    let options = {
        style: term.inverse,
        selectedStyle: term.white.bgGray
    }

    const selecionada = await term.singleColumnMenu(itens,options).promise;
    const id = selecionada.selectedText.split("->")[1].trim();
    return id;
}




export async function le(enunciado){
    term(`${enunciado}\n\n`);
    const foiLido = await term.inputField().promise;
    return foiLido;
}

export function textoVerde(texto){
    term.green(`\n\n${texto}`);
}

export function textoAzul(texto){
    term.blue(`\n\n${texto}`);
}

export function finaliza(){
    process.exit();
}