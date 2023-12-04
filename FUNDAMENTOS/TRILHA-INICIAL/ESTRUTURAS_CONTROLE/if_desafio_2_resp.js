const nota = 10
conceito = '?'


//! DESAFIO 2
//* Crie a lógica que converta as notas em conceitos
//? Conceito A: nota entre 9 e 10
//? Conceito B: nota entre 7 e 8,9
//? Conceito C: nota entre 5 e 6,9
//? Conceito D: nota entre 4,5 e 4,9
//? Conceito F: nota menor que 4,5


if (nota >= 9 && nota == 10) {
    conceito = 'A'
}

if (nota >= 7 && nota <= 8.9) {
    conceito = 'B'
}

if (nota >= 5 && nota <= 6.9) {
    conceito = 'C'
}

if (nota >= 4.5 && nota <= 4.9) {
    conceito = 'D'
}

if (nota < 4.5) {
    conceito = 'F'
}

console.log('O conceito do aluno é:', conceito)