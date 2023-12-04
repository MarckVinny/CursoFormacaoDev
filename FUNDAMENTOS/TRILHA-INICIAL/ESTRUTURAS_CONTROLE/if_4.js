const nota = 9.8
const bomComportamento = true

// Se a nota for maior ou igual a 7 E tem bom comportamento
// if (nota >= 7 && bomComportamento)
//     console.log('Parabéns!!!')

// O exemplo de cima também pode ser escrito assim
//! Mas não é indicado usar ifs encadeados
if (nota >= 7)
    if (bomComportamento)
        console.log('Parabéns!!!')

// Também pode ser escrito desta forma
//todo Encontrado mais facilmente desta forma
//todo dentro de blocos de código.
if (nota >= 7) {
    if (bomComportamento) {
        console.log('Parabéns!!!')
    }
}