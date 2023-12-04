
export const texto = 'Sou o módulo calculoBasico'

export function soma(a, b) {
    return a + b
}

export function sub(a, b) {
    return a - b
}

// Recebendo o valor da constante 'info' na chave 'texto'
export default {
    texto,
    soma,
    sub
}
