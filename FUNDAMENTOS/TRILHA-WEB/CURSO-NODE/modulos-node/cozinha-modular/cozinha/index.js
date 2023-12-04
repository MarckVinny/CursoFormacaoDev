
//! MÓDULO COZINHA

const acoesCozinhar = require('./acoesCozinhar')
const {alimentos} = require('./alimentos')

module.exports = {
    ...acoesCozinhar, alimentos
}
