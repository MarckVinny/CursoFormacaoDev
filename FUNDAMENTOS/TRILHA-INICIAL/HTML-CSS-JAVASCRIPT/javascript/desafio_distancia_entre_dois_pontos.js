// Calcular a distancia entre dois pontos no plano cartesiano.
// Usando a Raiz Quadrada de (x2-x1)2 + (y2-y1)2

let distancia = Math.sqrt((3 - 1) * (3 - 1) + (3 - 1) * (3 - 1))
console.log('A Raiz Quadrada é:', distancia.toFixed(2))

/**
 * Usando a função de Raiz Quadrada "Math.sqrt()"
 * Usando a função de Exponenciação "Math.pow()"
 */
let distancia2 = Math.sqrt(Math.pow(3 - 1, 2) + Math.pow(3 - 1, 2))
console.log('A Raiz Quadrada é:', distancia2.toFixed(2))


// SOLUÇÃO PROFESSOR

const x1 = 1
const y1 = 1
const x2 = 3
const y2 = 3

const deltaX = Math.pow(x2 - x1, 2)
const deltaY = Math.pow(y2 - y1, 2)
const distancia3 = Math.sqrt(deltaX + deltaY)

console.log('A distância entre dois pontos é:', distancia3.toFixed(2))



/*
    Math.pow()
    A função Math.pow() retorna a base elevada ao expoente power, ou seja, baseexpoente.

    Sintaxe
    Math.pow(base, expoente)
    
    Parâmetros:
    base
    O número da base.

    Expoente:
    O expoente usado para elevar a base.

    Descrição:
    Como pow() é um método estático de Math, você sempre irá usá-lo como Math.pow(), 
    ao invés de usá-lo como um método de um objeto do tipo Math que você tenha criado 
    (Math não é um construtor).

    Exemplos:
    Usando Math.pow()
    
    //*! simples
    Math.pow(7, 2);    // 49
    Math.pow(7, 3);    // 343
    Math.pow(2, 10);   // 1024
    
    //*! expoentes fracionários
    Math.pow(4, 0.5);  // 2 (raiz quadrada de 4)
    Math.pow(8, 1/3);  // 2 (raiz cúbica de 8)
    Math.pow(2, 0.5);  // 1.4142135623730951 (raiz quadrada de 2)
    Math.pow(2, 1/3);  // 1.2599210498948732 (raiz cúbica de 2)
    
    //*! expoentes com sinais
    Math.pow(7, -2);   // 0.02040816326530612 == (1/7)2 == (1/49)
    Math.pow(8, -1/3); // 0.5 == (1/8)1/3 == 1/2
    
    //*! bases com sinal
    Math.pow(-7, 2);   // 49 (quadrados sempre são positivos)
    Math.pow(-7, 3);   // -343 (cubos podem ser negativos conforme a base)
    Math.pow(-7, 0.5); // NaN (números negativos não tem uma raiz quadrada real)
    
    //*! devido ao fato que raízes "par" e "ímpar" são próximas,
    //*! e limitam a precisão de ponto flutuante,
    //*! bases negativas com expoentes fracionários sempre retornam NaN
    Math.pow(-7, 1/3); // NaN
 */