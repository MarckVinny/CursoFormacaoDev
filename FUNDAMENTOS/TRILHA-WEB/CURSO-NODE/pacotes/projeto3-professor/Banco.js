import fs from "fs";
import {v4 as uuidv4} from "uuid";

let dadosManipulaveis = _carregarValores(); // Formato {nome, id}

function _carregarValores(){
    const dadosJSON = fs.readFileSync("banco.json", "utf8");
    const dados = JSON.parse(dadosJSON);
    return dados;
}

export function persistirValores(){
    const dadosJSON = JSON.stringify(dadosManipulaveis,null,4);
    fs.writeFileSync("banco.json", dadosJSON, "utf8");
}

export function salvar(nome, id){
    const indice = dadosManipulaveis.findIndex((obj)=>obj.id === id);
    if(indice >= 0) {//alteração
        dadosManipulaveis[indice].nome = nome;
    } else {
        const idUnico = uuidv4();
        dadosManipulaveis.push({nome,id:idUnico});
    }
}

export function deletar(id){
    const dadosFiltrados = dadosManipulaveis.filter((dado)=>{
        return dado.id != id;
    })
    dadosManipulaveis = dadosFiltrados;
}

export function pegaDados(){
    const dadosImprimiveis = dadosManipulaveis.map((dado)=>{
        return `${dado.nome} -> ${dado.id}`;
    })
    return dadosImprimiveis;
}