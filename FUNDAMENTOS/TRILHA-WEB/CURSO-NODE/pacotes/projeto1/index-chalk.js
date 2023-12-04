import chalk from 'chalk'

const azul = (texto) => console.log(chalk.blue(texto))
const aviso = (texto) => console.log(chalk.bgYellowBright.bold(texto))
const erro = (texto) => console.log(chalk.bgRed.bold.italic(texto))

azul('Olá, eu sou um texto azul!')
aviso(' Preciso te informar algo importante! ')
erro(' Algo deu muito errado!!! ')
