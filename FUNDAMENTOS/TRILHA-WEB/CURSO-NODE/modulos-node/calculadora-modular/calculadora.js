
//! CALCULADORA SIMPLES
/**
 * Ela conterá duas Funções soma() e sub(), que irão somar e subtrair.
 * A função 'soma()' vai receber dois argumentos 'a' e 'b' e irá retornar 'a + b';
 * A Função 'sub()' vai receber dois argumentos 'a' e 'b' e irá retornar 'a - b'.
 */

function soma(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

//! Para criar a Calculadora só seria preciso do código abaixo
// Pois a implementação das funções poderiam ser feitas em
// outro arquivo (módulo) e depois importados para a Calculadora
// isso será feito a seguir.


let x, y
x = 10
y = 5

console.log(soma(x, y))
console.log(sub(x, y))