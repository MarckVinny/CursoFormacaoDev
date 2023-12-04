
//! MÓDULO REFEIÇÃO

module.exports = function(refeicao){
    const vouComer = function (...alimentos) {
    console.log(`Na refeição ${refeicao} vou comer: ${alimentos}`)
    }
    return vouComer
}