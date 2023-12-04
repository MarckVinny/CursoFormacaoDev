# Sumário

- [Módulo Node-js - CommonJS](#módulo-node-js---commonjs)

- [Calculadora Modular](#calculadora-modular)

  - [Criação de Módulo Calculos versão I](#criação-de-módulo-calculos-versão-i)
    - [Sintaxe do Módulo](#sintaxe-do-módulo)
  - [Importando o Módulo Calculos no código principal versão I](#importando-o-módulo-calculos-no-código-principal-versão-i)
  - [Criação de Módulo Calculos versão II](#criação-de-módulo-calculos-versão-ii)
  - [Importando o Módulo Calculos no código principal versão II](#importando-o-módulo-calculos-no-código-principal-versão-ii)
  - [Criação de Módulo Calculos versão III](#criação-de-módulo-calculos-versão-iii)
  - [Importando o Módulo Calculos no código principal versão III](#importando-o-módulo-calculos-no-código-principal-versão-iii)
  - [Criação de Módulo Calculos versão IV](#criação-de-módulo-calculos-versão-iv)
    - [Importando Módulo dentro de outro Módulo](#importando-módulo-dentro-de-outro-módulo)
  - [Importando o Módulo Calculos no código principal versão IV](#importando-o-módulo-calculos-no-código-principal-versão-iv)
    - [Resolvendo Elementos Conflitantes na importação de um Módulo](#resolvendo-elementos-conflitantes-na-importação-de-um-módulo)

- [COZINHA MODULAR](#cozinha-modular)

  - [Exemplo I - Criando os Módulos](#exemplo-i---criando-os-módulos)
  - [Exemplo I - Importando os Módulos](#exemplo-i---importando-os-módulos)
  - [Exemplo II - Criando os Módulos](#exemplo-ii---criando-os-módulos)
  - [Criando o Módulo da pasta COZINHA](#criando-o-módulo-da-pasta-cozinha)
  - [Criando o Módulo Receita](#criando-o-módulo-receita)
  - [Importando o Módulo Receita no Código Principal](#importando-o-módulo-receita-no-código-principal)
  - [Criando o Módulo Refeição](#criando-o-módulo-refeição)
    - [Fazendo a chamada da Função de forma literal](#fazendo-a-chamada-da-função-de-forma-literal)
    - [Chamando a Função sem passar a Refeição](#chamando-a-função-sem-passar-a-refeição)
    - [Alterando Variável de Função dentro de um Módulo](#alterando-variável-de-função-dentro-de-um-módulo)

- [MÓDULO LOG](#módulo-log)

  - [Quando o Código de um Módulo é executado](#quando-o-código-de-um-módulo-é-executado)

- [MÓDULO LINGUAS](#módulo-línguas)

  - [Require Condicional - Importando um Módulo condicionalmente](#require-condicional---importando-um-módulo-condicionalmente)

___

## Módulo Node-js - CommonJS

Os módulos Node.js são um sistema de módulos específico do ambiente de execução Node.js, que permite a organização e reutilização de código JavaScript em servidores. Ao contrário dos módulos ESM, os módulos Node.js têm um sistema de *importação/exportação* baseado em ***CommonJS***.  

Principais características:

- ***Exportação:***  
As funcionalidades são atribuídas ao objeto ***"module.exports"*** ou exportadas diretamente usando ***"exports"***.

- ***Importação:***  
Para usar funcionalidades exportadas de outros arquivos, é necessário usar a função ***"require()"***.

- ***Ambiente de execução:***  
Os módulos Node.js são específicos para o ambiente de execução do Node.js e não são nativamente suportados por navegadores.

[^ Sumário ^](#sumário)

## CALCULADORA MODULAR

Neste projeto, será criado uma calculadora simples utilizando módulos (onde estarão todas as funções da mesma) e as funções serão chamadas para dentro do projeto importando o módulo.

### Criação de Módulo Calculos versão I

Um módulo em JavaScript é basicamente um arquivo que contém código reutilizável. Ele permite que você defina funções, variáveis e outros recursos que podem ser usados em outros arquivos JavaScript.  

Para se criar um módulo no Node, é preciso seguir algumas regras que serão mostradas a seguir.  
Primeiro será preciso criar uma pasta chamada `calculadora-modular`.  
Dentro, crie outra pasta chamada `versao1` onde será criado a primeira versão da calculadora.  
Dentro desta pasta, serão criados dois arquivos:  

- `index.js` -> onde terá o código principal da calculadora, onde serão feitas as chamadas das funções.

- `calculos.js` -> que será o módulo propriamente dito, onde conterá as definições das funções que serão usadas.  

Com isso, o código principal não fica poluído e as funções ficam em outro arquivo (módulo). A seguir o conteúdo inicial dos arquivos:

```js
// index.js

let x, y
x = 10
y = 5

console.log(soma(x, y))
console.log(sub(x, y))
```

```js
// calculos.js

function soma(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}
```

O primeiro passo para criar o módulo, é utilizar o comando `module.exports`, que será responsável por expor o módulo para outros arquivos. É dentro de ***module.exports*** que serão criadas as funções (a partir do exemplo acima).  
As funções serão criadas dentro de um objeto `module.exports = {...}`, então, ***module.exports*** irá exportar todas as funções que estiverem declaradas dentro do objeto.  

[^ Sumário ^](#sumário)

#### Sintaxe do Módulo

- `module.exports` -> exporta os objetos do módulo;
- `{...}` -> objeto do módulo, onde as funções são declaradas;
- `soma:` -> nome da função;
- `function` -> função;
- `(a, b)` -> argumentos da função;
- `return a + b` -> retorno da função.

A seguir veremos como as funções acima serão declaradas.  

```js
// calculos.js

module.exports = {
    soma: function(a, b) {
        return a + b
    },
    sub: function(a, b) {
        return a - b
    }
}
```

> ***DICA:*** Qualquer coisa que for declarada dentro do módulo (constantes, variáveis, etc.) estará disponível para todos os arquivos através do módulo.

[^ Sumário ^](#sumário)

### Importando o Módulo Calculos no código principal versão I

Agora, no código principal `index.js`, você pode usar o módulo que acabou de ser criado:

Você precisa usar a função `require` para importar o módulo no novo arquivo.

Por exemplo, se você quiser usar o módulo ***calculos.js***, você pode fazer assim:

```js
// index.js

const calculos = require('./calculos');
```

Agora você pode acessar os recursos exportados pelo módulo através do objeto `calculos`.

Por exemplo, se quiser usar a função `soma` do módulo, você pode fazer assim:

- Acessamos as funções através de `calculos.`, assim podemos chamar qualquer função que foi declarada no módulo.  

- Como foi dito anteriormente, através de `calculos.texto` podemos acessar o texto texto que foi declarado no módulo.

```js
// index.js

let x, y
x = 10
y = 5

console.log(calculos.soma(x, y))
console.log(calculos.sub(x, y))
console.log(calculos.texto)
```

[^ Sumário ^](#sumário)

### Criação de Módulo Calculos versão II

Assim como foi feito anteriormente, iremos criar uma pasta 'versao2', onde iremos criar os aquivos 'index.js' que conterá o código principal e o arquivo 'calculos.js' que conterá as definições do módulo.  
Desta vez, iremos definir as funções e a variável fora do módulo, para que o mesmo não fique muito grande e iremos exportar somente o nome das funções e da variável.  
No arquivo `calculos.js`, você define as funções e variáveis que deseja exportar. Por exemplo:  

```js
// calculos.js

const texto = 'Sou o Módulo Cálculo 2'

function soma(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

// Exportando somente o nome das funções e variáveis
module.exports = {
    texto, soma, sub
}
```

Nesse exemplo, o ***módulo calculos.js*** exporta a variável `texto`, bem como as funções `soma` e `sub`.  

Depois de definir os recursos a serem exportados, você usa a sintaxe `module.exports` para exportar esses recursos. O objeto passado para ***module.exports*** contém os recursos que você deseja disponibilizar para outros arquivos JavaScript que importarem esse módulo.  

[^ Sumário ^](#sumário)

### Importando o Módulo Calculos no código principal versão II

Uma importação usando a destructuring (destruição) é uma forma de importar recursos específicos de um módulo JavaScript, atribuindo-os a variáveis separadas. A ***destructuring assignment*** "atribuição de desestruturação" é uma sintaxe que permite extrair valores de ***objetos*** ou ***arrays*** em variáveis individuais de forma concisa.  

Com a sintaxe de ***destructuring***, é possível importar apenas os elementos específicos que você precisa de um módulo. No seu caso, você pode importar as funções `soma` e `sub`, bem como a variável `texto`.  

Aqui está um exemplo de como você pode realizar a importação utilizando destructuring:  

```js
// index.js

// importando o módulo utilizando destructuring
const { texto, soma, sub } = require('./calculos.js');

let x, y
x = 10
y = 5

console.log(soma(x, y))
console.log(sub(x, y))
console.log(texto)
```

Nesse exemplo, usamos a sintaxe `{ texto, soma, sub }` para especificar os recursos que queremos importar do módulo `calculos.js`. Em seguida, usamos a função `require` para importar o módulo.  

Após a importação, podemos acessar a variável `texto` e as funções `soma` e `sub` diretamente, como se fossem definidas localmente no arquivo atual. Podemos usá-las normalmente, chamando as funções e imprimindo os resultados.

Dessa forma, o ***destructuring*** nos permite importar somente os recursos específicos que precisamos de um módulo, tornando o código mais conciso e legível.  

[^ Sumário ^](#sumário)

### Criação de Módulo Calculos versão III

Neste exemplo iremos ver uma forma que mistura a primeira e a segunda versão, para se criar um Módulo, declarar as funções e chamar no código principal.  
Essa forma tona menos verboso na hora de fazer a chamada dos objetos de cada função.  

> ***DICA:*** A diferença de se usar essa sintaxe, é que não corre o risco de esquecer de declarar o nome da *(função, variável, objeto, etc.)* dentro de ***module.exports***

Na hora de se criar o Módulo é parecido com a primeira versão, onde declaramos as funções diretamente dentro do Módulo.  
Mas na hora de chamar no código principal iriamos chamar um módulo enorme em uma constante.  
Nesta versão III, exportamos cada *(função, variável, objeto, etc.)* individualmente e chamamos no código principal somente o que iremos utilizar.  

```js
// calculos.js

// Exporta a variável 'texto' que recebe a 'string'
exports.texto = 'Sou o Módulo Cálculo 3'

// Exporta a função 'soma'
exports.soma = function(a, b) {
    return a + b
}

// Exporta a função 'sub'
exports.sub = function (a, b) {
    return a - b
}

// Exporta os Objetos 'objeto' e 'filiacao'
exports.objeto = {
    nome: 'Marcos',
    idade: 45,
    cor: 'pardo',
    filiacao: {
        pai: 'Flávio',
        mae: 'Edith'
    }
}
```

[^ Sumário ^](#sumário)

### Importando o Módulo Calculos no código principal versão III

Importando somente *(função, variável, objeto, etc.)* que serão utilizadas. No `console.log(objeto.filiacao.pai)` estamos pegando somente o valor da chave `pai` do objeto `filiacao` que está dentro do objeto `objeto`.  
Como pode ser observado, na hora de fazer a chamada/importação do Módulo, chamamos igual na versão II `const {texto, soma, sub, objeto,} = require('./calculos')`.  
Caso tivéssemos um Módulo com mais de ***1000*** *(funções, variáveis, objetos, etc.)*, estaríamos importando somente essas que estamos utilizando.

```js
// index.js

// importando o módulo utilizando destructuring
const {texto, soma, sub, objeto,} = require('./calculos')

let x, y
x = 10
y = 5

console.log(soma(x, y))
console.log(sub(x, y))
console.log(texto)
console.log(objeto.filiacao.pai)
```

[^ Sumário ^](#sumário)

### Criação de Módulo Calculos versão IV

Agora teremos mais uma forma de se criar um Módulo, a seguir criaremos dois módulos `calculosBasicos.js` e `calculosComplementares.js`.  
***Calculos Básicos*** conterá uma função `soma()`, uma função `sub()` e uma variável `texto` assim como nos outros, com a diferença que o objeto do módulo a chave `texto:` terá um valor `info`.

```js
// calculosBasicos.js

const info = 'Sou o módulo calculoBasico'

function soma(a, b) {
    return a + b
}

function  sub(a, b) {
    return a - b
}

// Recebendo o valor da constante 'info' na chave 'texto'
module.exports = {
    texto: info,
    soma,
    sub
}
```

Já em ***Calculos Complementares***, teremos a criação do Módulo como vimos antes, com a diferença que temos um calculo de potência.

```js
// calculosComplementares.js

exports.texto = 'Sou o módulo calculoComplementar'

exports.pot = function (a, b) { 
    return a**b   // calcula a potencia de 'a' elevado a 'b'
}

exports.resto = function (a, b) { 
    return a%b
}
```

[^ Sumário ^](#sumário)

### Importando Módulo dentro de outro Módulo

Agora vamos criar mais um Módulo chamado `calculosDivisão.js`, nele iremos criar uma Função `div` que fará a divisão entre os parâmetros `(a, b)` e retornará `return a / b` e esta função não estará disponível para fora do Módulo.  
Após isso, criaremos e exportaremos `exports.` a Função `textoDivisao` que receberá por parâmetro os valores `(a, b)` e retornará `return` o Template String ``A Divisão de ${a} por ${b} é ${div(a, b).toFixed(2)} e o Resto é ${resto(a,b)``, onde:

- `${a}` -> é o parâmetro "denominador";
- `${b}` -> é o parâmetro "divisor";
- `${div(a, b)}` -> é a Função de divisão;
- `.toFixed(2)` -> fixa o resultado da divisão em 2 casas decimais;
- `${resto}` -> é a Função resto que está sendo importada de outro Módulo.  

Pra finalizar, a importação de somente a ***Função resto*** do ***Módulo calculosComplementares*** `const { resto } = require("./calculosComplementares")`.

```js
// calculosDivisao.js

const { resto } = require("./calculosComplementares")

const div = function (a, b) {
    return a / b
}

exports.textoDivisao = function (a, b) {
    return `A Divisão de ${a} por ${b} é ${div(a, b).toFixed(2)} e o Resto é ${resto(a,b)}`
}
```

[^ Sumário ^](#sumário)

### Importando o Módulo Calculos no código principal versão IV

A importação no código principal, será feito como na versão I será criado uma constante que receberá o Módulo.

```js
// index.js

const basicos = require('./calculosBasicos')
const complementares = require('./calculosComplementares')

let x, y
x = 20
y = 3

console.log(basicos.texto)
console.log(`${x} + ${y} =`, basicos.soma(x, y))
console.log(`${x} - ${y} =`, basicos.sub(x, y))
console.log();
console.log(complementares.texto)
console.log(`A potência de ${x} elevado a ${y} (${x}^${y}) =`, complementares.pot(x, y))
console.log(`O Resto de ${x} / ${y} =`, complementares.resto(x, y))
```

[^ Sumário ^](#sumário)

### Resolvendo Elementos Conflitantes na importação de um Módulo

No código a seguir, estaremos resolvendo um problema que pode aparecer com frequência no dia a dia.  
Quando importamos vários Módulo no mesmo código, pode ocorrer de um ou mais elementos dos Módulos terem o mesmo nome, e isso causará conflitos no código, mas, felizmente existe algumas formas de se contornar isso.  
No código a seguir, nos Módulos ***calculosBasicos*** e ***calculosComplementares*** existe uma constante `texto` nos dois módulos causando um conflito no código.  
Um pensamento lógico seria mudar o nome em um dos Módulos, mas, isso nem sempre é possível de se fazer. Então vamos ver como resolver isso:  

```js
// index.js       Texto Conflitante

const { soma, sub, texto } = require('./calculosBasicos')
const complementares = require('./calculosComplementares')
const {pot, resto} = complementares
const textoConflitante = complementares.texto
// const textoConflitante = require('./calculosComplementares').texto
const { textoDivisao } = require('./calculosDivisao')

let x, y
x = 20
y = 3

console.log(texto)
console.log(`${x} + ${y} =`, soma(x, y))
console.log(`${x} - ${y} =`, sub(x, y))
console.log();
console.log(textoConflitante)
console.log(`A potência de ${x} elevado a ${y} (${x}^${y}) =`, pot(x, y))
console.log(`O Resto de ${x} / ${y} =`, resto(x, y))
console.log(textoDivisao(x,y))
```

Como podemos perceber, o código acima, é uma atualização do ***Código Principal***, onde pegamos a importação do ***Módulo calculosBasicos*** e utilizamos a sintaxe ***Destructuring*** para importar somente as *(funções, variáveis, objetos, etc.)* que precisamos `const { soma, sub, texto } = require('./calculosBasicos')`.  

Logo depois, importamos todo o ***Módulo calculosComplementares*** na constante ***complementares*** `const complementares = require('./calculosComplementares')`.  

Agora começamos a resolver o conflito entre os Módulos, mais uma vez utilizando a sintaxe destructuring iremos importar somente as funções `pot` e `resto` a partir da contante criada anteriormente `const {pot, resto} = complementares`.  

Agora, criaremos uma constante chamada `textoConflitante` que receberá o texto em conflito do ***Módulo calculosComplementares*** `complementares.texto`.  

Outra forma de resolver esse texto conflitante, seria, criar a constante `textoConflitante` recebendo o `texto` diretamente do require `const textoConflitante = require('./calculosComplementares').texto`, mas essa abordagem não será usada, pois, não é uma boa prática por já estar importando o Módulo na ***constante complementares***.  

Com isso, resolvemos o conflito e o código volta a funcionar sem problemas.  

[^ Sumário ^](#sumário)

## COZINHA MODULAR

### Exemplo I - Criando os Módulos

Criaremos o Módulo `acoesCozinhar.js` assim como temos feitos com os anteriores, declarando as funções fora e exportando o nome das funções dentro de `module.exports = {}`.

```js
// acoesCozinhar.js

// functions - Ações a serem realizadas 
function cozinhar(alimento){
    return `Cozinhando ${alimento}`
}

function assar(alimento){
    return `Assando ${alimento}`
}

function ferver(alimento){
    return `Fervendo ${alimento}`
}

function cortar(alimento){
    return `Cortando ${alimento}`
}

function servir(alimento){
    return `Servindo ${alimento}`
}

module.exports = {
    cozinhar, assar, ferver, cortar, servir
}
```  

Agora criaremos um Módulo que conterá uma Lista de Alimentos, para isso vamos criar o arquivo `alimentos.js` e dentro vamos criar um array [] contendo os alimentos e o exportaremos diretamente através do `exports.`.  

```js
// alimentos.js

//array - lista de alimentos
exports.alimentos = ['Feijão', 'Arroz', 'Macarrão', 'Legumes', 'Bolo']
```

[^ Sumário ^](#sumário)

### Exemplo I - Importando os Módulos

Aqui iremos importar da mesma forma que estamos fazendo, importando os Módulos através de seus caminhos relativos, utilizando ***destructuring*** para acessar diretamente a Lista de Alimentos através do 'array' `alimentos`, onde, podemos acessar o primeiro item da lista através do índice zero `[0]`.  

```js
// index.js      Código Principal

const acoes = require('./acoesCozinhar')
const {alimentos} = require('./alimentos')

console.log(acoes.cozinhar(alimentos[0]))
```

[^ Sumário ^](#sumário)

### Exemplo II - Criando os Módulos

Neste exemplo iremos abordar como criar um Módulo contendo vários módulos de uma pasta, para facilitar na importação, suponha que exista diversos módulos em uma pasta e que na hora da importação o caminho relativo fique muito grande, uma solução é criar um ***INDEX*** `index.js` contendo todos os módulos da pasta e exporta-los como um Módulo através de `module.exports = {}` e importando no Código Principal através da pasta onde estão os Módulos.

> ***DICA:*** Ao criar um index.js dentro da pasta e exportando os módulos da mesma, todos os módulos são exportados apontando somente a pasta.  

Para isso crie uma nova pasta chamada ***cozinha*** detre da pasta ***cozinha-modular***. Agora mova os módulos criados anteriormente para dentro da pasta ***cozinha***.  
Com isso, nossos caminhos relativos serão atualizados em nosso Código Principal.  

```js
// index.js      Código Principal Atualizado

const acoes = require('./cozinha/acoesCozinhar')
const {alimentos} = require('./cozinha/alimentos')

console.log(acoes.cozinhar(alimentos[0]))
```

[^ Sumário ^](#sumário)

### Criando o Módulo da pasta COZINHA

Agora que iremos criar nosso Módulo de Módulos, agora que temos nossos dois módulos dentro da pasta cozinha, temos que exporta-los para que possamos utilizar seus conteúdos de uma forma melhor sem que o caminho relativo fique muito grande.  
O procedimento é igual ao que já fazemos:

- `index.js` Crie um arquivo dentro da pasta que contém os módulos *(em nosso caso é a pasta `cozinha`)*;  
- Importe cada Módulo existente na referida pasta utilizando a ***sintaxe Destructuring*** *(em nosso caso iremos utilizar no `array alimentos`)*;  
- `module.exports = {}` Exporta cada Módulo impontado através de .  
- Dentro da exportação dos Módulos, iremos extrair os elementos do objeto acoesCozinhar e copiar para dentro do módulo que iremos exportar para acessa-los diretamente do Módulo Cozinha.  
  - `...acoesCozinhar` Extrai e copia todos os elementos para dentro do módulo. Os ***( ... )*** serve para extrair e copiar.

```js
// index.js        Módulo Cozinha

const acoesCozinhar = require('./acoesCozinhar')
const {alimentos} = require('./alimentos')

module.exports = {
    ...acoesCozinhar, alimentos
}
```

Com essa abordagem, exportamos e disponibilizamos todos os módulos de uma pasta em um único objeto utilizando apenas um importe.

```js
// index.js      Código Principal Atualizado

const cozinha = require('./cozinha')

console.log('\nMódulos importados da pasta Cozinha')
console.log('cozinha.cortar(cozinha.alimentos[3])')
console.log(cozinha.cortar(cozinha.alimentos[3]))
```

> ***DICA:*** Quando importamos somente a pasta que contem os Módulos, o Módulo `index.js` será chamado e importará o objeto contendo todos os elementos de todos os Módulos.  
Mas as a importação for individual utilizando o caminho relativo de cada Módulo, somente os elementos daquele Módulo estará disponível.  
As duas formas de importar funcionam.

[^ Sumário ^](#sumário)

### Criando o Módulo Receita

Dentro da pasta Cozinha Modular `cozinha-modular` iremos criar um novo Módulo chamado `receita.js`, nele iremos definir uma estrutura para fazermos uma ***receita*** utilizando os Módulos `acoesCozinhar` e `alimentos` que estão dentro do módulos `cozinha`.  

Agora que o arquivo já foi criado, iremos definir as funções do Módulo. Esta Função `function` receberá por parâmetro ***um ingrediente e duas ações*** `(ingredientes, acao1, acao2)`, a seguir, veremos o que cada parâmetro representa:  

- `module.exports =` Exporta a Função que está sendo criada;
- `function` A Função propriamente dita;
- `(ingredientes,` Representa a Lista de Alimentos `array` do Módulo Cozinha;
- `acao1,` Representa a primeira ação a ser tomada do Modulo Cozinha;
- `acao2)` Representa a segunda ação a ser tomada do Modulo Cozinha;
- `{` Abertura do bloco de código da Função;
  - `let retorno =` -> Variável que irá guardar todas as informações, e está sendo iniciada com uma String vazia `''`.  
  - Depois será criado um Laço `for of` que veremos a seguir:  
  - `for` para cada `(let ingrediente` ingrediente `of ingredientes)` da lista de ingredientes, faça alguma coisa;
    - `{` Abertura do bloco de código do Laço For;
      - `retorno +=` concatene na variável retorno *(usando o operador de ***atribuição aditiva*** `+=`)* `acao1(ingrediente)` à ***ação1*** recebendo o ***ingrediente*** por parâmetro.
      - `retorno +=` concatene na variável retorno `acao2(ingrediente)` à ***ação2*** recebendo o ***ingrediente*** por parâmetro.
    - `}` Fechamento do bloco de código do Laço For;
    - `retorno +=` Fora do ***Laço For***,  concatene na variável ***retorno*** a String `'Acabou!!!'`;
    - `return` retornando o o conteúdo da variável `retorno`;
  - `}` Fechamento do bloco de código da Função.

Com isso o que esperamos de retorno dessa Função é, iterar sobre esse `ingredientes` e executar essas ações, por exemplo, se for colocado o ingrediente ***carne***, ação1 ***cortar*** e ação2 ***cozinhar***, o retorno esperado é: ***Cortando Carne*** e ***Cozinhando Carne***.

> ***DICA:*** Ao exportar o Módulo Receita, não estaremos exportando um objeto inteiro, mas sim, uma chave deste objeto que é a Função que acabou de ser criada.  

```js
// receita.js

module.exports = function(ingredientes, acao1, acao2){
    let retorno = ''
    for(let ingrediente of ingredientes) {
        retorno += acao1(ingrediente)
        retorno += acao2(ingrediente)
    }
    retorno += 'Acabou!!!'
    return retorno
}
```

[^ Sumário ^](#sumário)

### Importando o Módulo Receita no Código Principal

Para realizar-mos a importação, faremos como já estamos acostumados dentro de `index.js` usaremos:

- `const` Constante;
- `receita` Nome da constante;
- `=` Atribuição;
- `require` Método que importa o Módulo;
- `('./receita.js')` Caminho onde se encontra o Módulo.

Para chamar a Função do Módulo Receita e criar uma receita, utilizaremos da seguinte maneira:

- `console.log` Onde será mostrado a saída da Função na tela;
- `'\nMódulo Receita\n'` String que Mostrará o texto ***Módulo Receita*** contendo uma quebra de linha '\n' no inicio e no final;
- `receita` Invoca a Função através da constante criada;
- `(cozinha.alimentos, cozinha.cortar, cozinha.assar)` Parâmetros da Função do ***Módulo Receita***;
  - `cozinha.alimentos` Array, lista de ingredientes do ***Módulo Cozinha***;
  - `cozinha.cortar` Ação1, ação do ***Módulo Cozinha***;
  - `cozinha.assar` Ação2, ação do ***Módulo Cozinha***;

```js
// receita.js

const receita = require('./receita')
console.log('\nMódulo Receitas\n' + receita(cozinha.alimentos, cozinha.cortar, cozinha.assar))
```

> ***NOTA:*** Neste exemplo onde usamos um Laço `for of` para percorrer uma lista de alimentos e executar duas ações, se por algum motivo selecionar somente 1 item da lista `cozinha.alimentos[0]` por exemplo, o item será interpretado como um array e será dividido letra por letra, não tendo o resultado esperado.

[^ Sumário ^](#sumário)

### Criando o Módulo Refeição

Neste exemplo, iremos criar uma Função `refeicao.js` que irá retornar um `console.log()` que exibirá uma mensagem `'Na refeição X, vou comer ...'` alguns alimentos.  
Esta Função será definida dentro deste arquivo e o mesmo só conterá esta Função, semelhante como foi feito no ***Módulo Receita***.  
Iniciamos com `module.exports` que receberá `=` uma Função `function` que receberá por parâmetro uma refeição `(refeicao,` e alguns alimentos `...alimentos`, note que foi utilizado a ***sintaxe spread*** do *(Spread Operator, Rest Operator)* que será utilizado esses `...` agrupa os demais parâmetros que vem depois do parâmero `refeicao`, para não ser preciso passar um ***array*** para esta Função.  
Logo depois iremos iniciar o ***Bloco de Código*** `{ }` que conterá um console.log com uma ***Template String*** ``{console.log(`Na refeição ${refeicao} vou comer ${alimentos}`)}``.  

> ***Spread syntax ( ... ) - "Propagação"***  
A sintaxe spread ***( ... )*** permite que um iterável, como uma matriz ou string, seja expandido em locais onde zero ou mais argumentos *(para chamadas de função)* ou elementos *(para literais de matriz)* são esperados.  
Em um literal de objeto, a sintaxe de propagação enumera as propriedades de um objeto e adiciona os pares chave-valor ao objeto que está sendo criado.  
A sintaxe de propagação ***"Spread"*** se parece exatamente com a sintaxe de descanso ***'Rest'***.  
De certa forma, a sintaxe spread é o oposto da sintaxe rest. A sintaxe spread ***"expande"*** uma matriz em seus elementos, enquanto a sintaxe rest coleta vários elementos e os ***"condensa"*** em um único elemento.

A seguir, teremos os passos para definir esta Função:  

- `module.exports =` Exporta a Função que está sendo criada;
- `function` A Função propriamente dita;
- `(refeicao,` Representa a Lista de Alimentos `array` do Módulo Cozinha;
- `...` Sintaxe de propagação ***"Spread"*** agrupa os demais parâmetros que vem depois do parâmero `refeicao`;
- `alimentos)` Representa a segunda ação a ser tomada do Modulo Cozinha;
- `{` Abertura do bloco de código da Função;
  - `console.log(` Exibe a saída no terminal;
- `Na refeição ${refeicao} vou comer ${alimentos})` Template String;
- `}` Fechamento do bloco de código da Função.

```js
// refeicao.js

module.exports = function (refeicao, ...alimentos) {
    console.log(`Na refeição ${refeicao} vou comer ${alimentos}`)
}
```

[^ Sumário ^](#sumário)

#### Fazendo a chamada da Função de forma literal

```js
// index.js

//Fazendo duas chamadas Literais
const refeicao = require('./refeicao')

refeicao('Almoço', 'feijão', 'arroz', 'alface')  // chamada Almoço
refeicao('Jantar', 'feijão', 'arroz', 'batata')  // chamada Jantar
```

Com isso, teremos um pequeno problema nesta implementação que precisaremos contornar, pois, precisaremos passar o parâmetro `refeicao` para a Função manualmente e por algum motivo, gostaríamos que a `refeicao` fosse passada internamente para o Módulo inicializando a Função com um valor padrão que no caso seria `'Almoço'`.  
Uma abordagem que podemos utilizar, é criar uma ***variável global*** `let refeicao` recebendo `=` o valor `'Almoço'`.  
Com isso, podemos retirar o parâmetro `refeicao` de nossa Função:  

```js
// refeicao.js

let refeicao = 'Almoco'

module.exports = function (...alimentos) {
    console.log(`Na refeição ${refeicao} vou comer: ${alimentos}`)
}
```

[^ Sumário ^](#sumário)

#### Chamando a Função sem passar a Refeição

```js
// index.js

const refeicao = require('./refeicao')

refeicao('feijão', 'arroz', 'alface')  // chamada Almoço
refeicao('feijão', 'arroz', 'batata')  // chamada Jantar
```

Mas com isso surgiu un novo problema, não é possível alterar o valor da variável, agora todas as duas saídas a Refeição aparece como sendo ***"Almoço"***, pois, foi definida como valor padrão.  
Mas, o resultado que esperamos é que a primeira saída seja referente ao Almoço e a segunda seja referente ao Jantar.  
Para isso, iremos usar outra abordagem:  

- `refeicao:` Primeiro vamos retirar a variável de fora do Módulo e passá-la para dentro como uma ***chave do objeto***;
- `'Almoço',` Depois vamos setar seu valor para o padrão que queremos;
- `vouComer:` Por último, vamos adicionar a Função.
- ``function (...alimentos) {console.log(`Na refeição ${refeicao} vou comer: ${alimentos}`)}`` Com seu valor *(que era nossa Função)*.  

```js
// refeicao.js

module.exports = {
    refeicao: 'Almoço',
    vouComer: function (...alimentos) {
    console.log(`Na refeição ${this.refeicao} vou comer: ${alimentos}`)
    }
}
```

Com esta sintaxe, estaremos exportando um Objeto contendo duas chaves:

- A chave `refeicao:` contendo o valor padrão de nossa variável `'Almoço'`;
- E a chave `vouComer:` contendo a Função em seu valor.  

Agora iremos fazer uma pequena modificação no INDEX para que o código não fique com palavras repetidas. Iremos alterar o nome da constante `const` de `refeicao` para `r`, assim, na chamada da Função ficará `r.vouComer('...')`.  
Nesta nova sintaxe podemos alterar o valor da constante através de `r.refeicao = 'Jantar'`, mas, com esta abordagem surge um sério problema, pois, todas as instâncias da constante na aplicação que utilizarem esta sintaxe `r`, serão alteradas e este não é o comportamento desejado.

```js
// index.js

const r = require('./refeicao')

r.vouComer('feijão', 'arroz', 'alface')    // chamada Almoço
r.refeicao = 'Jantar'                      // altera o valor da variável
r.vouComer('feijão', 'arroz', 'batata')    // chamada Jantar
```

[^ Sumário ^](#sumário)

### Alterando Variável de Função dentro de um Módulo

Agora veremos a forma correta de se alterar a variável de uma função dentro de um Módulo.  
Para isso, iremos modificar nossa Função `refeicao`:

- `module.exports =` Crie o Módulo de Exportação;
- `function` Crie a Função Externa;
- `(refeicao)` Parâmetro da Função Externa;
- `{` Abra o Bloco de Código;
  - `const vouComer =` Nome da Função Interna;
  - `function` Função Interna;
  - `(...alimentos)` Parâmetro da Função Interna que agrupa os parâmetros de alimentos;
  - `{` Abre Bloco de Código Função Interna;
    - `console.log(` Exibe a mensagem no console;
    - `Na refeição ${refeicao} vou comer: ${alimentos})` Template String;
  - `}` Fecha Bloco de Código Função Interna;
  - `return vouComer` Retorno da Função Externa, retornando a Função Interna com o parâmetro passado;
- `}` Fecha do Bloco de Código Função Externa.

Com esta sintaxe, inicializamos a variável de forma correta na importação do Módulo, podendo assim duplicar a importação e alterando a variável e modificar somente onde for necessário.  
No código abaixo vemos o parâmetro `'Almoço'` sendo passado para a `Função Externa`, assim como o parâmetro `'Jantar'`.

```js
// index.js

//todo Inicializando a Variável na Importação
const refeicao = require('./refeicao')('Almoço')
refeicao('feijão', 'arroz', 'alface')     // chamada Almoço

const refeicao2 = require('./refeicao')('Jantar')
refeicao2('feijão', 'arroz', 'batata')     // chamada Jantar
```

[^ Sumário ^](#sumário)

## MÓDULO LOG

### Quando o Código de um Módulo é executado

Quando um Módulo é importado `require('')` todo o conteúdo é guardado em cache, e mesmo que o Módulo seja importado novamente, ele não será processado uma segunda ou terceira vez, pois será pego diretamente do cache.  
Crie uma pasta chamada `log` dentro da pasta `modulos-node` e dentro de log, crie os arquivos `log.js` que será o Módulo e o arquivo `index.js` que irá importar e rodar o Módulo.  

```js
// log.js

const simbolo = '!'
console.log('Estou dentro do Módulo')

module.exports = {
    log: (info) => console.log(info + simbolo)
}
```

Acima, estamos criando um Módulo que contém:

- `const simbolo` Cria uma String de uma exclamação `'!'`;
- `console.log()` String para informar quando o Módulo é lido;
- `module.exports` Esporta a Função da chave `log:`;
- `(info) => console.log(info + simbolo)` Função Anônima que pega a String digitada `info` e acrescenta `+` o `símbolo`.

```js
// index.js

const { log } = require('./log')
const modulo = require('./log')

log('Ola')
modulo.log('Ola2')
```

Rodando o código acima, será visto que a mensagem "Estou dentro do Módulo" só é apresentada uma única vez, pois, como o código já está salvo no cache quando foi importado no primeiro require *(utilizando a sintaxe destructuring)* não foi preciso processá-lo uma segunda vez.  

[^ Sumário ^](#sumário)

## MÓDULO LÍNGUAS

### Require Condicional - Importando um Módulo condicionalmente

Neste exemplo vamos ver o ***Require Condicional*** da maneira temos feito até agora, colocando o `require()` no inicio do arquivo *"Top Level"*, estamos obrigatoriamente importando esses Módulos, mas, num determinado momento podemos optar pela importação de um ***Módulo A*** ou um ***Módulo B*** e é isso que iremos ver a seguir.  
Para isso, dentro da pasta `modulos-node` crie uma pasta chamada `linguas` e dentro crie os arquivos `en.js` referente ao Módulo de inglês, `pt.js` referente ao Módulo de português e `index.js` que irá importar e rodar os Módulos.  
Dentro dos arquivos `en.js` e `pt.js` serão definidas mensagens de saudação (Bom dia, Boa tarde e Boa noite) nas duas línguas, que veremos nos códigos a seguir:  

```js
// pt.js

module.exports={
    dia: 'Bom dia',
    tarde: 'Boa tarde',
    noite: 'Boa noite'
}
```

```js
// en.js

module.exports={
    dia: 'Good morning',
    tarde: 'Good afternoon',
    noite: 'Good evening'
}
```

```js
// index.js

const lingua = 'pt'
let saudacoes

if (lingua === 'pt') {
    saudacoes = require('./pt')
} else if(lingua === 'en'){
    saudacoes = require('./en')
}

console.log(saudacoes.dia)
console.log(saudacoes.tarde)
console.log(saudacoes.noite)
```

Como podemos ver nos códigos acima, a maneira de criar o módulo foi o mesmo que os anteriores, foi criado um `Objeto` contendo uma chave e um valor, a mudança mesmo ocorreu quando usamos uma condicional `if()` e `else()` para decidir quando usar uma língua ou outra dependendo da variável. Onde se lê:

- Se língua for igual a `'pt'`;
- Então atribua a `saudacoes` o Módulo `'./pt.js'`
- Senão Se língua for igual a `'en'`;
- Então atribua a `saudacoes` o Módulo `'./en.js'`

E logo em seguida mostrando a saída dos Módulos.

```zsh
// saída console    Módulo 'pt'

Bom dia
Boa tarde
Boa noite
```

```zsh
// saída console    Módulo 'en'

Good morning
Good afternoon
Good evening
```

[^ Sumário ^](#sumário)
