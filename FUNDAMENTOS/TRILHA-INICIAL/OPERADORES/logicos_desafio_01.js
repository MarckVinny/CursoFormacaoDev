//! DESAFIO LÓGICO #01

// Questão 01:
// O aluno faltou 18 vezes em um total de 223 aulas no ano.
// Suas notas são: 5.8, 8.1 e 6.9
// Critério de aprovação: Média maior ou igual a 7 e frequência de 80%.

//! Dica: o problema possui operações lógicas, relacionais e aritméticas.

// Crie um algoritmo para:
// - Mostrar a frequência do aluno(usando valores entre 0 e 1),
//   onde 0 faltou todas as aulas e 1 assistiu todas as aulas;
// - Mostrar a Média do aluno;
// - Calcular se o aluno foi aprovado?


// Calculo da Média: soma os valores e divide pela quantidade dos mesmos.
const nota1 = 5.8
const nota2 = 8.1
const nota3 = 6.9
const media = (nota1 + nota2 + nota3) / 3
const falta = 18
const aulas = 223
const presenca = aulas - falta
const frequencia = (presenca / aulas) * 100
const aprovado = media >= 7 && frequencia >= 0.8

console.log(
    '\nO aluno possui as notas:', nota1 + ',', nota2, 'e', nota3 + '.',
    '\nPossui a Média:', media.toFixed(2) + '.',
    '\nPossui', falta, 'faltas.',
    '\nAssistiu a', presenca, 'de', aulas, 'aulas.',
    '\nFrequentou', frequencia.toFixed(2) + '% das aulas.',
    '\n\nO aluno está aprovado?',
    '\nR:', aprovado ? 'Aprovado!!!!' : 'Não, ele está reprovado!'
)