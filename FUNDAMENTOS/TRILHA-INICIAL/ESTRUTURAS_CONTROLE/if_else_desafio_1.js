// Segunda até Sexta => 8 horas
// Sábado => 4 horas
// Domingo => 0 horas

//! DESAFIO IF/ELSE
//* Passar os dias da semana por parâmetro
//* retornando a carga horária dos funcionários

// É uma boa prática criar constantes para coisas
// que não mudam: dias da semana, mes, mensagens de erro, etc.
const SEGUNDA = 'segunda'
const TERCA = 'terça'
const QUARTA = 'quarta'
const QUINTA = 'quinta'
const SEXTA = 'sexta'
const SABADO = 'sábado'
const DOMINGO = 'domingo'

const diaDaSemana = SABADO
let cargaHoraria

const eDiaUtil = diaDaSemana === SEGUNDA
    || diaDaSemana === TERCA
    || diaDaSemana === QUARTA
    || diaDaSemana === QUINTA
    || diaDaSemana === SEXTA

if (eDiaUtil) {
    cargaHoraria = 8
} else if (diaDaSemana === SABADO) {
    cargaHoraria = 4
} else {
    cargaHoraria = 0
}

console.log('A carga horária do funcionário é: ' + cargaHoraria + 'h')