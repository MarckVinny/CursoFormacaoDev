
const produtoFragil = false
const produtoAltoCusto = true
console.log(
    '\nconst produtoFragil =', produtoFragil,
    '\nconst produtoAltoCusto =', produtoAltoCusto,
    '\n'
)

console.log('produtoFragil && produtoAltoCusto', produtoFragil && produtoAltoCusto)
console.log('produtoFragil || produtoAltoCusto', produtoFragil || produtoAltoCusto)
console.log('produtoFragil != produtoAltoCusto', produtoFragil != produtoAltoCusto)
console.log('!produtoFragil', !produtoFragil)

//! Nunca usar o & e o | sozinhos pois fazem os cálculos bit a bit
//! dando como resposta 0 ou um valor diferente de 0
// Em javascript 0 significa false
// Em javascript qualquer numero != 0 significa true

// truque: usando a negação lógica '!!' duas vezes
// afirmamos o resultado para true ou false
//! serve para saber se uma variável é true ou false
console.log('\ntruque...')
console.log('!false', !false)
console.log('!!false', !!false)
console.log('!0', !0)
console.log('!!0', !!0)
console.log('!0.0001', !0.0001)
console.log('!!0.0001', !!0.0001)

