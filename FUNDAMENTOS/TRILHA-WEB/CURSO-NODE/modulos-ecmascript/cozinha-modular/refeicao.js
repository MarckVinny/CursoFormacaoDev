
//! MÓDULO REFEIÇÃO

export default function(refeicao){
    const vouComer = function (...alimentos) {
    console.log(`Na refeição ${refeicao} vou comer: ${alimentos}`)
    }
    return vouComer
}