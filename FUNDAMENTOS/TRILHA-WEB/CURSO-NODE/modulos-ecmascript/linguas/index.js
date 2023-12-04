
import pt from './pt.js'
import en from './en.js'

const lingua = 'en'
let saudacoes

if (lingua === 'pt') {
    saudacoes = pt
} else if (lingua === 'en') {
    saudacoes = en
}

console.log()
console.log(saudacoes.dia)           
console.log(saudacoes.tarde)
console.log(saudacoes.noite)