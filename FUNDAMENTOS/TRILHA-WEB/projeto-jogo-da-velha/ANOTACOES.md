
# Sumário

- [Projeto Jogo da Velha](#projeto-jogo-da-velha)
  - [Iniciando a Implementação da Lógica](#iniciando-a-implementação-da-lógica)
    - [Implementando a Classe Jogador](#implementando-a-classe-jogador)
    - [Implementando a Classe Jogo da Velha](#implementando-a-classe-jogo-da-velha)
    - [Implementando a Lógica das Jogadas](#implementando-a-lógica-das-jogadas)
      - [Classe Jogada](#classe-jogada)
      - [Método Jogar](#método-jogar)
      - [Função Privada #trocarJogador()](#função-privada-trocarjogador)
      - [Função Privada #adicionar()](#função-privada-adicionar)
      - [Função Privada #jogadaValida()](#função-privada-jogadavalida)
        - [Implementando a Função #jogadaValida()](#implementando-a-função-jogadavalida)
      - [Função Privada #finalizouComEmpate()](#função-privada-finalizoucomempate)
      - [Função Privada #conquistouVitoriaComJogada()](#função-privada-conquistouvitoriacomjogada)
      - [Função Privada #processarJogada()](#função-privada-processarjogada)
      - [Método zerar()](#método-zerar)
    - [Implementando o a Classe JogadorHumano()](#implementando-o-a-classe-jogadorhumano)
    - [Implementando o a Classe JogadorAleatorio()](#implementando-o-a-classe-jogadoraleatorio)
  - [Implementando a Conexão com a Interface](#implementando-a-conexão-com-a-interface)
    - [Definindo o HTML](#definindo-o-html)
    - [Definindo o CSS](#definindo-o-css)
    - [Integrando a Interface "DOM" com o Script](#integrando-a-interface-dom-com-o-script)
    - [Cálculo de Matriz](#cálculo-de-matriz)
    - [Implementando a Classe de Iteração com a DOM](#implementando-a-classe-de-iteração-com-a-dom)
    - [Atualizando o texto de Informações](#atualizando-o-texto-de-informações)
  - [Gerando um Tabuleiro Dinâmico](#gerando-um-tabuleiro-dinâmico)
    - [Método Privado #criarTabuleiro()](#método-privado-criartabuleiro)
    - [Método Privado #criarLinhaTabuleiro()](#método-privado-criarlinhatabuleiro)
    - [Associando o valor do Input com o Tamanho do Tabuleiro](#associando-o-valor-do-input-com-o-tamanho-do-tabuleiro)

___

# Projeto Jogo da Velha

Neste projeto, iremos criar a versão inicial do Jogo da Velha tradicional similar o jogado desenhando no papel, contendo um tabuleiro 3x3 com 9 posições para se jogar, ele será implementado utilizando as tecnologias HTML e CSS para criar a Interface e o Javascript para a lógica e também será utilizado POO - Programação Orientada a Objetos.  

De início será implementada somente a lógica e ele estará funcional pelo terminal, posteriormente, será implementada a interface e tudo será conectado via POO.  

A abordagem que iremos utilizar será um pouco diferente neste projeto, vamos utilizar uma lógica muito mais voltada para POO do que foi utilizado anteriormente, então, teremos algumas Classes que irão conter toda a lógica da aplicação, e só depois que essas Classes forem implementadas, que iremos fazer a conexão com a interface.  

Esse tipo de abordagem é interessante, pois, conseguimos implementar toda a lógica da aplicação, se que esta lógica esteja atrelada "acoplada" a interface, então, criando a lógica separadamente da interface, conseguimos ter uma separação melhor das responsabilidades de cada parte do programa.  

E quando for preciso portar este projeto para React para outra sessão do Curso, a utilização desta lógica com Orientação a Objetos totalmente desacoplada da interface, irá permitir que consigamos desenvolver o Projeto em React muito mais rápido.

[^ Sumário ^](#sumário)

## Iniciando a Implementação da Lógica

Agora, dentro da pasta do projeto, crie um arquivo chamado `script.js`, é neste arquivo que iremos implementar a lógica de nossa aplicação.  

Primeiramente, iremos implementar uma Classe que irá representar os Jogadores e eles precisarão de um símbolo para que possam ser representados que no caso serão "X" e "O", mas nada impede que utilizemos outros símbolos para esses jogadores.  

[^ Sumário ^](#sumário)

### Implementando a Classe Jogador

Iniciamos criando a Classe `class` chamada `Jogador{` e dentro desta Classe, iremos criar o construtor `constructor(` que irá receber por parâmetro um `simbolo){` então, este símbolo `this.simbolo` irá receber `=` o `simbolo}}`.  

O que isso significa, significa que será criando dentro da Classe Jogador uma propriedade simbolo, e será atribuído para ela o valor que foi passado por parâmetro.

```js
// script.js

class Jogador {
  constructor(simbolo) {
    this.simbolo = simbolo
  }
}
...
```

A propriedade `simbolo` poderia ser declarada antes do construtor e seria inicializada através do `this.simbolo`, mas, como quando utilizamos o `this.` já criamos automaticamente caso não exista e inicializamos a propriedade, não utilizamos a sintaxe explicita de declarar todas as propriedades diretamente na Classe.  

[^ Sumário ^](#sumário)

### Implementando a Classe Jogo da Velha

Da mesma forma que criamos a Classe Jogador, iremos implementar a nova Classe `class` chamada `JogoDaVelha` contendo um construtor `constructor(` recebendo por parâmetro o `jogador1,` e o `jogador2)`.  

Podemos também, inicializar o `jogador1, jogador2` com valores padrão que serão utilizados caso não seja explicitado nenhum outro Jogador diferente, faremos isso, para que tenhamos uma facilidade na hora de instanciar a Aplicação.  

Para isso, ainda no construtor o jogador 1 `(jogador1` irá receber `=` um novo jogador `new Jogador(`passando por parâmetro o símbolo que será `'X'),` e o jogador 2 `jogador2` irá receber `=` um novo jogador `new Jogador(` passando por parâmetro o símbolo `'O'))`.

Depois de definirmos os valores Padrão/Default dos parâmetros para o Construtor, precisaremos criar e inicializar nossas propriedades então, `{` este Jogador 1`this.jogador1` irá receber `=` o `jogador1` passado por parâmetro e este Jogador 2 `this.jogador2` irá receber `=` o `jogador2` passado por parâmetro.  

Outra coisa que precisamos definir no Projeto é o Jogador Atual, pois, o Jogo da Velha fica alternado de Jogador a cada Jogada, com isso, iremos definir que o Jogador Atual `this.jogadorAtual` irá ser `=` o `jogador1`.  

Outra propriedade que iremos criar é o tamanho do Tabuleiro `this.tamanho` que receberá `=` o valor `3`, isso significa que será um tabuleiro 3x3 e futuramente podemos modificar essa propriedade e criar um tabuleiro maior.  

Não podemos nos esquecer de criar a propriedade Vencedor `this.vencedor` que receberá `=` o valor nulo `null`.

```js
// script.js

...
class JogoDaVelha {
  constructor(jogador1 = new Jogador('X'), jogador2 = new Jogador('O')) {
    this.jogador1 = jogador1
    this.jogador2 = jogador2
    this.jogadorAtual = jogador1
    this.tamanho = 3                // Cria a Grade ex. 3x3
    this.tabuleiro = this.#iniciarTabuleiro()
    this.vencedor = null
  }
...
}
```

Além de definir o Tamanho, também precisamos definir o Tabuleiro `this.tabuleiro` irá receber `=` o resultado de uma Função, pois para criar o Tabuleiro será preciso criar uma lógica e é preferível criar essa lógica separado, com isso iremos criar um Função privada da Classe JogoDaVelha por isso ela é iniciada por um *"hashtag"* `this.#iniciarTabuleiro()`.

Fora do escopo `{}` do Construtor iremos definir nossa Função `#iniciarTabuleiro(){`esta Função irá retornar `return` um `Array(`que terá o tamanho `this.tamanho)` que definimos na propriedade no Construtor em nossa Classe, agora vamos querer preencher `.fill(`o Array 3x3 com o número `0)` em cada uma dessas posições e fazer um MAP deste Array `.map(`recebendo por parâmetro uma posição `()` retornando `=>` um novo `Array(`com a quantidade de posições definidas em `this.tamanho)` preenchendo o Array com null `.fill(null))`.  

Com a ***Função #iniciarTabuleiro()***, iremos criar um Array de 3 posições, sendo que cada posição deste Array também será um Array de 3 posições e com isso teremos as 9 posições do Jogo da Velha.  

```js
// script.js

...
  #iniciarTabuleiro() {
    return Array(this.tamanho)
      .fill(0)
      .map(() => Array(this.tamanho).fill(null))
  }
...
```

Outra Função que iremos implementar será a Função `toString()`, esta Função só irá servir no desenvolvimento pois ela servirá apenas para exibir nosso Jogo no Terminal e não será utilizada quando a Interface for implementada.  

Neste Método `toString()` iremos transformar o Tabuleiro em uma representação de String:

Então, logo após a Função que acabamos de implementar, iremos criar o Método `toString()` então, `{` iremos criar uma variável `let` chamada `matriz` iremos armazenar `=` a transformação no Tabuleiro que será um Array de Arrays, para isso, iremos fazer um MAP deste Tabuleiro `this.tabuleiro.map(` e dentro teremos as linhas `linha` do Jogo retornando `=>` um MAP da linha `linha.map(` e teremos uma `posicao` dentro da linha que retornará `=>` se é uma posição válida `posicao` mas se for `??` um valor Nulo retornará um traço `'-'))`, pois ela está sendo inicializada com um valor nulo "***.map(() => Array(this.tamanho).fill(null))***".  

Esta lógica diz: Caso o valor seja NULL nulo retorna um traço, senão, retorna a posição.  

Continuando, após ***"posicao ?? '-')"*** iremos utilizar `.join(' '))` para unir todas as Strings da linha separando com um espaço em branco e depois, iremos unir a junção de todas as Strings utilizando `.join('\n')` para poder quebrar a linha e terminamos retornando a matriz `return matriz`

```js
// script.js

...
  toString() {
    let matriz = this.tabuleiro
      .map((linha) => linha.map((posicao) => posicao ?? '-').join(' '))
      .join('\n')
    return matriz
  }
}
```

Neste Método temos, que os conteúdos das linhas estão separados por espaço em branco " " e que as linhas estão separadas por uma quebra de linha "\n".  

Para finalizar, podemos criar uma constante `const` chamada `jogo` que receberá `=` um novo Jogo `new JogoDaVelha()` e não precisamos passar nenhum parâmetro, pois, já temos o Jogador 1 e Jogador 2 com valores Padrão.  

E para testar se o `toString()` está funcionando, podemos dar um `console.log(jogo.toString())` para que exiba no console nossa matriz com 9 traços.

```zsh
// Saída

- - -
- - -
- - -
```

[^ Sumário ^](#sumário)

### Implementando a Lógica das Jogadas

Agora estaremos implementando a ***Lógica das Jogadas***, onde, que será responsável por preencher as jogadas no Tabuleiro.  

#### Classe Jogada()

Depois da ***Classe Jogador***, vamos criar a Classe `class` chamada `Jogada{` que conterá um Construtor `constructor(`que receberá por parâmetro uma linha e uma coluna `linha, coluna)` então, `{` iremos criar e inicializar as propriedades, esta linha `this.linha` receberá `=` a `linha` passada por parâmetro e esta coluna `this.coluna` receberá `=` a `coluna}}` passada por parâmetro.  

```js
// script.js

...
class Jogada {
  constructor(linha, coluna) {
    this.linha = linha
    this.coluna = coluna
  }
}
...
```

[^ Sumário ^](#sumário)

#### Método Jogar()

Dentro da ***Classe JogoDaVelha*** e após a Função `#iniciarTabuleiro()`, iremos criar o Método `jogar(` recebendo como parâmetro uma `jogada){`, este Método inicialmente não irá conter a lógica de nossas jogadas mas sim irá exibir uma mensagem no console, `console.log(`utilizando uma Template String,`` `O Jogador`` o símbolo deste Jogador Atual `${this.jogadorAtual.simbolo} jogou em ${` aqui será preciso colocar uma coordenada da jogada, agora que a Classe Jogada foi criada, nosso Método irá receber uma Jogada como parâmetro e então podemos acessar o ``jogada.linha}, ${jogada.coluna}`}``.  

Com isso, podemos ver quem é o Jogador Atual e onde ele tentou jogar.

```js
// script.js

...
  jogar(jogada) {
    console.log(
      `O Jogador ${this.jogadorAtual.simbolo} jogou na linha ${jogada.linha} e na coluna ${jogada.coluna}`
    )
  }
...
```

Agora iremos fazer o teste de Jogada, iremos criar uma jogada com o comando no final do código `jogo.jogar(new Jogada(1, 1))` onde estaremos realizando a jogada na primeira linha da primeira coluna.  

```js
// script.js

...
const jogo = new JogoDaVelha()
jogo.jogar(new Jogada(1, 1))
console.log(jogo.toString())

...
```

```zsh
// saída no console

O Jogador X jogou na linha 1 e na coluna 1
- - -
- - -
- - -
```

Mas se realizarmos mais uma jogada como `jogo.jogar(new Jogada(1, 3))` vamos constatar que a próxima jogada também será do Jogado X, pois, o mesmo está definido como Jogador Padrão e ele é o Jogador Atual e não estamos alterando este Jogador.  

Para resolver isso, iremos criar mais uma Função Privada para resolver isso.

[^ Sumário ^](#sumário)

#### Função Privada #trocarJogador()

Dentro da Classe JogoDaVelha e logo após o Método jogar(), iremos criar a Função Privada chamada `#trocarJogador()` que irá realizar a lógica para efetuar a alternância entre os Jogadores, então, `{` este Jogador Atual `this.jogadorAtual` receberá `=` e irá verificar se o Jogador Atual `this.jogadorAtual.simbolo` é igual `===` o Jogador 1 `this.jogador1.simbolo`, se for `?`, retorna o Jogador 2 `this.jogador2` e se não for `:`, retorna o Jogador 1 `this.jogador1}`.

```js
// script.js

...
  #trocarJogador() {
    this.jogadorAtual =
      this.jogadorAtual.simbolo === this.jogador1.simbolo
        ? this.jogador2
        : this.jogador1
  }
...
```

E para que funcione corretamente, precisamos chamá-la ao final da Jogada.

```js
// script.js

...
  jogar(jogada) {
    console.log(
      ...
    )
    this.#trocarJogador()
  }
...
```

Com isso, podemos testar e verificar que agora os Jogadores são trocados a cada jogada.

```js
// script.js

...
const jogo = new JogoDaVelha()
jogo.jogar(new Jogada(1, 1))
jogo.jogar(new Jogada(1, 2))
console.log(jogo.toString())
...
```

```zsh
// saída no console

O Jogador X jogou na linha 1 e na coluna 1
O Jogador O jogou na linha 1 e na coluna 2
- - -
- - -
- - -
```

#### Função Privada #adicionar()

Agora iremos criar a Função que irá realmente alterar o Tabuleiro adicionando os símbolos X e O em suas respectivas posições.

Logo abaixo da Função #trocarJogador(), iremos criar a Função Privada `#adicionar(`irá receber como parâmetro uma `jogada){`então, iremos desestruturar essa jogada em linhas e colunas, crie uma variável `let` utilizando destructuring `{linha, coluna}` recebendo `=` a `jogada` passada por parâmetro.  

O motivo de termos feito isso, é para poder referenciar a linha e a coluna, sem precisar escrever `jogada.linha` e `jogada.coluna`.  

Agora para adicionar o elemento a jogada, vamos precisar acessar este Tabuleiro `this.tabuleiro` na posição `[linha -1]` e `[coluna -1]`, foi usada essa sintaxe pois estamos acessando um Array de Arrays.  

Assim utilizamos o `tabuleiro[linha -1]` para pegar um elemento do `this.tabuleiro` e `tabuleiro[linha -1][coluna -1]` para acessar um elemento no Array de que é representado por esse elemento `tabuleiro[linha -1]` do Tabuleiro.

> ***DICA:  
Estamos utilizando "-1" nos índices para que possamos utilizar nas jogadas (1,1), pois se não fizermos isso, teríamos que utilizar (0,0) para poder jogar na primeira linha da primeira coluna.***

E o que iremos colocar nesta posição `this.tabuleiro[linha -1][coluna -1]` irá receber `=` o símbolo `this.jogadorAtual.simbolo`.  

```js
// script.js

...
  #adicionar(jogada){
    let {linha, coluna} = jogada
    this.tabuleiro[linha -1][coluna -1] = this.jogadorAtual.simbolo
  }
...
```

Agora para que funcione corretamente, iremos retirar o `console.log()` do Método `jogar()` e no lugar colocaremos a Função que acabamos de criar `#adicionar(` recebendo o parâmetro `jogada)` passado pelo Método `jogar()`.

```js
// script.js

...
  jogar(jogada) {
    this.#adicionar(jogada)
    ...
  }
...
```

Com essas modificações podemos realizar mais um teste e verificaremos que podemos adicionar mais jogadas e que os símbolos são adicionados corretamente no tabuleiro.

```zsh
// saída no console

X O -
- X -
- - O
```

[^ Sumário ^](#sumário)

#### Função Privada #jogadaValida()

Mas apesar de estar funcionando, ainda existe um problema, pois, não estamos fazendo nenhuma verificação se a jogada é válida ou não, pois, se realizarmos uma jogada em uma posição fora do tamanho do Tabuleiro, iremos quebrar a aplicação e não é o que queremos.  

O que queremos, é que quando ocorrer uma jogada invalida, não ocorra a quebra da aplicação, mas que a jogada seja ignorada.

Agora iremos fazer algumas verificações para trabalhar com essa jogada.  

A primeira verificação que iremos fazer, será na Classe `Jogada()` e fora do escopo `{}` do Construtor, crie uma propriedade `get` chamada `valida()` então, `{` irá retornar `return` se a `linha` é maior `>` que zero `0` e `&&` a `coluna` é maior `>` que zero `0}`.  

Vamos criar também uma verificação quando for invalida, crie a propriedade `get` chamada `invalida()` então, `{` irá retornar `return` a negação da propriedade válida `!this.valida`

Pois se for retornado um valor menor que zero já irá causar a quebra da aplicação.

```js
// script.js

...
class Jogada {
  constructor(linha, coluna) {
    this.linha = linha
    this.coluna = coluna
  }
  get valida() {
    return this.linha > 0 && this.coluna > 0
  }

  get invalida() {
    return !this.valida
  }
}
...
```

[^ Sumário ^](#sumário)

#### Implementando a Função #jogadaValida()

Agora sim iremos criar nossa Função Privada dentro da Classe JogoDaVelha(), chamada `#jogadaValida(`recebendo como parâmetro uma `jogada)` então, `{` iremos fazer algumas verificações segundo a Jogada, Se `if(` a jogada for invalida `jogada.invalida)` então, `{` retorne falso`return false}`.  
Depois desta verificação básica que foi feita na Classe Jogada(), iremos criar uma variável `let` e usar o destructuring `{linha, coluna}` recebendo `=` a `jogada`, para não precisar ficar referenciando ela em nossas próximas informações.  

```js
// script.js

...
  #jogadaValida(jogada){
    if (jogada.invalida){
      return false
    }
    let {linha, coluna} = jogada
  }
...
```

Agora iremos realizar outros testes para verificar se a jogada é válida ou não:  

- Verifica se a linha e a coluna estão dentro do range (tamanho) que podemos ter de valores e isso já indica uma jogada invalida, Se `if(` a `linha` for maior `>` que este tamanho `this.tamanho` ou `||` a `coluna` for maior `>` que este tamanho `this.tamanho)`, então, `{` iremos retornar falso `return false}`.  

  ```js
  // script.js

  ...
    if(linha > this.tamanho || coluna > this.tamanho){
      return false
    }
  }
  ...
  ```

- Verificar é se a jogada não está ocupada, par isso iremos criar outra Função Privada *(que irá determinar se um campo está ou não ocupado)* chamada `#ocupado(` recebendo como parâmetro a própria `jogada)` então, `{` faremos novamente o destructuring da jogada `let {linha, coluna} = jogada`, então para saber se está ocupado, retornaremos `return` este campo `this.#campo(` recebendo como parâmetro `linha, coluna)` *(este campo representa uma posição no Tabuleiro)* verificando se é diferente de nulo `!== null}`.  

  ```js
  // script.js

  ...
    #ocupado(jogada) {
      let { linha, coluna } = jogada
      return this.#campo(linha, coluna) !== null
    }
  ...
  ```

  Agora criaremos a Função Privada `#campo(` recebendo como parâmetro uma `linha, coluna)` então, `{` retornaremos este Tabuleiro `this.tabuleiro` na posição `[linha -1][coluna -1]`.  
  Através deste campo, iremos conseguir verificar o que se tem em uma determinada posição no Tabuleiro.

  ```js
  // script.js

  ...
    #campo(linha, coluna) {
      return this.tabuleiro[linha - 1][coluna - 1]
    }
  ...
  ```

  Agora, precisamos adicionar nossa terceira verificação dento da Função Privada `#jogadaValida()`.  
  Se `if(` esta jogada posição estiver ocupada `this.#ocupado(jogada))` então, `{` retornaremos falso `return false}` por quê não será possível realizar a jogada.  

  ```js
  // script.js

  ...
  #jogadaValida(jogada) {
    ...
    if(this.#ocupado(jogada)){
      return false
    }
  }
  ...
  ```

  Nossa quarta verificação irá verificar quando houver um vencedor para que não ocorra mais nenhuma jogada, então, Se `if(` este vencedor `this.vencedor)` então, `{` retorne falso `return false}` pois será uma jogada invalida depois que já tiver definido um vencedor.  

  Mas se nada disso acontecer, iremos retornar verdadeiro `return true` significando que a ***Jogada é Válida***.

  ```js
  // script.js

  ...
  #jogadaValida(jogada) {
    ...
    if(this.vencedor){
      return false
    }
    return true
  }
  ...
  ```

> ***Observação no Código:***  
*Observando o código mais atentamente, podemos verificar que existem muitos **IFs** e nenhum **ELSE/IF**, mas, qual o motivo disso?  
O **ELSE/IF**, é uma estrutura que serve para se fazer uma análise quando se tem alguma relação entre os elementos, por exemplo, quando um aluno está (aprovado, reprovado ou de recuperação), e esses 3 resultados, são mutuamente exclusivos, então, se ele está de recuperação, ele não pode estar aprovado, não podendo estar na duas categorias.  
E em nosso código os casos não são relacionados, cada um atende a uma verificação independente.  
E como já estamos dando o retorno em cada **IF**, não é necessário utilizar o **ELSE**.*

E para terminar, iremos fazer uma verificação se a jogada é válida ou não, na Função`jogar(jogada)` iremos verificar Se `if(` esta jogada é válida `this.#jogadaValida(jogada))` então, `{` se for válida, adiciona a jogada `this.#adicionar(jogada)` e troca o jogador `this.#trocarJogador()}` Senão, `else{` exiba a mensagem `console.log('Jogada Inválida!')}`

```js
// script.js

...
  jogar(jogada) {
    if (this.#jogadaValida(jogada)) {
      this.#adicionar(jogada)
      this.#trocarJogador()
    } else {
      console.log('Jogada Inválida!')
    }
  }
...
```

Podemos realizar os testes e verificar que estão sendo feitas as verificações (se está dentro do tamanho do tabuleiro, se está ocupado, etc.) com o código a seguir podemos ver o teste de ocupado, mas podemos realizar outros testes.

```js
// script.js

...
const jogo = new JogoDaVelha()
jogo.jogar(new Jogada(1, 1))  // X
jogo.jogar(new Jogada(1, 2))  // O
jogo.jogar(new Jogada(2, 2))  // X
jogo.jogar(new Jogada(1, 1))  // O
console.log(jogo.toString())
...
```

```zsh
// saída no console

Jogada Inválida!
X O -
- X -
- - -
```

[^ Sumário ^](#sumário)

#### Função Privada #finalizouComEmpate()

Sabemos que um empate no Jogo da Velha, ocorre quando não há mais nenhum espaço vazio no Tabuleiro, e é isso que iremos fazer, verificar se existe ou não espaços vazios.  

Antes da Função toString(), Iremos criar a Função Privada `#finalizouComEmpate()` então, `{` crie uma variável `let` chamada `espacosVazios` que receberá `=` este Tabuleiro `this.tabuleiro`, neste ponto, iremos fazer um pequeno teste para ver o que a Função está retornando.  

Então, colocaremos um `console.log(espacosVazios())` para saber o que estamos recebendo nesta variável e executaremos o comando `jogo.finalizouComEmpate()` lembrando de colocar a Função Pública pra que o comando funcione *(retirando o #)*, então teremos o resultado a seguir:  

```js
// script.js

...
  #finalizouComEmpate(){
    let espacosVazios = this.tabuleiro
    console.log(espacosVazios)
  }
...
```

```zsh
// saída no console

[ [ 'X', 'O', null ], [ null, 'X', null ], [ null, null, null ] ]
```

Como podemos ver acima, nosso Tabuleiro é um Array contendo 3 Arrays, agora iremos utilizar o Método `.flat()` para poder extrair os Arrays de dentro do Array e transformar em um único Array.  

```js
// script.js

...
  #finalizouComEmpate(){
    let espacosVazios = this.tabuleiro.flat()
    console.log(espacosVazios)
  }
...
```

```zsh
// saída no console

[
  'X',  'O',  null,
  null, 'X',  null,
  null, null, null
]
```

Como podemos ver acima, agora só existe um Array contendo todas as posições.  

Agora, iremos acrescentar um filtro `.filter(` para obter apenas os espaços vazios `null` do Array, então, tetemos um `campo` que irá retornar `=>` se o `campo` é igual a nulo `=== null)}`.  

Executando mais uma vez, podemos verificar que teremos um Array contendo somente os espaços vazios `null`.

```js
// script.js

...
  #finalizouComEmpate() {
    let espacosVazios = this.tabuleiro
    .flat()
    .filter((campo) => campo === null)
    console.log(espacosVazios)
  }
...
```

```zsh
// saída no console

[ null, null, null, null, null, null ]
```

Agora pra poder testar nossa Função, precisaremos preencher o Tabuleiro para que possamos ter um empate.

```js
// script.js

...
const jogo = new JogoDaVelha()
jogo.jogar(new Jogada(1, 1)) // X
jogo.jogar(new Jogada(1, 2)) // O
jogo.jogar(new Jogada(1, 3)) // X
jogo.jogar(new Jogada(2, 1)) // O
jogo.jogar(new Jogada(2, 3)) // X
jogo.jogar(new Jogada(2, 2)) // O
jogo.jogar(new Jogada(3, 1)) // X
jogo.jogar(new Jogada(3, 3)) // O
jogo.jogar(new Jogada(3, 2)) // X
jogo.finalizouComEmpate()
console.log(jogo.toString())
...
```

```zsh
// saída no console

[]
X O X
O O X
X X O
```

Após executar o teste, podemos verificar que o resultado é um Array vazio `[]`.  
Então, agora sabemos que haverá um empate, quando o resultado da variável `espacosVazios` for um Array vazio `[]`, e o modo que iremos verificar isso é que iremos retornar `return` o tamanho do Espaço Vazio `espacosVazio.length` igual a zero `=== 0`, isso significa que se a Função retornar verdadeiro `true`, que teve um empate.

```js
// script.js

...
  #finalizouComEmpate() {
    let espacosVazios = this.tabuleiro
    .flat()
    .filter((campo) => campo === null)
    return espacosVazios.length === 0
  }
...
```

E para testar podemos substituir o `return` por um `console.log(espacosVazios.length === 0)` tendo a saída abaixo.

```zsh
// saída no console

true
X O X
O O X
X X O
```

[^ Sumário ^](#sumário)

#### Função Privada #conquistouVitoriaComJogada()

Agora iremos definir a Função que verifica se houve Vitória Com Jogada, crie uma Função Privada `#conquistouVitoriaComJogada(` recebendo como parâmetro uma `jogada)` então, `{` faremos o destructuring da jogada `let {linha, coluna} = jogada` também usaremos o destructuring para obter os valores do Tabuleiro e do Jogador Atual `let {tabuleiro, jogadoAtual}` recebendo `=` o `this` como Objeto para evitar de ficar usando this.algumaCoisa da mesma forma que foi feito com a jogada, também precisaremos de pegar o Tamanho `let tamanho = tabuleiro.length`, também precisaremos do índices `let indices` recebendo `=` um `Array(` recebendo como parâmetro o `tamanho)` e preenchendo com zero `.fill(0)` fazendo um MAP do Array `.map((`e nesse MAP, pegando o primeiro parâmetro que é o próprio elemento do Array e ignorá-lo usando o underline `_,` e depois pegando o índice `i)` então retornamos `i + 1)`, com isso, temos os índices do Array na ***variável indices*** `}`

```js
// script.js

...
  #conquistouVitoriaComJogada(jogada) {
    let { linha, coluna } = jogada
    let { tabuleiro, jogadorAtual } = this
    let tamanho = tabuleiro.length
    let indices = Array(tamanho)
      .fill(0)
      .map((_, i) => i + 1)
  }
...
```

***Agora iniciamos as Lógicas:***  

> ***Função every():***  
*Esta Função, recebe uma Função callback() retornado "TRUE" se o teste na Função callback() for verdadeiro para todos os elementos e caso o teste seja falso "FALSE" para algum desses elementos, a Função irá retornar falso "FALSE".*

Então, a maneira que iremos utilizar esta Função para verificar se houve uma vitória em uma linha, e essa vitória será válida para qualquer uma das linhas, a ***Função every()*** fará todas essas verificações.  

***SE GANHOU EM LINHA***

A Função `every()` irá verificar se houve a vitória do `jogadorAtual.simbolo` na linha onde houve a jogada.  

Então, crie uma variável `let` chamada `ganhouEmLinha` recebendo `=` o `indices` e a Função `.every((` passando como parâmetro um `i)` retornando `=>` a verificação se este campo `this.#campo(` na linha `linha,` e na coluna `i)` se é igual ao símbolo do Jogador Atual `=== jogadorAtual.simbolo)`

```js
// script.js

...
    let ganhouEmLinha = indices.every(
      (i) => this.#campo(linha, i) === jogadorAtual.simbolo
    )
...
```

Então, o que está acontecendo, foi feito uma jogada e para verificar se houve uma vitória na linha, será verificado se todos os campos desta linha `this.#campo(linha, i)` possuem o mesmo símbolo `=== jogadorAtual.simbolo`.  

Pois, a Função `#conquistouVitoriaComJogada()` será chamada toda vez que houver uma jogada e será verificado se todos os elementos da linha tiverem essa jogada *(jogadorAtual.simbolo)*, então a variável `ganhouEmLinha` retornará verdadeiro "TRUE" caso contrário retornará falso "FALSE".  

***SE GANHOU EM COLUNA***

Agora iremos fazer a verificação de o Jogador Atual ganhou em coluna, criE uma variável `let` chamada `ganhouEmColuna` que recebe `=` o `indices` e a Função `.every((` passando como parâmetro um `i)` retornando `=>` a verificação se este campo `this.#campo(` na linha `i,` e na coluna `coluna)` se é igual ao símbolo do Jogador Atual `=== jogadorAtual.simbolo)`.

```js
// script.js

...
    let ganhouEmColuna = indices.every(
      (i) => this.#campo(i, coluna) === jogadorAtual.simbolo
    )
...
```

***SE GANHOU NA DIAGONAL `\`***

Agora iremos definir a verificação na diagonal da esquerda para a direita de cima para baixo.  

Crie uma variável `let` chamada `ganhouEmDiag1` recebendo `=` a verificação em todos os elementos que atendem ao critério `indices.every((`passando como parâmetro um `i)` retornando `=>` a verificação se este campo `this.#campo(` na linha `i,` e na coluna `i)` *(que representa a diagonal `\`)* se é igual ao símbolo do Jogador Atual `=== jogadorAtual.simbolo)`.

```js
// script.js

...
    let ganhouEmColuna = indices.every(
      (i) => this.#campo(i, i) === jogadorAtual.simbolo
    )
...
```

***SE GANHOU NA DIAGONAL `/`***

Agora iremos definir a verificação na diagonal da direita para a esquerda de cima para baixo.  

Crie uma variável `let` chamada `ganhouEmDiag2` recebendo `=` a verificação em todos os elementos que atendem ao critério `indices.every((`passando como parâmetro um `i)` retornando `=>` a verificação se este campo `this.#campo(` na linha `tamanho - i + 1,` e na coluna `i)` *(que representa a diagonal `/`)* se é igual ao símbolo do Jogador Atual `=== jogadorAtual.simbolo)`.

```js
// script.js

...
    let ganhouEmDiag2 = indices.every(
      (i) => this.#campo(tamanho - i + 1, i) === jogadorAtual.simbolo
    )
...
```

E para finalizar e verificar se Conquistou Vitória Com Jogada, vamos retornar `return` o `ganhouEmLinha` ou `||` o `ganhouEmColuna` ou `||` o `ganhouEmDiag1` ou `||` o `ganhouEmDiag2}`.  

Se qualquer uma dessas variáveis retornar verdadeiro "TRUE", pois, estamos utilizando o ***Operador Lógico OU*** e isso significa que houve uma Vitória com Jogada.

```js
// script.js

...
    return ganhouEmLinha || ganhouEmColuna || ganhouEmDiag1 || ganhouEmDiag2
  }
...
```

Agora que essas Funções foram implementadas, iremos testá-las.  

[^ Sumário ^](#sumário)

#### Função Privada #processarJogada()

Iremos pegar a lógica do Método jogar() iremos mover para dentro da Função Privada `#processarJogada()`.  

Mas, iremos modificar um pouco a lógica original, pois, iremos sair do processamento se a jogada não for válida.  

Então, Se `if` esta jogada não for válida `(!this.#jogadaValida(jogada))` *(lembrando que estamos usando a negação lógica "!" antes do "this")*, então retornaremos `return` e saímos da Função ***Processar Jogada***.

```js
// script.js

...
  #processarJogada(jogada) {
    if (!this.#jogadaValida(jogada)) return false
    ...
  }
...
```

Então, depois que adicionamos a Jogada `this.#adicionar(jogada)`, iremos verificar Se `if(` Conquistou Vitória com Jogada `this.#conquistouVitoriaComJogada(` passando como parâmetro a `jogada))` então, `{` iremos alterar o `this.vencedor` vai receber `=` o símbolo do Jogador Atual `this.jogadorAtual.simbolo`, se verdadeiro sai da Função com um retorno `return}` Senão Se `else if(` houver um empate `this.#finalizouComEmpate())` então, `{` colocaremos um traço nas jogadas restantes `this.vencedor = '-'`, se verdadeiro sai da Função com um retorno `return}` e caso não tenha Conquistado a Vitória ou Empatado, então, trocaremos o jogador `this.#trocarJogador()`.

```js
// script.js

...
  #processarJogada(jogada) {
    ...
    this.#adicionar(jogada)
    if(this.#conquistouVitoriaComJogada(jogada)){
      this.vencedor = this.jogadorAtual.simbolo
      return
    }else if(this.#finalizouComEmpate()){
      this.vencedor = '-'
      return
    }
    this.#trocarJogador()
  }
...
```

Depois iremos chamar a Função `#processarJogada()` dentro da Função `jogar(` passando como parâmetro uma `jogada)`.

```js
// script.js

...
  jogar(jogada) {
    this.#processarJogada(jogada)
  }
...
```

Estamos utilizando essa abordagem de criar uma outra Função separada para Processar a Jogada, para poder facilitar posteriormente o processamento de diversos processos.  

Agora para poder testar, precisamos fazer uma alteração no retorno Método toString().

Então, crie uma variável `let` chamada `quemVenceu` recebendo `=` este Vencedor `this.vencedor` e fazendo uma verificação para saber se mostra ou não a mensagem, então `?` se houver Vencedor `O vencedor foi o Jogador ${this.vencedor}` senão `:` mostre uma String vazia `''` e ao invés de retornar `return` somente uma matriz, teremos uma Template String contendo `` `${matriz}\n${quemVenceu}` ``

```js
// script.js

...
  toString() {
    ...
    let quemVenceu = this.vencedor
      ? `O vencedor foi o Jogador ${this.vencedor}`
      : ''
    return `${matriz}\n${quemVenceu}`
  }
...
```

[^ Sumário ^](#sumário)

#### Método zerar()

No momento podemos jogar apenas um Jogo da Velha com a lógica implementada até o momento, pois, não temos nenhuma forma de reiniciar o Jogo.  

Então, crie um Método chamado `zerar()` então, `{` moveremos o `this.tabuleiro = this.#iniciarTabuleiro()`, o `this.jogadorAtual = this.jogador1` e o `this.vencedor = null}` para dentro e já teremos o Método criado.

```js
// script.js

...
  zerar(){
    this.tabuleiro = this.#iniciarTabuleiro()
    this.jogadorAtual = this.jogador1
    this.vencedor = null
  }
...
```

***TESTANDO O MÉTODO ZERAR***

Executando o comando abaixo iremos criar um jogo que está com um vencedor e depois reiniciamos o jogo e começamos outro.

```js
// script.js

...
const jogo = new JogoDaVelha()
jogo.jogar(new Jogada(1, 1)) // X
jogo.jogar(new Jogada(1, 2)) // O
jogo.jogar(new Jogada(1, 3)) // X
jogo.jogar(new Jogada(2, 1)) // O
jogo.jogar(new Jogada(2, 3)) // X
jogo.jogar(new Jogada(2, 2)) // O
jogo.jogar(new Jogada(3, 2)) // X
jogo.jogar(new Jogada(3, 1)) // O
jogo.jogar(new Jogada(3, 3)) // X
console.log(jogo.toString())

jogo.zerar()

jogo.jogar(new Jogada(3, 1)) // X
jogo.jogar(new Jogada(3, 3)) // O
console.log(jogo.toString())
...
```

E teremos o seguinte resultado no console:

```zsh
// saída no console

X O X
O O X
O X X
O vencedor foi o Jogador X
- - -
- - -
X - O
```

Agora precisamos também realizar algumas alterações no Construtor da Classe `class JogoDaVelha`, como já movemos as propriedades *(tabuleiro, jogadorAtual e vencedor)* para o Método zerar(), vamos passar opor parâmetro a propriedade `tamanho` recebendo `=` o valor padrão `3` para o Construtor e receber o `tamanho` como parâmetro para a propriedade `tamanho`.

```js
// script.js

...
class JogoDaVelha {
  constructor(
    jogador1 = new Jogador('X'),
    jogador2 = new Jogador('O'),
    tamanho = 3
  ) {
    this.jogador1 = jogador1
    this.jogador2 = jogador2
    this.tamanho = tamanho // Cria a Grade ex. 3x3
    this.zerar()
  }
...
```

[^ Sumário ^](#sumário)

### Implementando o a Classe JogadorHumano()

Atualmente temos o jogador normal, onde duas pessoas jogam alternadamente, mas, iremos implementar um jogador humano e um jogador virtual que fará jogadas aleatórias.  

Então, iremos alterar o nome da Classe Jogador para `JogadorHumano()` e vai possuir uma nova propriedade chamada `this.humano` recebendo `=` o valor `true`.  

```js
// script.js

class JogadorHumano {
  constructor(simbolo) {
    this.simbolo = simbolo
    this.humano = true
  }
}
...
```

E iremos alterar também as chamadas no Construtor da Classe `JogoDaVelha()`.  

```js
// script.js

...
class JogoDaVelha {
  constructor(
    jogador1 = new JogadorHumano('X'),
    jogador2 = new JogadorHumano('O'),
...
```

[^ Sumário ^](#sumário)

### Implementando o a Classe JogadorAleatorio()

Crie uma classe `class` chamada `JogadorAleatorio{` ela irá conter um Construtor `constructor(` recebendo como parâmetro um `simbolo){` contendo as propriedades `this.simbolo` recebendo `=` o `simbolo` passado por parâmetro e também a propriedade `this.humano` recebendo `=` o valor `false`.  

```js
// script.js

...
class JogadorAleatorio {
  constructor(simbolo) {
    this.simbolo = simbolo
    this.humano = false
  }
}
...
```

Para se fazer uma jogada desse Jogado Aleatório, será preciso passar o Tabuleiro para ele, e ele saberá o tamanho do Tabuleiro, conseguindo assim fazer a jogada.  

Crie um Método chamado `jogar(` recebendo como parâmetro um `tabuleiro)` então, `{` precisará definir uma linha `let linha` recebendo `=` um valor aleatório qualquer `this.#aleatorio(` que estará entre `1,` e o tamanho do tabuleiro `tabuleiro.length)` e uma coluna `let coluna` recebendo `=` um valor aleatório qualquer `this.#aleatorio(` que estará entre `1,` e o tamanho do tabuleiro `tabuleiro.length)`, depois retornaremos `return` uma nova Jogada `new Jogada(` passando como parâmetro a `linha,` e a `coluna)}`.  

E caso essa jogada já esteja ocupada, a lógica que já implementamos no Jogo já fará o tratamento e tornará a jogada inválida, não se fazendo necessário a implementação desta lógica novamente.

```js
// script.js

...
  jogar(tabuleiro) {
    let linha = this.#aleatorio(1, tabuleiro.length)
    let coluna = this.#aleatorio(1, tabuleiro.length)
    return new Jogada(linha, coluna)
  }
...
```

Para gerar essa linha e essa coluna, precisaremos de um ***Número Aleatório***, então, crie uma Função Privada chamada `#aleatorio(` recebendo como parâmetro um valor `mim,` e um valor `max)` então, `{` crie uma variável `let` chamada `valor` que receberá `=` o Número Aleatório gerado pela Função `Math.random()` multiplicando o max menos o mim `*(max - min)` somando o valor do mim `+ mim` retornando `return` o valor arredondado `Math.round(valor)}` tendo somente a parte inteira do valor.

```js
// script.js

...
  #aleatorio(mim, max) {
    let valor = Math.random() * (max - mim) + mim
    return Math.round(valor)
  }
...
```

***INSERINDO O JOGADOR ALEATÓRIO NO JOGO***

Para isso, precisamos alterar o Método jogar() da Classe JogoDaVelha() e no Método `#processarJogada()` serve somente para processar um Jogador Humano, então, precisamos verificar se o Jogador Atual é um Jogador Humano, então:  

Se `if(` este Jogador Atual for Humano `this.jogadorAtual.humano)` então, `{` processa esta jogada  `this.#processarJogada(jogada)}`  

```js
// script.js

...
  jogar(jogada) {
    if (this.jogadorAtual.humano) {
      this.#processarJogada(jogada)
    }
...
```

Mas, se o Jogador Atual não for humano, crie um laço `while(` enquanto não houver um vencedor `!this.vencedor` e `&&` enquanto o Jogador Atual não for um Humano `!this.jogadorAtual.humano)` então, `{` precisaremos pegar a jogada criando uma variável `let jogada` recebendo `=` o `this.jogadorAtual.jogar(` passando como parâmetro o `this.tabuleiro)` e agora que o Jogador Virtual já sabe o tamanho do Tabuleiro, podemos processar esta jogada `this.#processarJogada(jogada)}`.

```js
// script.js

...
    while (!this.vencedor && !this.jogadorAtual.humano) {
      let jogada = this.jogadorAtual.jogar(this.tabuleiro)
      this.#processarJogada(jogada)
    }
  }
...
```

***TESTANDO O JOGADOR ALEATÓRIO***

Para isso, iremos adicionar em nosso Jogo da Velha alguns Jogadores que não serão os Jogadores padrão que temos definidos no Jogo.  

Pra isso, iremos passar como primeiro parâmetro um novo Jogador Humano passando o símbolo X `new JogadorHumano('X')` e como segundo parâmetro, passaremos o novo Jogador Aleatório com o símbolo O `new JogadorAleatorio('O')`, abaixo o comando para executar.

```js
// script.js

...
    while (!this.vencedor && !this.jogadorAtual.humano) {
      let jogada = this.jogadorAtual.jogar(this.tabuleiro)
      this.#processarJogada(jogada)
    }
  }
...
```

[^ Sumário ^](#sumário)

## Implementando a Conexão com a Interface

Agora iniciaremos a implementação da parte visual do Jogo da Velha, onde, iremos editar os arquivos index.html e estilo.css.  

[^ Sumário ^](#sumário)

### Definindo o HTML

Então, abra o arquivo `index.html` e dentro de `<body>...</body>` adicione uma tag de abertura `<h1>` para que possamos definir uma mensagem que receberá uma formatação mais tarde, `Bem Vindo ao Jogo da Velha!` e termine com uma tag de fechamento `</h1>`.  

Em seguida, teremos uma tag que servirá par mostrar algumas informações sobre o jogo *(quem está jogando, se houve alguma vitória, etc.)*, então, crie uam tag de abertura`<h2` dentro será adicionando um `id="informacoes"` que servirá para identificar esta tag `>` e inicialmente teremos a mensagem `Clique em qualquer posição para começar a Jogar.`, que será modificada posteriormente via algoritmo, terminando com a tag de fechamento `</h2>`.  

Agora iremos definir um Botão que irá inicializar um Novo Jogo, crie uma tag de abertura `<button` recebendo um `id="iniciar">` contendo o texto `Novo Jogo` terminando com a tag de fechamento `</button>` o comportamento do botão será definido em nosso arquivo `script.js`.  

Agora precisamos definir o Tabuleiro do Jogo, para isso, iremos criar uma `<div` que conterá um `id="tabuleiro">` e dentro desta DIV iremos adicionar as nove posições do Tabuleiro *(cada quadradinho onde pode ser feito uma jogada)* `<div class="posicao"></div>` terminando com a tag fechamento `</div>`.

```html
// index.html

...
<body>
  <h1>Bem Vindo ao Jogo da Velha</h1>
  <h2 id="informacoes">Clique em qualquer posição para começar a Jogar.</h2>
  <button id="iniciar">Novo Jogo</button>
  <div id="tabuleiro">
    <div class="posicao posicao-top posicao-esq"></div>
    <div class="posicao posicao-top"></div>
    <div class="posicao posicao-top posicao-dir"></div>
    <div class="posicao posicao-esq"></div>
    <div class="posicao"></div>
    <div class="posicao posicao-dir"></div>
    <div class="posicao posicao-base posicao-esq"></div>
    <div class="posicao posicao-base"></div>
    <div class="posicao posicao-base posicao-dir"></div>
  </div>
  ...
</body>
...
```

[^ Sumário ^](#sumário)

### Definindo o CSS

É aqui onde tudo começa a ganhar forma, no arquivo `estio.css` é onde iremos definir as formatações, cores, tipos e tamanhos de letras e assim por dante.

***VARIÁVEIS CSS:***  
Para definir uma variável CSS corretamente, é preciso iniciar seu nome com dois traços `--`.  

Iremos iniciar criando uma pseudo-classe chamada `:root{` que estará disponível na raiz da página *(global)* contendo seguintes variáveis:  

- `--cor-violeta:` com o valor `#302b63;` para definir a cor de fundo da página;
- `--cor-cinza:` com valor `rgb(146, 157, 157);` para a cor do Botão;
- `--cor-branca:` com valor `white;` para a cor do texto.

Para declarar os valores das cores foi usado 3 abordagens diferentes, o código hexadecimal `#302b63`, o código rgb `rgb(146, 157, 157)` e o nome da cor `white`, podendo escolher uma forma para padronizar ou usar todas.

```css
// estilo.css

:root {                             /*define as variáveis*/
  --cor-violeta: #302b63;
  --cor-cinza: rgb(146, 157, 157);
  --cor-branca: white;
}
...
```

***TAG BODY:***  
Teremos algumas definições na tag `<body>`.  

```css
/* estilo.css */

...
body {
  display: flex;                        /* fica um ao lado do outro */
  flex-direction: column;               /* fica um debaixo do outro */
  justify-content: center;
  align-items: center;                  /*alinha os itens ao centro*/
  height: 100%;                         /*altura*/
  background-color: var(--cor-violeta);   /*cor de fundo definida pela variável*/
  color: var(--cor-branca);              /*define cor do texto*/
}
...
```

***TAG H1 e H2:***  
Estaremos centralizando o texto.

```css
/* estilo.css */

...
h1, h2{
  text-align: center;
}
...
```

***ID INFORMAÇÕES:***  
Para que possamos criar as definições de um `id:""` precisamos colocar um `#` antes do nome do ID.

```css
/* estilo.css */

...
#informacoes{
  min-height: 50px; /*altura mínima*/
  margin: 0 auto;   /*margem de "0px" no topo e na base e "automático" na esquerda e direita*/

}
...
```

***ID BOTÃO e HOVER:***  
Estaremos estilizando o botão e em seguida o efeito hover, quando se passa o mouse por cima do botão.  

```css
/* estilo.css */

...
#iniciar{
  font-size: 1.4rem;                    /*tamanho da fonte*/
  font-weight: bold;                    /*peso da fonte*/
  background-color: var(--cor-cinza);   /*cor do botão*/
  border: none;                         /*sem borda*/
  padding: 5px 10px;                    /* "5px" topo e base "10px" esq e dir"*/
  border-radius: 5px; 
  margin-top: 10px;                  /*arredondar bordas*/
  margin-bottom: 10px;                  /*margem de baixo*/
  color: var(--cor-branca);            /*cor do texto*/
}

#iniciar:hover{
  color: var(--cor-violeta);        /*muda a cor do texto do botão*/
}
...
```

***ID TABULEIRO:***  
Agora iremos definir o Tabuleiro para que tenha um formato `#`, pra isso iremos estilizar as DIVs que possuem as Classes posição.  

```css
/* estilo.css */

...
#tabuleiro{
  display: grid;
  grid-template-columns: repeat(3, 1fr);    /*cria 3 colunas com as definições abaixo*/
  width: min-content;                       /*largura no menor conteúdo possível*/
  padding-top: 25px;
}
...
```

***CLASSE POSIÇÃO:***  
Esta Classe é onde iremos estilizar o formato # do Jogo da Velha, através destas cinco Classes `.posicao`, `.posicao-top`, `.posicao-esq`, `.posicao-dir` e `.posicao-base`.

```css
/* estilo.css */

...
.posicao{
  width: 150px;                             /*largura*/
  height: 150px;                            /*altura*/
  line-height: 150px;                       /*altura da linha*/
  font-size: 90px;                          /*tamanho da fonte*/
  text-align: center;                       /*alinha o texto horizontalmente*/
  vertical-align: middle;                   /*alinha o texto verticalmente*/
  background-color: var(--cor-violeta);
  border: solid var(--cor-branca) 10px;     /*cria uma borda sólida branca de 10px de espessura*/
}

.posicao-top{
  border-top: none;             /*retira a borda*/          
}

.posicao-esq{
  border-left: none;            /*retira a borda*/
}

.posicao-dir{
  border-right: none;           /*retira a borda*/
}

.posicao-base{
  border-bottom: none;          /*retira a borda*/
}
...
```

[^ Sumário ^](#sumário)

### Integrando a Interface "DOM" com o Script

Para implementar a iteração, iremos criar uma Função Auto Invocada e dentro desta Função que a Lógica será implementada.  

Então, abra o arquivo `script.js` e no final comente os códigos de teste e inicie a iteração com a interface.  

> ***Informação:***  
*O motivo de estarmos criando uma Função Auto Invocada `(function () {...}) ()` e colocando a Constante dentro do escopo desta Função, é para que a constante fique disponível somente para a função e não fique exposta globalmente causando uma falha na segurança, pois, esta Função só será executada uma vez na inicialização do Jogo.*

Para criar a Função Auto Invocada, precisamos colocá-la dentro de parênteses, então, abra os parêntese `(` crie a Função `function()` então, `{`  

Crie uma constante `const` chamada `botaoIniciar` recebendo `=` o `document.getElementById(` recebendo por parâmetro o ID `"iniciar")`,  

Crie a constante `const` chamada `informacoes` recebendo `=` o `document.getElementById(` recebendo por parâmetro o ID `"informacoes")`,  

Para pegar o Tabuleiro, crie uma constante `const` chamada `tabuleiro` recebendo `=` um `documento.getElementById(` recebendo por parâmetro o ID `"tabuleiro")`.  

Também iremos criar um Jogo contento dois jogadores humanos por padrão, então, crie uma constante `const` chamada `jogo` recebendo `=` um `JogoDaVelha(` recebendo por parâmetro um `new JogadorHumano('X'), new JogadorHumano('O'))`

```js
// script.js

...
(function () {
  const botaoIniciar = document.getElementById("iniciar")
  const informacoes = document.getElementById("informacoes")
  const tabuleiro = document.getElementById("tabuleiro")
  const jogo = JogoDaVelha(new JogadorHumano('X'), new JogadorHumano('O'))
})()
...
```

Com isso, temos os Elementos Principais que serão precisos para que possamos manipular a DOM.

[^ Sumário ^](#sumário)

### Cálculo de Matriz

O cálculo feito é um cálculo para mapear uma estrutura de matriz em um array. Ou seja, quero transformar um array de arrays em um único array. Para isso, eu preciso fazer com que os índices de um elemento na matriz sejam convertidos em um índice do array de alguma forma. Supondo que eu tenha a matriz ***[['a','b','c'], ['d','e','f'], ['g','h','i']]*** e quero convertê-la para o array ***['a','b','c', 'd','e','f', 'g','h','i']*** eu preciso copiar cada um dos arrays individualmente. Ou seja, copiar todos os elementos do array ***['a','b','c']***, e logo em seguida colocar todos os elementos do array ***['d','e','f']***.

Para fazer isso, é feito o mapeamento dos elementos da matriz em um array e isso é feito através do cálculo. A parte linha*qndLinhas serve para identificar em qual posição do array devemos iniciar a cópia de um dos arrays da matriz. Vou deixar um pequeno exemplo abaixo que pode te ajudar a entender isso melhor:

```js
// script.js

const matriz = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
];
let qndLinhas = 3;
for (let i = 0; i < qndLinhas; i++) {
    console.log(`Para o mapeamento funcionar, o caractere ${matriz[i][0]} deve estar na posição ${i * qndLinhas}`);
}

//Verificação das posições usando o array de resultado
console.log("---RESULTADO---");
const resultado = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
for (let i = 0; i < resultado.length; i += 3) {
    console.log(`resultado[${i}] = ${resultado[i]}`);
}
```

Agora que já sabemos em qual posição do array devemos começar a copia, basta fazer a copia dos elementos. Se sabemos que o array ***["d", "e", "f"]*** deve começar a ser copiado para o índice 3 do array final *(e aqui eu estou usando o número 3 especificamente porque neste caso este é o valor de qndLinhas e acho que a explicação fica melhor colocando um valor para essa variável ao invés de usar o nome dela de forma genérica)*, o elemento ***'e'*** deve ser copiado para o ***índice 4*** e o ***'f'*** para o ***índice 5***. Ou seja, 'd' deve estar no índice 3, ***'e'*** no índice 3+1 e 'f' no índice 3+2.  

Podemos interpretar 3 como sendo 3 + 0, e ai temos 'd' no índice 3 + 0, 'e' em 3 + 1 e 'f' em 3 + 2. Pois 0,1 e 2 são justamente os índices desses elementos dentro do array atual onde eles se encontram e por isso a posição da coluna é considerada na conta, para permitir a copia de todos os elementos de cada array da matriz.

> ***Esse cálculo será utilizado mais adiante, então, precisa ficar bem entendido.***

[^ Sumário ^](#sumário)

### Implementando a Classe de Iteração com a DOM

Agora iniciaremos a criação da Classe que fará a iteração entre a Classe JogoDaVelha() com a DOM.  

Dentro da Classe JogoDaVelhaDOM(), serão feitas alterações que forem necessárias tanto no Tabuleiro quanto nas Informações.  

Antes da Função que acabamos de criar, crie uma Classe `class` chamada `JogoDaVelhaDOM{` então, iremos passar para o Construtor `constructor(` como parâmetro o `tabuleiro,` e as `informacoes)` então, `{` este Tabuleiro `this.tabuleiro` receberá `=` o `tabuleiro` passado por parâmetro e esta informação `this.informacoes` receberá `=` as `informacoes` passada por parâmetro `}`, com este Código acabamos de colocar dentro da Classe JogoDaVelhaDOM() o Tabuleiro e as Informações.

Agora ainda dentro da Classe JogoDaVelhaDOM(), iremos criar um Método chamado `inicializar(` recebendo como parâmetro um `jogo)` então, `{` este jogo `this.jogo` receberá `=` o `jogo` passado por parâmetro `} }`

```js
// script.js

...
class JogoDaVelhaDOM{
  constructor(tabuleiro, informacoes){
    this.tabuleiro = tabuleiro
    this.informacoes = informacoes
  }

  inicializar(jogo){
    this.jogo = jogo
  }
}
...
```

Agora dentro da Classe JogoDaVelhaDOM(), iremos criar uma constante `const` chamada `jogoDOM` recebendo `=` um `new JogoDaVelhaDOM(` recebendo como parâmetro o `tabuleiro` e as `informacoes)` que guardará um Jogo na DOM, e faremos a chamada do `jogoDOM` que irá `.inicializar(` o `jogo` criado acima`)`.  

```js
// script.js

...
  const jogoDOM = new JogoDaVelhaDOM(tabuleiro, informacoes)
  jogoDOM.inicializar(jogo)
})()
...
```

Então o que fizemos até agora:

- Nós criamos um Jogo que possui toda a Lógica que já implementamos  
`const jogo = JogoDaVelha(new JogadorHumano('X'), new JogadorHumano('O'))`;
- E iremos pegar este Jogo para poder inicializar a DOM  
`jogoDOM.inicializar(jogo)`.

Até aqui, temos toda a Lógica dentro da Classe JogoDaVelhaDOM(), que irá fazer o Jogo da Velha funcionar por baixo dos panos que será a instância da Classe Jogo recebida no Método `inicializar(jogo)`, porém, ainda não temos o Jogo Inicializado, pois não temos nada na Interface resultando em uma alteração no Jogo.  

Então, dentro do Método inicializar(), iremos criar um outro Método Privado chamado `#deixarTabuleiroJogavel()` será responsável por fazer as alterações na DOM que serão responsáveis por fazer a iteração com o jogo passado por parâmetro para o Método inicializar().  

Então, no Método Privado `#deixarTabuleiroJogavel()` vamos precisar fazer algumas alterações em cada uma das posições do Tabuleiro, então, cada um dos quadradinhos *(DIVs)* irá precisar receber alguma coisa, para que algo aconteça com eles, então, `{` crie uma constante `const` chamada `posicoes` recebendo `=` este Tabuleiro `this.tabuleiro` pegando o nome da Classe `.getElementsByClassName("posicao")`, com isso, pegamos a partir do Tabuleiro todos os Elementos que possuem a Classe com o nome Posição.  

Ainda dentro do escopo, então, para cada `posicao` dos elementos do iterável `posicoes` iremos fazer alguma coisa através de um laço FOR OF `for(let posicao of posicoes)` então, `{` iremos adicionar um evento que irá escutar em que posição clicamos `posicao.addEventListener("click",` onde algo será feito através da Função do Evento `(e)` retornando `=>` então, `{` iremos verificar se existe um vencedor par poder parar de jogar, para isso primeiro precisamos identificar qual das posições foi selecionada, para isso, vamos voltar ao arquivo `index.html` e vamos adicionar as propriedades `linha` e `coluna` em cada uma das posições do Tabuleiro `<div class="posicao" linha="1" coluna="1"></div>`, assim, conseguiremos criar uma jogada no Jogo.  
Em nossa Classe de Jogada(), criávamos uma jogada através de uma linha e uma coluna, então, com isso já eliminado a necessidade de criar outra lógica para transformar a posição em algum número fazer uma jogada pois, já iremos colocar os números em cada posição correta.  

```HTML
// index.html

...
  <div id="tabuleiro">
    <div class="posicao posicao-top posicao-esq" linha="1" coluna="1"></div>
    <div class="posicao posicao-top" linha="1" coluna="2"></div>
    <div class="posicao posicao-top posicao-dir" linha="1" coluna="3"></div>
    <div class="posicao posicao-esq" linha="2" coluna="1"></div>
    <div class="posicao" linha="2" coluna="2"></div>
    <div class="posicao posicao-dir" linha="2" coluna="3"></div>
    <div class="posicao posicao-base posicao-esq" linha="3" coluna="1"></div>
    <div class="posicao posicao-base" linha="3" coluna="2"></div>
    <div class="posicao posicao-base posicao-dir" linha="3" coluna="3"></div>
  </div>

...
```

Continuando no Evento de Escuta do Click, iremos poder utilizar as propriedades `linha` e `coluna` para poder realizar nossas computações, então, crie uma variável `let` chamada `posicaoSelecionada` recebendo `=` o valor do Evento `e.target.attributes`, crie uma variável `let` chamada `linha` recebendo `=` o Valor do Atributo Linha `+posicaoSelecionada.linha.value` *(foi adicionado um sinal de + na frente para já converter para um valor numérico)*, agora faremos o mesmo para a coluna `let coluna = +posicaoSelecionada.coluna.value` e para finalizar iremos fazer um teste exibindo no console a posição onde foi clicado ``` console.log(`Clicou na linha ${linha} e na coluna ${coluna}`) }) ``` `} }`.

E finalizamos chamando o Método Privado `this.#deixarTabuleiroJogavel()` dento do Método inicializar().

Com isso, já conseguimos fazer a verificação onde está acontecendo o Click do mouse no Tabuleiro e com isso, identificando onde será feito a jogada.  

Ainda dentro do Método Privado #deixarTabuleiroJogavel() e logo abaixo de `let coluna = +posicaoSelecionada.coluna.value`, iremos criar uma Jogada, então, iremos pegar este jogo `this.jogo.jogar(` recebendo como parâmetro uma Nova Jogada `new Jogada(` recebendo como parâmetro uma linha e uma coluna `linha, coluna))` e para testar, podemos exibir no console a Jogada através de `console.log(this.jogo.toString())`, até aqui, já podemos ver a posição que foi clicado e quem efetuou a jogada.  

```js
// script.js

...
  inicializar(jogo){
    this.jogo = jogo
    this.#deixarTabuleiroJogavel()
  }

  #deixarTabuleiroJogavel(){
    const posicoes = this.tabuleiro.getElementsByClassName("posicao")
    //? percorre cada posição dos Elementos de posições
    for(let posicao of posicoes){
      //* Escuta o click do mouse na posição
      posicao.addEventListener("click", (e) => {
        let posicaoSelecionada = e.target.attributes
        let linha = +posicaoSelecionada.linha.value       //* Pega o valor do atributo linha
        let coluna = +posicaoSelecionada.coluna.value     //* Pega o valor do atributo coluna
        console.log(`Clicou na Posição (${linha}, ${coluna})`)
        this.jogo.jogar(new Jogada(linha, coluna))
        console.log(this.jogo.toString())
      })
    }
  }
...
```

Para que possamos exibir os símbolos *( **X e O** )* dos Jogadores na Interface, precisaremos definir um novo Método Privado chamado `#exibirSimbolos()` então, `{` começaremos extraindo a Propriedade Tabuleiro do Jogo através do Destructuring, crie uma variável `let` chamada `{tabuleiro}` recebendo `=` este Jogo `this.jogo`, agora crie uma variável `let` chamada `qndLinhas` recebendo `=` o tamanho do Tabuleiro `tabuleiro.length`, crie uma variável `let` chamada `qndColunas` recebendo `=` o tamanho do Tabuleiro na posição ZERO `tabuleiro[0].length` especificando a quantidade de colunas que terá em uma linha, agora precisamos pegar as posições do Tabuleiro da Interface, crie uma variável `let` chamada `posicoes` recebendo `=` este Tabuleiro `this.tabuleiro` pegando a posição pelo Nome da Classe `.getElementsByClassName("posicao")`, agora precisamos percorrer o Tabuleiro que temos no Jogo utilizando dois Laços FOR, um para percorrer as Linhas e outro para as Colunas: crie um Laço para percorrer as Linhas `for(` crie uma variável `let` chamada `linha` recebendo `=` o valor `0;` enquanto a `linha` for menor `<` que a `qndLinhas;` então incremente `linha++)` então, `{` crie um Laço para percorrer as Colunas `for(` crie uma variável `let` chamada `coluna` recebendo `=` o valor `0;` enquanto a `coluna` for menor `<` que a `qndColunas;` então incremente `coluna++)` então, `{` agora precisamos identificar a qual índice da Interface esta posição está representando, crie uma variável `let` chamada `indiceDaInterface` recebendo `=` a `linha` que multiplica `*` a `qndLinhas` mais o valor da `coluna`, agora, o Array `posicoes[` na posição `indiceDaInterface]` no texto dentro desta posição `.innerText` receberá `=` o `tabuleiro[` na posição `linha]` e `[` na posição `coluna] } } }`.  

Com isso, conseguimos fazer o mapeamento e exibir na Interface os símbolos que seriam exibidos no console.

> Explicação da Lógica:  
`let indiceDaInterface = linha * qndLinhas + coluna`, significa que, suponha que foi jogado na posição (1,2) que é a segunda coluna da primeira linha, precisamos que esta posição se transforme no indice 1 da Interface 2 3 -> 5 | 3 5 = 5

```js
// script.js

...
  #exibirSimbolos(){
    let {tabuleiro} = this.jogo
    let qndLinhas = tabuleiro.length
    let qndColunas = tabuleiro[0].length
    let posicoes = this.tabuleiro.getElementsByClassName("posicao")
    for(let linha = 0; linha < qndLinhas; linha++){
      for (let coluna = 0; coluna < qndColunas; coluna++) {
        let indiceDaInterface = linha * qndLinhas + coluna
        posicoes[indiceDaInterface].innerText = tabuleiro[linha][coluna]
      }
    }
  }
...
```

E pra finalizar e funcionar corretamente, fazemos a chamada do Método Privado `#exibirSimbolos()` no Método Privado `#deixarTabuleiroJogavel()`.

```js
// script.js

...
  #deixarTabuleiroJogavel(){
    ...
      //* Escuta o click do mouse na posição
      posicao.addEventListener("click", (e) => {
        ...
        this.#exibirSimbolos()
      })
    }
  }
...
```

[^ Sumário ^](#sumário)

### Atualizando o texto de Informações

Estamos finalizando o Jogo da Velha Básico, agora iremos definir a Atualização da TAG `<h2>` de Informações, onde será exibido quem é o jogador da vez e informar se houve ou não vencedor.  

Então, dentro do arquivo `script.js` e dentro da Classe JogoDaVelha(), iremos criar um Método Público chamado `status()` este Método será utilizado para retornar o Status do Jogo.  

Este Método está sendo criado dentro da Classe JogoDaVelha(), pois a parte de identificar o estado atual do Jogo, é uma responsabilidade da Classe que possui a Lógica do Jogo, não sendo responsabilidade da Interface, com isso, iremos criar esse Método na Lógica do Jogo e depois iremos exibir o resultado na Interface, ou seja, na Classe JogoDaVelhaDOM().  

Então, `{` iremos verificar se existe um Empate, que é o traço, Se `if(` este vencedor `this.vencedor` for igual `===` ao `'-')` então, `{` retorne Empate `return 'Empate!!!'}` Senão Se `else if(` este é o vencedor `this.vencedor)` então, `{` retorne o símbolo do vencedor ``return `O Jogador ${this.vencedor} Venceu!!!` }`` Senão `{` se não houve vencedor, retorne `return` o símbolo do Jogador Atual `this.jogadorAtual.simbolo } }`, com isso, já conseguimos verificar o Status do Jogo.  

```js
// script.js

...
  status(){
    if (this.vencedor === '-') {
      return 'Empate!!!'
    } else if (this.vencedor) {
      return `O Jogador ${this.vencedor} Venceu!!!`
    } else {
      return this.jogadorAtual.simbolo
    }
  }
...
```

Agora iremos editar a Função EventListener() que é acionada toda vez que ocorre um click no Tabuleiro, para que possamos exibir o Status na TAG `<h2>` de Informações, lembrando que esta parte se refere a Interface e se encontra dentro do Método Privado `#deixarTabuleiroJogavel()`.  

Então, toda vez que clicarmos em um elemento, o EventListener() irá escutar o click e irá executar a Função `(e) => {}`, com isso, estará sendo feito uma Jogada e com isso precisamos saber se houve um vencedor antes de haver uma Jogada, então Se `if(` houver um vencedor `this.vencedor)` então, `{` retorne `return` e finaliza o Jogo `}` e depois, saber qual o Status após a jogada, então o texto do ID informações `this.informacoes.innerText` receberá `=` o Status do Jogo `this.jogo.status()`.  

```js
// script.js

...
  #deixarTabuleiroJogavel(){
    ...
      posicao.addEventListener('click', (e) => {
        if(this.vencedor){
          return
        }
        ...
        this.jogo.jogar(new Jogada(linha, coluna))
        this.informacoes.innerText = this.jogo.status()
        ...
      })
    }
  }
...
```

Agora, iremos criar um EventListener() para o botão, para que possamos reiniciar o jogo e limpar o Tabuleiro.  

Então, dendo da Função Auto Invocada, iremos adicionar um evento no botão `botaoIniciar.addEventListener(` recebendo um evento de `"click",` e a Função Anonima do Evento `() => {` aqui iremos zerar o Tabuleiro `jogoDOM.zerar() })`.  

```js
// script.js

...
  botaoIniciar.addEventListener('click', () => {
    jogoDOM.zerar()
  })
...
```

Agora dentro da Classe JogoDaVelhaDOM() iremos criar um Método Público chamado `zerar()` e a primeira coisa que iremos fazer é zerar o Jogo, então, `{ this.jogo.zerar()`, após esse comando o Jogo irá se comportar como um Jogo vazio, mas o Tabuleiro ainda estará preenchido com as jogadas anteriores, para corrigir isso, precisamos pegar todas as posições, crie uma variável `let` chamada `posicoes` recebendo `=` o Nome da Classe `document.getElementsByClassName("posicao")`, então iremos percorrer este Array de posições `Array.from(posicoes)` para cada `.forEach((posicao)` do Array posições, retornará `=>` o texto da posição `(posicao.innerText` recebendo `=` uma String vazia `""))` apagando o que havia nesta posição agora, iremos atualizar o Status do Jogo, o texto de informações `this.informacoes.innerText` receberá `=` o Status do Jogo `this.jogo.status() }`.  

```js
// script.js

...
  zerar() {
    this.jogo.zerar()
    let posicoes = document.getElementsByClassName("posicao")
    Array.from(posicoes).forEach((posicao) => (posicao.innerText = ''))
    this.informacoes.innerText = this.jogo.status()
  }
...
```

Até esse ponto podemos dizer que está terminado o Projeto Básico do Jogo da Velha, adiante faremos algumas melhorias.

[^ Sumário ^](#sumário)

## Gerando um Tabuleiro Dinâmico

Atualmente o Jogo está funcionando em um Tabuleiro 3x3 padrão, mas, iremos implementar alguns mecanismos e funcionalidades para que possamos aumentar o Tabuleiro em outros tamanhos 4x4, 5x5, 6x6 e 7x7, poderia ter mais, mas vamos limitar o tamanho máximo em 7x7.

Par iniciar, iremos fazer algumas alterações no arquivo `index.html`, então, depois da TAG `<button>` adicione uma nova `<div>` depois adicione um `<span>` e entre as TAGs adicione o texto que será a Label da Caixa de Seleção `Tamanho do Tabuleiro:` seguido da TAG de fechamento `</span>` agora, adicione outra TAG que será a Caixa de Seleção `<input` adicione um ID `id="tamanho"` uma propriedade do tipo número `type="number"` uma propriedade para o tamanho mínimo do Tabuleiro `mim="3"` outra propriedade para o tamanho máximo `max="7"` e por último uma propriedade para o valor padrão `value="3">` seguido da TAG de fechamento `</input>` seguido da TAG de fechamento `</div>`.  

```HTML
// index.html

...
  <div>
    <span>Tamanho do Tabuleiro:</span>
    <input id="tamanho" type="number" min="3" max="7" value="3">
  </div>
...
```

Se o Input estiver muito grande, podemos definir sua largura no arquivo `estilo.css` adicionando o ID tamanho `#tamanho{ width: 30px; }`, em nosso caso não será preciso pois o tamanho padrão já está aceitável, mas segue o código.

```css
/* estilo.css */

...
#tamanho{
  width: 30px;
}
...
```

[^ Sumário ^](#sumário)

### Método Privado #criarTabuleiro()

Agora voltando ao `index.html`, iremos comentar todo o conteúdo do Tabuleiro para que possamos criá-lo dinamicamente através do javascript.  

Agora no arquivo `script.js` dentro da Classe JogoDaVelhaDOM() iremos criar um Método Privado `#criarTabuleiro()` que será responsável por gerar o Tabuleiro Dinamicamente, logo em seguida antes de implementar o Método, já iremos chamá-lo no Método inicializar(), depois de criar o jogo `this.jogo = jogo` e antes de `this.#deixarTabuleiroJogavel()`, precisa estar nesta ordem para que funcione da forma correta.

```js
// script.js

...
  inicializar(jogo) {
    this.jogo = jogo
>>  this.#criarTabuleiro()
    this.#deixarTabuleiroJogavel()
  }
...
```

No Método `#criarTabuleiro(){` iremos criar uma constante `const` chamada `tamanho` recebendo `=` o tamanho passado por parâmetro `this.jogo.tamanho`, em seguida crie uma variável `let` chamada `posicoes` recebendo `=` um Array de posições `[]` que será preenchido com outros Arrays, depois crie um Laço FOR `for(` crie uma variável `let` chamada `linha` recebendo `=` o valor `1;` e enquanto a `linha` for menor ou igual `<=` ao `tamanho;` incremente a `linha++)` então, `{` crie uma constante `const` chamada `colunas` *(que será as colunas de dentro da linha)* recebendo `=` um Método Privado `this.#criarLinhaTabuleiro(` recebendo como parâmetro uma `linha,` e um `tamanho) } }` que irá gerar essas colunas, esse Método será criado a seguir dentro da Classe JogoDaVelhaDOM()  

```js
// script.js

...
  #criarTabuleiro(){
    const tamanho = this.jogo.tamanho
    let posicoes = []
    for(let linha = 1; linha <= tamanho; linha++){
      const colunas = this.#criarLinhaTabuleiro(linha, tamanho)
    }
  }
...
```

[^ Sumário ^](#sumário)

### Método Privado #criarLinhaTabuleiro()

Agora dentro da Classe JogoDaVelhaDOM() iremos criar o Método Privado `#criarLinhaTabuleiro(` recebendo como parâmetro uma `linha,` e um `tamanho)` então, `{` crie uma variável `let` chamada `colunas` recebendo `=` um Array `[]`, crie um Laço `for(` crie uma variável `let` chamada `coluna` recebendo `=` o valor `1;` e enquanto a `coluna` for menor ou igual `<=` ao `tamanho;` incremente a `coluna++)` então, `{` aqui dentro do Laço, iremos criar nossas posições, mas como vimos no HTML, possuímos algumas Classes em cada posição e essas Classes estarão relacionadas onde essa posição se encontra, mas sempre teremos a Classe posição. Então, crie uma variável `let` chamada `classes` recebendo `=` a Classe `"posicao "` não se esquecendo do espaço no final para que quando concatenar com as outras Classes não cause erro no código. Agora faremos alguns testes para verificar se precisa ou não retirar as bordas tanto da linha quanto da coluna, então Se `if(` a `linha` é igual `=== 1)` isso significa que está na primeira linha de cima, então, `{` iremos pegar o valor ***"posicao "*** da variável `classes` e concatenar `+=` com o valor `"posicao-top " }`, Senão Se `else if(` a `linha` é igual `===` ao `tamanho` recebido por parâmetro `)` estaremos na linha de baixo, então, `{` iremos pegar o valor ***"posicao "*** da variável `classes` e concatenar `+=` com o valor `"posicao-base " }`. Com esse IF(), verificamos se a posição está na linha de cima ou na linha de baixo.  

```js
// script.js

...
  #criarLinhaTabuleiro(linha, tamanho){
    let colunas = []
    for(let coluna = 1; coluna <= tamanho; coluna++){
      let classes = "posicao "
      if(linha === 1){
        classes += "posicao-top "
      } else if(linha === tamanho){
        classes += "posicao-base "
      }
      ...
...
```

Agora iremos fazer uma nova verificação para os lados direito e esquerdo, então, Se `if(` a `coluna` é igual `=== 1)` isso significa que está na primeira coluna da esquerda, então, `{` iremos pegar o valor ***"posicao "*** da variável `classes` e concatenar `+=` com o valor `"posicao-esq " }`, Senão Se `else if(` a `coluna` é igual `===` ao `tamanho` recebido por parâmetro `)` estaremos na coluna da direita, então, `{` iremos pegar o valor ***"posicao "*** da variável `classes` e concatenar `+=` com o valor `"posicao-dir " } }`.  

Até esse ponto temos todas as Classes definidas para serem aplicadas ao Elemento HTML quem em nosso caso é uma DIV, então, iremos criar uma constante `const` chamada `elemento` recebendo `=` uma Template String contendo o conteúdo da DIV que será criada `` `<div`` contendo a propriedade `class=` que irá interpolar com a variável `"${classes}"` também teremos as propriedades `linha=${linha}` e `coluna=${coluna}` e como tanto o Laço da linha quando o Laço da coluna já iniciam com o valor 1, podemos usá-los ``></div>` ``.  

Depois de criar o Elemento, precisamos adicioná-lo dentro da variável `let colunas = []`, para isso usaremos o comando `colunas.push(elemento)`.  

E para finalizar, no final do Método Privado `#criarTabuleiro()` iremos retornar as colunas `return colunas`.  

```js
// script.js

...
      ...
      if(coluna === 1){
        classes += "posicao-esq "
      } else if(coluna === tamanho){
        classes += "posicao-dir "
      }

      const elemento = `<div class="${classes}" linha=${linha} coluna=${coluna}></div>`

      colunas.push(elemento)
    }
    return colunas
  }
...
```

Depois que as colunas foram criadas pelo Método Privado `#criarLinhaTabuleiro()` irá retornar as colunas para o Método Privado `#criarTabuleiro()` na constante `const colunas` que recebe o Método Privado que acabamos de criar.

```js
// script.js

...
  #criarTabuleiro(){
    const tamanho = this.jogo.tamanho
    let posicoes = []
    for(let linha = 1; linha <= tamanho; linha++){
>>  const colunas = this.#criarLinhaTabuleiro(linha, tamanho)
    ...
```

Neste ponto, temos todas as colunas da linha em questão, com isso, iremos adicionar no Array de posições `let posicoes = []`, todas as colunas recebidas, então, vamos usar o comando `posicoes.push(` extraindo todas as colunas `...colunas)`, com isso, teremos vários Elementos HTML dento do Array posições.  

Então, quando sair-mos do Laço FOR, já teremos o Tabuleiro completo, pois criou a quantidade de linhas conforme o tamanho e cada uma das linhas recebeu uma quantidade de colunas de acordo com o tamanho do Tabuleiro passado.  

Depois do FOR, precisaremos inserir essas informações dentro do Código HTML, então, insira este Tabuleiro `this.tabuleiro` no conteúdo HTML `.innerHTML` recebendo `=` o conteúdo extraído do do Array posições `[...posicoes]` juntando com um caractere vazio `.join("")`

```js
// script.js

    ...
      posicoes.push(...colunas)
    }
    this.tabuleiro.innerHTML = [...posicoes].join("")
  }
...
```

Com isso, temos o Tabuleiro sendo gerado através do javascript, mas ainda não está gerando os outros tamanhos, somente o tamanho padrão está sendo gerado.

[^ Sumário ^](#sumário)

#### Associando o valor do Input com o Tamanho do Tabuleiro

Como acabamos de implementar a Geração Dinâmica do Tabuleiro, falta associar o valor do `input` com o Tamanho do Tabuleiro.

No momento, não há nenhuma conexão mas mesmo assim o Tabuleiro gera corretamente, isso acontece, pois, no Método `##criarTabuleiro()` estamos pegando o Tamanho a partir do tamanho do Jogo `const tamanho = this.jogo.tamanho` e o Jogo por padrão, possui o tamanho definido no Construtor da Classe `JogoDaVelha()` como sendo `tamanho = 3` caso não seja passado nenhum parâmetro.  

[^ Sumário ^](#sumário)

#### Lógica Abordada

Iremos criar um Jogo com um Tamanho diferente, e quando o Jogo for criado, teremos a alteração sendo efetuada na variável Tabuleiro.  

Para que possamos realizar esta alteração, precisamos saber primeiro qual o valor numérico do `input`.  

Então, na Função Auto Invocada, acrescente uma constante `const` chamada `inputTamanho` recebendo `=` todo o Elemento do ID do Input através de `document.getElementByID("tamanho")`.  

Agora adicione uma variável `let` chamada `tamanho` recebendo `=` um valor numérico do Input `+inputTamanho.value` *(o "+" converte em um valor numérico)*.  

Em seguida, passamos para a Função que cria o Jogo o Tamanho que recebemos na variável `tamanho` que acabamos de criar.  

```js
// script.js

...
  const inputTamanho = document.getElementById('tamanho')
  let tamanho = +inputTamanho.value
  const jogo = new JogoDaVelha(
    new JogadorHumano('X'),
    new JogadorAleatorio('O'),
    tamanho
  )
...
```

Mas só isso ainda não é suficiente para que funcione quando for selecionado o novo valor no Input, pois, precisamos acrescentar um ***Event Listener*** para que possa ***Escutar*** a modificação do ***Input***.  

Então, ainda dentro da ***Função Auto Invocada*** e antes do Evento do Click do botão, iremos acrescentar o ***Evento do Input*** que define o Tamanho do Tabuleiro `inputTamanho.addEventListener(` escutando o Evento `"input",` e executando a ação de criar um Novo Jogo a partir do Tamanho recebido `()=>{...} )`.  

Para que isso ocorra, precisaríamos pegar toda a constante ***jogo*** e repetir dentro da Função do Input, mas, uma outra alternativa pode ser tomada, iremos criar uma nova constante `const` chamada `novoJogo` recebendo `=` uma Arrow Function `(` recebendo como parâmetro um `tamanho)` contendo o conteúdo da constante ***jogo*** `{ const jogo = new JogoDaVelha(new JogadorHumano('X'), new JogadorAleatorio('O'), tamanho)` retornando o Jogo `return jogo }`, para que possamos Criar um Jogo, sem precisar digitar tudo novamente.  

Agora, precisamos inicializar o Novo Jogo, então, em `jogoDOM.inicializar(` irá receber como parâmetro a Função `novoJogo())`, pois essa Função irá retornar um Novo Jogo.  

E lá no Input `inputTamanho.addEventListener("input", ()=>`então,`{` mova a variável `let` chamada `tamanho` para cá, crie o`jogoDOM.inicializar(`recebendo como parâmetro um `novoJogo(`recebendo como parâmetro o`tamanho))}`, com isso, já podemos alterar o tamanho do ***Tabuleiro*** conforme modificamos os valores do ***Input***.  

```js
// script.js

...
  const novoJogo = (tamanho) => {
    const jogo = new JogoDaVelha(
      new JogadorHumano('X'),
      new JogadorHumano('O'),
      tamanho
    )
    return jogo
  }

  const jogoDOM = new JogoDaVelhaDOM(tabuleiro, informacoes)
  jogoDOM.inicializar(novoJogo())

  inputTamanho.addEventListener("input", () => {
    let tamanho = +inputTamanho.value
    jogoDOM.inicializar(novoJogo(tamanho))
  })
...
```

Até este ponto, Jogo está alterando o tamanho do Tabuleiro conforme o valor selecionado no Input, mas, ainda não está funcionando como o esperado, pois, não está exibindo o Tabuleiro corretamente.  

Isso ocorre por causa de o Tabuleiro estar fixado para um tamanho padrão de 3x3 no CSS, através de `#tabuleiro{ grid-template-columns: repeat(3,1fr); }`, para que possamos modificar esse valor `repeat(3,1fr)` dinamicamente, conforme o valor selecionado no Input, precisamos comentar ou excluir esse valor no código CSS e implementar a modificação no Método Privado `#criarTabuleiro` dentro da Classe `JogoDaVelhaDOM()`.  

```css
// estilo.css

...
#tabuleiro{
    display: grid;
    /* grid-template-columns: repeat(3,1fr); */
    width:min-content;
    padding-top: 25px;
}
...
```

Então, dentro do Método Privado e depois de inserir as posições do Tabuleiro, insira este Tabuleiro `this.tabuleiro` o estilo ***grid-template-columns:*** `.style.gridTemplateColumns` recebendo `=` o valor `` `repeat(`` recebendo por parâmetro o `` ${tamanho},1fr)` `` passado pelo Input.  

```js
// script.js

...
  #criarTabuleiro() {
    ...
    this.tabuleiro.innerHTML = [...posicoes].join('')
    this.tabuleiro.style.gridTemplateColumns = `repeat(${tamanho},1fr)`
  }
...
```

Com isso, finalizamos a criação do Jogo da Velha, implementando toda a lógica com as Funcionalidades totalmente separada da interface e utilizando Programação Orientada a Objetos.  

O projeto é um Jogo da Velha que pode gerar dinamicamente Tabuleiros de 3x3, 4x4, 5x5, 6x6 e 7x7, pode se jogar com duas pessoas diferentes ou contra a máquina, mas não foi implementada a seleção de jogadores na interface, mas pode ser implementado no futuro.  

Posteriormente, poderá realizar atualizações no projeto, implementando novas funcionalidades e melhorando a interface.
