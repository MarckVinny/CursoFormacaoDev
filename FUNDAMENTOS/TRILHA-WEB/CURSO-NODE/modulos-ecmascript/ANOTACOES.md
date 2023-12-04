# Sumário

- [MÓDULOS ECMAScript](#módulos-ecmascript)
  - [Habilitando Suporte a Módulos ESM no Node.js](#habilitando-suporte-a-módulos-esm-no-nodejs)
  - [Criando o Módulo Calculo v1](#criando-o-módulo-calculo-v1)
  - [Importando o Módulo Calculo v1](#importando-o-módulo-calculo-v1)
  - [Importação utilizando a Sintaxe Destructuring](#importação-utilizando-a-sintaxe-destructuring)
    - [Criando o Módulo Calculo v2](#criando-o-módulo-calculo-v2)
    - [Importando o Módulo Calculo v2](#importando-o-módulo-calculo-v2)
  - [Calculadora v3](#calculadora-v3)
    - [Criando o Módulo Cálculos Básicos v3](#criando-o-módulo-cálculos-básicos-v3)
    - [Criando o Módulo Calculos Complementares v3](#criando-o-módulo-cálculos-complementares-v3)
  - [Cozinha Modular](#cozinha-modular)
    - [Exemplo I - Criando os Módulos](#exemplo-i---criando-os-módulos)
      - [Criando o Módulo da pasta `cozinha`](#criando-o-módulo-da-pasta-de-cozinha)
      - [Importando o Módulo da pasta `cozinha`](#importando-o-módulo-da-pasta-cozinha)
    - [Criando o Módulo Receita](#criando-o-módulo-receita)
    - [Importando o Módulo Receita](#importando-o-módulo-receita)
    - [Criando o Módulo Refeição](#criando-o-módulo-refeição)
    - [Inicializando o Módulo Refeição](#inicializando-o-módulo-refeição)
    - [Módulo Log - Quando o código de um Módulo é executado](#módulo-log---quando-o-código-de-um-módulo-é-executado)
    - [Import Condicional - Importando um Módulo condicionalmente](#import-condicional---importando-um-m%C3%B3dulo-condicionalmente)

___

## MÓDULOS ECMAScript

Os ***módulos ECMAScript*** são uma parte nativa da especificação ECMAScript *(a especificação que define a linguagem JavaScript)*. Eles foram introduzidos na versão ***ECMAScript 6 (ES6)*** como uma forma padrão de trabalhar com módulos em JavaScript. Os módulos ESM são amplamente utilizados em aplicações *front-end* modernas, onde o código JavaScript é executado em navegadores.  
Principais características:

- ***Exportação:***  
As funcionalidades são explicitamente exportadas usando as palavras-chave ***"export"*** e ***"export default"***.  

- ***Importação:***  
Para usar funcionalidades exportadas de outros arquivos, é necessário utilizar as palavras-chave ***"import"*** e ***"from"***.  

- ***Ambiente de execução:***  
Os módulos ESM são nativamente suportados por navegadores modernos, mas também podem ser utilizados em ambientes de execução como Node.js, desde que seja habilitado o suporte a módulos ESM.  

[^ Sumário ^](#sumário)

### Habilitando Suporte a Módulos ESM no Node.js

O `npm init` permite que você crie um novo arquivo `package.json` interativamente, onde você precisará fornecer informações sobre o projeto como: *nome, versão, descrição, autor* e outras configurações básicas.

Siga os passos abaixo para criar o `package.json` via terminal:

- ***Abra o terminal:***  
Abra o terminal ou linha de comando no seu sistema operacional.  

- ***Navegue para o diretório do projeto:***  
Use o comando `cd` para navegar para o diretório raiz ou do módulo do seu projeto, onde você deseja criar o arquivo `package.json`.

- ***Execute o comando npm init:***  
Digite o seguinte comando no terminal e pressione Enter:

    ```bash
    npm init
    ```

- ***Responda as perguntas interativas:***  
O `npm init` iniciará um assistente interativo que fará algumas perguntas sobre o seu projeto. Algumas das perguntas podem ter valores padrão, que você pode aceitar pressionando `Enter` ou pode digitar suas próprias respostas. As informações fornecidas serão usadas para preencher o conteúdo do `package.json`.

- ***Finalize o processo:***  
Continue respondendo às perguntas do assistente até que todas sejam concluídas. No final, o `npm init` exibirá um resumo das informações que você forneceu e perguntará se deseja confirmar a criação do `package.json`. Digite `yes` e pressione `Enter` para confirmar.  
  - ***Adicione a configuração `"type"` no arquivo `package.json`:***  
No diretório raiz do seu projeto ou no módulo, abra o arquivo `package.json` com um editor de texto ou utilize o comando no terminal `"echo"` para adicionar a configuração `"type"` com o valor `"module"` dentro do `packege.json`.  

    ```bash
    echo '{ "type": "module" }' > package.json
    ```

    ```json
    // package.json

    {
        "name": "modulos-ecmascript",
        "version": "1.0.0",
        "description": "Módulos ECMAScript - Curso Node.js",
        "main": "index.js",
    >>> "type": "module",
        ...
    }
    ```

Após a confirmação, o arquivo `package.json` será criado no diretório do seu projeto ou módulo com as informações que você forneceu durante o processo. Você pode, posteriormente, editar manualmente o arquivo `package.json` para adicionar mais informações sobre o seu projeto, como dependências, scripts personalizados e outras configurações específicas.  

[^ Sumário ^](#sumário)

### Criando o Módulo Calculo v1

Dentro de `calculadora-modulo` crie outra pasta `versao1` e dentro dela crie o aquivo do módulo `calculo.js`.

```js
// calculo.js

export default {
    texto: 'Sou o Módulo Calculo v1!',
    soma: function (a, b) {
        return a + b
    },
    sub: function (a, b) {
        return a - b
    }
} }
}
```

No arquivo acima, estamos utilizando o comando `export default` que significa exportar por padrão para exportar o `Objeto` contendo as chaves *(texto, soma e sub)* com seus respectivos valores *(String, Function e Function)*.  

[^ Sumário ^](#sumário)

### Importando o Módulo Calculo v1

Dentro de `calculadora-modulo` crie outra pasta `versao1` e dentro dela crie o aquivo do Código Principal `index.js`.

```js
// index.js


import calculos from "./calculo.js";

let x, y
x = 10
y = 72

console.log(calculos.texto)
console.log(calculos.soma(x, y))
console.log(calculos.sub(x, y))
```

Acima, estamos importando através do comando `import from` que importado de. Que está importando o `Objeto` do Módulo e atribuindo à variável `calculos`.  
Depois criamos as valiáveis x e y através de `let x, y` e logo em seguida atribuímos seus valores `10, 72`.  
Mais abaixo, chamamos os valores das respectivas chaves nos `console.log()`:  

- Apresentando o conteúdo de `texto` String;
- Realizando a soma `soma` de `x` e `y`;
- Realizando a subtração `sub` de `x` e `y`.

[^ Sumário ^](#sumário)

### Importação utilizando a Sintaxe Destructuring

Para poder utilizar a importação via destructuring, o Módulo precisa que cada *(função, objeto, constante, variável, etc)* seja declarada fora do `Objeto` da exportação padrão `export default` e contenha a palavra-chave `export` declarada antes de cada um, tendo assim uma ***Exportação Nomeada***.  

#### Criando o Módulo Calculo v2

Dentro de `calculadora-modulo` crie outra pasta `versao2` e dentro dela crie o aquivo do módulo `calculo.js`.

```js
// calculo.js

export const texto = 'Sou o Módulo Calculo v1!'

export function soma(a, b) {
    return a + b
}

export function sub(a, b) {
    return a - b
}

export default { texto, soma, sub }

```

[^ Sumário ^](#sumário)

### Importando o Módulo Calculo v2

Dentro de `calculadora-modulo` crie outra pasta `versao2` e dentro dela crie o aquivo do Código Principal `index.js`.

```js
// index.js

import calculos from './calculo.js'              // utilizando variável "export default"
import { texto, soma, sub } from './calculo.js'  // utilizando destructuring "export"

let x, y
x = 10
y = 72

// utilizando a variável
console.log(calculos.texto)
console.log(calculos.soma(x, y))
console.log(calculos.sub(x, y))

// utilizando destructuring
console.log(texto)
console.log(soma(x, y))
console.log(sub(x, y))

```

[^ Sumário ^](#sumário)

### Calculadora v3

Nesta calculadora, iremos utilizar uma abordagem bem similar ao Módulo v4 do `modulos-node` sendo que haverá uma pequena diferença na hora de importar utilizando destructuring, pois, teremos uma variável conflitante e para resolver isso de forma muito simples no ECMAScript, iremos criar um apelido para a variável utilizando o comando `as` que veremos nos códigos a seguir.  
Mas primeiro, devemos criar uma nova pasta `versao3` dentro de `calculadora-modulo` dentro de `modulo-ecmascript`.

#### Criando o Módulo Cálculos Básicos v3

```js
// calculosBasicos.js

export const texto = 'Sou o módulo calculoBasico'

export function soma(a, b) {
    return a + b
}

export function sub(a, b) {
    return a - b
}

// Recebendo o valor da constante 'info' na chave 'texto'
export default {
    texto,
    soma,
    sub
}

```

No código acima, podemos notar que antes da constante e das funções existe a palavra-chave `export`, isso possibilita a utilização do destructuring na importação.  
Ao final temos `export default` que exporta por padrão um `Objeto` contendo a constante e as funções, isso possibilita a importação utilizando uma variável para conter o conteúdo do `Objeto`.  

[^ Sumário ^](#sumário)

#### Criando o Módulo Cálculos Complementares v3

```js
// calculosComplementares.js

export const texto = 'Sou o módulo calculoComplementar'

export function pot(a, b) {
    return a ** b   // calcula a potencia de 'a' elevado a 'b'
}

export function resto(a, b) {
    return a % b
}

export default { texto, pot, resto }

```

```js
// calculosDivisao.js

import { resto } from './calculosComplementares.js'

function div(a, b) {
    return a / b
}

export default function textoDivisao(a, b) {
    return `A Divisão de ${a} por ${b} é ${div(a, b).toFixed(2)} e o Resto é ${resto(a, b)}`
}

```

No Módulo Divisão temos duas diferenças que não temos nos outros Módulos, estamos fazendo a importação da função `resto()` de `calculosComplementares` utilizando a sintaxe destructuring e não estamos exportando a função `div()` pois a mesma só pode ser usada dentro deste Módulo.  
Pra finalizar, estamos exportando por padrão `export default` a função `testoDivisao()` que deverá ser importada através de uma variável.  

#### Importando os Módulos Cálculos Básicos, Cálculos Complementares e Texto Divisão

```js
// index.js


import { soma, sub, texto } from './calculosBasicos.js'
import {texto as texto2, pot, resto} from './calculosComplementares.js'   // Utilizando a palavra-chave "as" dá um apelido para a variável
import textoDivisao  from './calculosDivisao.js'

let x, y
x = 20
y = 3

console.log(texto)
console.log(`${x} + ${y} =`, soma(x, y))
console.log(`${x} - ${y} =`, sub(x, y))
console.log();
console.log(texto2)
console.log(`A potência de ${x} elevado a ${y} (${x}^${y}) =`, pot(x, y))
console.log(`O Resto de ${x} / ${y} =`, resto(x, y))
console.log(textoDivisao(x,y))

```

Aqui, podemos ver o que foi falado no inicio, o conflito entre duas variáveis `texto`, uma sendo importada de `calculosBasicos.js` e a outra de `calculosComplementares.js`.  
Para resolver esse conflito e apresentar os textos corretos de cada Módulo, utilizamos a palavra-chave `as` para dar o apelido `texto2` para a variável `texto` de `calculosComplementares.js`.  

## COZINHA MODULAR

### Exemplo I - Criando os Módulos

Criaremos o Módulo `acoesCozinhar.js` assim como temos feitos com os anteriores, declarando as funções fora e exportando o nome das funções dentro de `export default = {}`.

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

export default {
    cozinhar, assar, ferver, cortar, servir
}
```  

Agora criaremos um Módulo que conterá uma Lista de Alimentos, para isso vamos criar o arquivo `alimentos.js` e dentro vamos criar um array `[]` contendo os alimentos e o exportaremos diretamente através do `export.`.  

```js
// alimentos.js

//array - lista de alimentos
export const alimentos = ['Feijão', 'Arroz', 'Macarrão', 'Legumes', 'Bolo']
```

[^ Sumário ^](#sumário)

### Criando o Módulo da pasta de COZINHA

Agora que iremos criar nosso Módulo de Módulos, agora que temos nossos dois módulos dentro da pasta cozinha, temos que exporta-los para que possamos utilizar seus conteúdos de uma forma melhor sem que o caminho relativo fique muito grande.  
O procedimento é igual ao que já fazemos:

- `index.js` Crie um arquivo dentro da pasta que contém os módulos *(em nosso caso é a pasta `cozinha`)*;  

- Importe cada Módulo existente na referida pasta utilizando a ***sintaxe Destructuring*** *(em nosso caso iremos utilizar no `array alimentos`)*;  

- `export default { }` Exporta cada Módulo impontado;  

- Dentro da exportação dos Módulos, iremos extrair os elementos do objeto `acoesCozinhar` e copiar para dentro do módulo que iremos exportar para acessa-los diretamente do Módulo Cozinha.  
  - `...acoesCozinhar` Extrai e copia todos os elementos para dentro do módulo. Os ***( ... )*** serve para extrair e copiar.

```js
// index.js        Módulo Cozinha

import acoesCozinhar from './acoesCozinhar.js'
import { alimentos } from './alimentos.js'

export default {
...acoesCozinhar, alimentos
}
```

Com essa abordagem, exportamos e disponibilizamos todos os módulos de uma pasta em um único objeto utilizando apenas um importe.

[^ Sumário ^](#sumário)

### Importando o Módulo da pasta `cozinha`

No ***ECMAScript*** diferentemente do ***CommonJS*** do ***Node.js***, precisamos dar o caminho completo até o `index.js` do Módulo para importar o objeto contendo todos os elementos de todos os Módulos.  

```js
// index.js      Código Principal

import cozinha from './cozinha/index.js'

console.log('\nMódulos importados da pasta Cozinha')
console.log('cozinha.cortar(cozinha.alimentos[3])')
console.log(cozinha.cortar(cozinha.alimentos[3]))
```

```bash
// saída no console

Módulos importados da pasta Cozinha
cozinha.cortar(cozinha.alimentos[3])
Cortando Legumes
```

> ***DICA:** Mas se a importação for individual utilizando o caminho relativo de cada Módulo, somente os elementos daquele Módulo estará disponível.*  

No CommonJS (Node.js) quando importamos uma pasta, só informamos o caminho da pasta e isso já é o bastante, pois o Node reconhece o ***index.js*** automaticamente.  
Já no ECMAScrip isso não acontece e com isso não é obrigatório conter um arquivo index contendo os Módulos, com isso podemos ter qualquer nome no arquivo de módulos, como por exemplo `principal.js` ao invés de `index.js`.  

```js
// index.js      Código Principal

import cozinha from './cozinha/principal.js'

console.log('\nMódulos importados da pasta Cozinha')
console.log('cozinha.cortar(cozinha.alimentos[3])')
console.log(cozinha.cortar(cozinha.alimentos[3]))
```

```bash
// saída no console

Módulos importados da pasta Cozinha
cozinha.cortar(cozinha.alimentos[3])
Cortando Legumes
```

[^ Sumário ^](#sumário)

### Criando o Módulo Receita

Dentro da pasta Cozinha Modular `cozinha-modular` iremos criar um novo Módulo chamado `receita.js`, nele iremos definir uma estrutura para fazermos uma ***receita*** utilizando os Módulos `acoesCozinhar` e `alimentos` que estão dentro do módulos `cozinha`.  

Agora que o arquivo já foi criado, iremos definir as funções do Módulo. Esta Função `function` receberá por parâmetro ***um ingrediente e duas ações*** `(ingredientes, acao1, acao2)`, a seguir, veremos o que cada parâmetro representa:  

- `export default` Exporta a Função que está sendo criada;
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

export default function(ingredientes, acao1, acao2){
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

### Importando o Módulo Receita

Para realizar-mos a importação, faremos como já estamos acostumados dentro de `index.js` usaremos:

- `import` palavra-chave para importar;
- `receita` Nome da constante;
- `from` palavra-chave que significa de onde está sendo importado;
- `'./receita.js'` Caminho onde se encontra o Módulo.

Para chamar a Função do Módulo Receita e criar uma receita, utilizaremos da seguinte maneira:

- `console.log` Onde será mostrado a saída da Função na tela;
- `'\nMódulo Receita\n'` String que Mostrará o texto ***Módulo Receita*** contendo uma quebra de linha '\n' no inicio e no final;
- `receita` Invoca a Função através da constante criada;
- `(['Legumes', 'Carne'], cozinha.cortar, cozinha.assar)` Parâmetros da Função do ***Módulo Receita***;
  - `['Legumes', 'Carne']` Array, lista de ingredientes do ***Módulo Cozinha***;
  - `cozinha.cortar` Ação1, ação do ***Módulo Cozinha***;
  - `cozinha.assar` Ação2, ação do ***Módulo Cozinha***;

```js
// index.js      Código Principal

import cozinha from './cozinha/principal.js'
import receita from './receita.js'

console.log('\nMódulo Receitas\n' + receita(['Legumes', 'Carne'], cozinha.cortar, cozinha.assar))

```

```bash
// saída no console

Módulo Receitas
Cortando Legumes
Assando Legumes
Cortando Carne
Assando Carne
Acabou!!!
```

[^ Sumário ^](#sumário)

### Criando o Módulo Refeição

Neste exemplo, iremos criar uma Função `refeicao.js` que irá retornar um `console.log()` que exibirá uma mensagem `'Na refeição X, vou comer ...'` alguns alimentos.  
Esta Função será definida dentro deste arquivo e o mesmo só conterá esta Função, semelhante como foi feito no ***Módulo Receita***.  
Exportaremos por padrão `export default` uma Função `function` que receberá por parâmetro uma refeição `(refeicao,` e alguns alimentos `...alimentos`, note que foi utilizado a ***sintaxe spread*** do *(Spread Operator, Rest Operator)* que será utilizado esses `...` agrupa os demais parâmetros que vem depois do parâmero `refeicao`, para não ser preciso passar um ***array*** para esta Função.  
Logo depois iremos iniciar o ***Bloco de Código*** `{ }` que conterá um console.log com uma ***Template String*** ``{console.log(`Na refeição ${refeicao} vou comer ${alimentos}`)}``.  

> ***Spread syntax ( ... ) - "Propagação"***  
A sintaxe spread ***( ... )*** permite que um iterável, como uma matriz ou string, seja expandido em locais onde zero ou mais argumentos *(para chamadas de função)* ou elementos *(para literais de matriz)* são esperados.  
Em um literal de objeto, a sintaxe de propagação enumera as propriedades de um objeto e adiciona os pares chave-valor ao objeto que está sendo criado.  
>
> A sintaxe de propagação ***"Spread"*** se parece exatamente com a sintaxe de descanso ***'Rest'***.  
De certa forma, a sintaxe spread é o oposto da sintaxe rest. A sintaxe spread ***"expande"*** uma matriz em seus elementos, enquanto a sintaxe rest coleta vários elementos e os ***"condensa"*** em um único elemento.

A seguir, teremos os passos para definir esta Função:  

- `export default` Exporta or padrão a Função que está sendo criada;
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

export default function (refeicao, ...alimentos) {
    console.log(`Na refeição ${refeicao} vou comer ${alimentos}`)
}
```

[^ Sumário ^](#sumário)

### Inicializando o Módulo Refeição

Com esta sintaxe, inicializamos a Função de forma correta na importação do Módulo, mas, será um pouco diferente a forma de passar o parâmetro da função externa, pois, teremos que criar duas variáveis a mais para poder passar os parâmetros para a função externa.
No código abaixo vemos o parâmetro `'Almoço'` sendo passado para a `Função Externa` através da Função `vouComerNoAlmoço`, assim como o parâmetro `'Jantar'` através da Função `vouComerNoJantar`.  
E passando os parâmetros `('Feijão','Arroz','Batata')` e `('Feijão','Arroz','Alface')` para a função interna `vouComer()`.

```js
// index.js

import refeicao from "./refeicao.js"

const vouComerNoAlmoco = refeicao('Almoço')
const vouComerNoJantar = refeicao('Jantar')

vouComerNoAlmoco('Feijão', ' Arroz', ' Batata')
vouComerNoJantar('Feijão', ' Arroz', ' Salada')
```

```bash
// saída console

Na refeição Almoço vou comer: Feijão, Arroz, Batata
Na refeição Jantar vou comer: Feijão, Arroz, Salada
```

[^ Sumário ^](#sumário)

### Módulo Log - Quando o Código de um Módulo é executado

Quando um Módulo é importado `import {} from ''` todo o conteúdo é guardado em cache, e mesmo que o Módulo seja importado novamente, ele não será processado uma segunda ou terceira vez, pois será pego diretamente do cache.  
Crie uma pasta chamada `log` dentro da pasta `modulos-ecmascript` e dentro de log, crie os arquivos `log.js` que será o Módulo e o arquivo `index.js` que irá importar e rodar o Módulo.  

```js
// log.js

console.log('\nEstou dentro do Módulo')
const simbolo = '!'

export const log = (info) => console.log(info + simbolo)

export default {log}
```

Acima, estamos criando um Módulo que contém:

- `console.log()` String para informar quando o Módulo é lido;
- `const simbolo` Cria uma String de uma exclamação `'!'`;
- `export const log` Cria exporta a Função `log`;
- `(info) => console.log(info + simbolo)` Arrow Function que pega a String digitada `info` e acrescenta `+` o `símbolo`;
- `export default` Esporta por padrão a Função `log`.

```js
// index.js

import {log} from './log.js'
import modulo from './log.js'

log('Ola')
modulo.log('Ola2')
```

Rodando o código acima, será visto que a mensagem *"Estou dentro do Módulo"* ela é apresentada uma única vez, pois, como o código já está salvo no cache quando foi importado no primeiro import *(utilizando a sintaxe destructuring)* não foi preciso processá-lo uma segunda vez.

```zsh
// saída console

Estou dentro do Módulo
Ola!
Ola2!
```

[^ Sumário ^](#sumário)

### Import Condicional - Importando um Módulo condicionalmente

Diferentemente do ***CommonJS*** *(Node.js)* no ***ECMAScript***, não podemos importar um Módulo dentro de um bloco de código, impossibilitando assim a ***Importação Condicional***.  
Colocando o `import` no inicio do arquivo *"Top Level"*, estamos obrigatoriamente importando esses Módulos, mas, num determinado momento podemos optar pela importação de um ***Módulo A*** ou um ***Módulo B*** e é isso que iremos ver a seguir.  
Para isso, dentro da pasta `modulos-ecmascript` crie uma pasta chamada `linguas` e dentro crie os arquivos `en.js` referente ao Módulo de inglês, `pt.js` referente ao Módulo de português e `index.js` que irá importar e rodar os Módulos.  
Dentro dos arquivos `en.js` e `pt.js` serão definidas mensagens de saudação (Bom dia, Boa tarde e Boa noite) nas duas línguas, que veremos nos códigos a seguir:  

```js
// pt.js

export default {
    dia: 'Bom dia',
    tarde: 'Boa tarde',
    noite: 'Boa noite'
}
```

```js
// en.js

export default {
    dia: 'Good morning',
    tarde: 'Good afternoon',
    noite: 'Good evening'
}
```

```js
// index.js

import pt from './pt.js'
import en from './en.js'

const lingua = 'pt'
let saudacoes

if (lingua === 'pt') {
    saudacoes = pt
} else if (lingua === 'en') {
    saudacoes = en
}

console.log()
console.log(saudacoes.dia)           
console.log(saudacoes.tarde)
console.log(saudacoes.noite)
```

Como podemos ver nos códigos acima, não foi possível importar somente o Módulo necessário quando fosse preciso como é feito no ***CommonJS*** no *(Node.js)*, a mudança mesmo ocorreu quando usamos uma condicional `if()` e `else()` para decidir quando usar uma língua ou outra dependendo da variável.  
Foi preciso fazer as importações separadas de cada Módulo em suas respectivas variáveis `pt` e `en` para assim poder realizar a escolha do Módulo de forma condicional.  
Onde se lê:

- Se `língua` for igual a `'pt'`;
- Então atribua a `saudacoes` o Módulo `'./pt.js'` (atravpés da variável `pt`);
- Senão Se língua for igual a `'en'`;
- Então atribua a `saudacoes` o Módulo `'./en.js'` (através da variável `en`).

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
