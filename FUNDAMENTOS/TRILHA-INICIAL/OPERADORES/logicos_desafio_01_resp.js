//! RESPOSTA DESAFIO LÓGICO #01

// O aluno faltou 18 vezes em um total de 223 aulas no ano.
const totalAulas = 223
const faltas = 18

// frequência de 80%
// 100% = 1
const frequencia = Math.round((1 - faltas / totalAulas) * 100)

// frequência de 80%
const temFrequenciaSuficiente = frequencia >= 80

// Notas: 5.8, 8.1 e 6.9
const nota1 = 5.8
const nota2 = 8.1
const nota3 = 6.9

// Média
const media = (nota1 + nota2 + nota3) / 3

// Média maior ou igual a 7
const temMediaSuficiente = Math.round(media) >= 7

// O aluno foi aprovado?
aprovado = temFrequenciaSuficiente && temMediaSuficiente

//! Dica: o problema possui operações lógicas, relacionais e aritméticas.

// Crie um algoritmo para:
// - Mostrar a frequência do aluno(usando valores entre 0 e 1),
//   onde 0 faltou todas as aulas e 1 assistiu todas as aulas;
// - Mostrar a Média do aluno;
// - Calcular se o aluno foi aprovado?

console.log(
    '\nO aluno possui as notas:', nota1 + ',', nota2, 'e', nota3 + '.',
    '\nPossui a Média:', media.toFixed(2) + '.',
    '\nPossui', faltas, 'faltas.',
    '\nFrequentou', frequencia + '% das aulas.',
    '\n\nO aluno está aprovado?',
    '\nR:', aprovado
)