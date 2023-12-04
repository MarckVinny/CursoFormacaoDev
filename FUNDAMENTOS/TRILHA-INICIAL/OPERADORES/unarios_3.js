console.log(!!true)
console.log(!!false)
console.log(!!0)
console.log(!!0.000001)

// Também podemos ter true ou false em Strings
// Usando dupla negação lógica
console.log(!!'Marcos')   // se tem caracteres é TRUE
console.log(!!'     ')   // se tem espaços em branco é TRUE

// O método .trim() retira os espaços em branco do inicio e do final (menos do meio)
console.log(!!'     '.trim())   // se está vazio é FALSE
console.log(!!'  Marcos Vinicius   '.trim())   // se tem caracteres é TRUE
console.log(!!'')   // se está vazio é FALSE