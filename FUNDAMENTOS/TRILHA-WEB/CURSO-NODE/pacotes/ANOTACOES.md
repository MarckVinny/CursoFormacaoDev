# Sumário

- [O que é o Package.json?](#o-que-é-o-packagejson)

  - [Instalando um novo Pacote no projeto](#instalando-um-novo-pacote-no-projeto)
  - [Instalando Dependência de Desenvolvimento](#instalando-dependência-de-desenvolvimento)
  - [Importando e Utilizando o pacote emoji](#importando-e-utilizando-o-pacote-emoji)
  - [Versionamento Semântico](#versionamento-semântico)

- [O que é o Package-lock.json?](#o-que-é-o-package-lockjson)

- [Instalando o Gerenciador de Pacotes YARN](#instalando-o-gerenciador-de-pacotes-yarn)

  - [Instalando o Package.json com o YARN](#instalando-o-packagejson-com-o-yarn)
  - [Instalando uma Dependencies com o YARN](#instalando-uma-dependencies-com-o-yarn)
  - [Instalando uma devDependencies com o YARN](#instalando-uma-devdependencies-com-o-yarn)

- [PROJETO I - Módulo Chalk](#projeto-i---módulo-chalk)

  - [Instalando Chalk como Dependência de Produção](#instalando-chalk-como-dependência-de-produção)
  - [Editando o Package.json](#editando-o-packagejson)
  - [Criando o arquivo Principal](#criando-o-arquivo-principal)
  - [Importando e definindo o Servidor dentro do Projeto1](#importando-e-definindo-o-servidor-dentro-do-projeto1)
  - [Inicializando o Servidor](#inicializando-o-servidor)
  - [Instalando o Pacote Nodemom como devDependencies](#instalando-o-pacote-nodemom-como-devdependencies)
  - [Instando o Pacote Luxon de Hora Mundial](#instando-o-pacote-luxon-de-hora-mundial)
  - [Adicionando novas Rotas](#adicionando-novas-rotas)

- [PROJETO II - Pensador Scraping](#projeto-ii---pensador-scraping)

  - [Instalando o Módulo Pensador Scraping](#instalando-o-módulo-pensador-scraping)
  - [Lógica Abordada - Pensador Scraping](#lógica-abordada---pensador-scraping)
  - [Criando o Código Principal - Pensador Scraping](#criando-o-código-principal---pensador-scraping)

  - [Módulo FS - File System](#módulo-fs---file-system)

    - [Salvando um Pensamento em Arquivo](#salvando-um-pensamento-em-arquivo)
    - [Comandos FileSystem](#comandos-filesystem)
    - [Tratamento de Erro - Pensador Scraping](#tratamento-de-erro---pensador-scraping)

- [PROJETO III - Banco de Dados](#projeto-iii---banco-de-dados)

  - [Criando o Projeto III](#criando-o-projeto-iii)
  - [Instalando o Módulo Terminal Kit - Interface](#instalando-o-módulo-terminal-kit---interface)
  - [Criando o Backend - Banco de Dados](#criando-o-backend---banco-de-dados)

    - [Função salvar()](#função-salvar)
    - [Função deletar()](#função-deletar)
    - [Função pegaDados()](#função-pegadados)
    - [Código Principal - Chamando Funções](#código-principal---chamando-funções)
    - [Salvando os Dados em Arquivo](#salvando-os-dados-em-arquivo)
    - [Fazendo a Leitura dos Dados em JSON](#fazendo-a-leitura-dos-dados-em-json)
    - [Executando o Código Principal](#executando-o-código-principal)
    - [Implementando um ID](#implementando-um-id)
    - [Modificando a Função salvar()](#modificando-a-função-salvar)
      - [Implementando o Índice do Banco](#implementando-o-índice-do-banco)
      - [Testando as Alterações](#testando-as-alterações)

  - [Implementando Menu com Módulo Terminal Kit](#implementando-menu-com-módulo-terminal-kit)

    - [Criando o Módulo Interface](#criando-o-módulo-interface)
    - [Integrando Interface e Banco de Dados](#integrando-interface-e-banco-de-dados)
    - [Criando a Função de Input - Entrada de Dados](#criando-a-função-de-input---entrada-de-dados)
      - [Adicionando Funcionalidade ao Menu Adicionar](#adicionando-funcionalidade-ao-menu-adicionar)
      - [Adicionando Funcionalidade ao Menu Editar](#adicionando-funcionalidade-ao-menu-editar)
      - [Adicionando Funcionalidade ao Menu Deletar](#adicionando-funcionalidade-ao-menu-deletar)
      - [Adicionando Funcionalidade ao Menu Exibir](#adicionando-funcionalidade-ao-menu-exibir)
      - [Adicionando Funcionalidade ao Menu Salvar](#adicionando-funcionalidade-ao-menu-salvar)
      - [Adicionando Funcionalidade ao Menu Sair](#adicionando-funcionalidade-ao-menu-sair)

___

## O que é o Package.json?

O package.json é o arquivo utilizado pelo ***Node.js*** para de configurar o projeto, é nele que serão definidos as dependências do projeto.  
Além de termos o Node.js instalado, também temos um gerenciador de pacotes instalado, que é o NPM.  
O NPM vem instalado juntamente com o Node.js mas são duas instalações distintas, cada uma com sua própria versão.  
Se rodar-mos os comandos no terminal, veremos a versão de cada um:

```zbh
// terminal

$ node --version
```

```zbh
// terminal

$ npm --version
```

Através do NPM, podemos baixar, instalar e gerenciar de maneira geral, pacotes que iremos instalar de outras pessoas e ele também é utilizado para criar o arquivo `package.json` com o comando a seguir:

```zbh
// terminal

$ npm init -y
```

Com o comando acima criamos o `package.json` de forma automática com todos os valores padrão, mas, que poder ser alterados depois.  
Mas agora iremos criar um `package.json` através do assistente onde iremos responder as perguntas passo a passo para poder criar nosso arquivo com nossas definições, através do comando a seguir:

```zbh
// terminal

$ npm init
```

Logo após dar o comando acima no terminal, teremos uma sequencia de respostas para definir nosso `package.json`:

- `package name: (pacotes)` é a pasta onde será criado o pacote *(precisa dar o comando dentro da pasta)*;
- `version: (1.0.0)` é a versão do pacote;
- `description:` é a descrição do pacote, pode deixar em branco se quiser;
- `entry point: (index.js)` é arquivo principal onde os códigos serão escritos;
- `test command:` scrips de teste, onde podemos definir alguns comandos personalizados;
- `git repository:` se houver um repositório git, deve ser preenchido;
- `keywords:` palavras-chave;
- `author:` nome do autor do projeto;
- `license: (ISC)` licenças do projeto.

> ***DICA:***  
*Todas as respostas entre parenteses, `( )` são respostas padrão. E todas as respostas podem ser respondidas com ***enter***, mas neste caso o recomendável é usar o comando `npm init -y` que responde sim para todas as perguntas e é mais rápido.*  
>
> *Todos os valores padrão poder ser substituídos, excluídos e criar novos valores.*

Com esses passos acima acabamos de criar nosso `package.json` dentro da pasta `pacotes`, a seguir veremos o conteúdo de nosso arquivo:  

```json
// package.json

{
  "name": "pacotes",
  "version": "1.0.0",
  "description": "Aulas de package.json",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Marcos Vinicius",
  "license": "ISC"
}
```

Um exemplo de script que podemos criar, seria o `"start": node index.js` pois, podemos iniciar o `index.js` digitando somente `start` no terminal, economizando na nora de digitar comandos com vários parâmetros.  

[^ Sumário ^](#sumário)

### Instalando um novo Pacote no projeto

Para saber quais Módulos de terceiros estão disponíveis para serem instalados, utilizamos o site do NPM <https://www.npmjs.com/> para pesquisar pelos pacotes e saber os passos para instalar e usar os mesmos.  
O site do NPM é um Catálogo de Pacotes que podemos importar para nosso projeto.  
Para exemplificar, iremos pesquisar e instalar um pacote de emoji no site do NPM em nossa pesquisa, escolhemos o pacote `node-emoji` para ser instalado.  
Na página do pacote, será encontrado todas as informações de como instalar e de como utilizar o pacote, a seguir iremos fazer a instalação em nosso projeto:  

Dentro da pasta ***CURSO-NODE***, crie uma pasta chamada `pacotes` e dentro dela, rode o comando a seguir no terminal.  
Lembrando que o comando precisa ser o mesmo que se encontra na página do pacote, respeitando letras maiúsculas, minúsculas, etc., senão, pode haver algum problema e o pacote não ser instalado ou até mesmo instalar um outro pacote.  

> ***DICA:***  
*Para abrir o terminal diretamente na pasta onde queremos instalar o pacote, que em nosso caso é a pasta `pacotes`, clique com o botão direito na pasta `pacotes` e escolha "Abrir no Terminal Integrado", isso abrirá o Terminal na pasta correta, minimizando a possível falha de instalar o pacote no local errado.*

```zsh
// Terminal

$ npm i --save node-emoji

added 6 packages, and audited 7 packages in 4s
```

Após dar esse comando dentro da pasta `pacotes`, podemos notar que foram instalados ***6 pacotes*** adicionais *(que são as dependências do mesmo)*.  
Foi criada uma nova pasta chamada `node_modules`, é nela que se encontra todos os pacotes instalados no projeto. Esta pasta merece um pouco de atenção e dever ser adicionada ao `.gitignore` pois ela ficará gigantesca conforme vamos adicionando mais pacotes.  
Pois quando instamos um pacote, ele instala também todas as dependências que ele precisa para funcionar.  
Não precisamo enviar a pasta `node-modules` pois o arquivo `package.json` contém as informações para instalar novamente todos os pacotes que serão precisos no outro computador, como isso, se for preciso enviar o projeto para outra pessoa mexer, essa pasta pode ser deletada antes.  
E por falar no `package.json`, ele também foi modificado quando rodamos o comando para instalar o pacote de emoji, foi adicionado a ele uma nova chave `dependencies:` que são os pacotes que instalamos no projeto e que irá depender dos mesmo para funcionar sem problemas.  

```json
// package.json

{
  ...
  "dependencies": {
    "node-emoji": "^2.1.0"
  }
}
```

Esta chave `dependencies:` que foi criada, contém das dependências de produção, que são as dependências que o projeto irá precisar para funcionar.  
É comum que durante o desenvolvimento do projeto, utilizemos uma ferramenta, mas, essa ferramenta não é a melhor disponível para distribuir para as outras pessoas, com isso teremos uma ***Dependência de Desenvolvimento*** `devDependencies:` e uma ***Dependência de Produção*** `dependencies:`.  

[^ Sumário ^](#sumário)

### Instalando Dependência de Desenvolvimento

Para instalar um pacote em uma dependência de desenvolvimento é o mesmo procedimento que instalar um pacote de produção *(como acabamos de ver)*, com a diferença que será acrescentado o `-D` ao comando, que sinaliza que será um pacote de Desenvolvimento.  

```zsh
// Terminal

$ npm i -D chalk
```

Esse novo pacote adicionado, não será utilizado em nosso projeto e será deletado logo em seguida, é só para mostrar como adicionar uma Dependência de Desenvolvimento, podemos ver a seguir como fica o `package.json` após a adição:

```json
// package.json

{
  ...
  "devDependencies": {
    "chalk": "^5.3.0"
  }
}
```

> DICA:  
As `devDependencies:` só estarão presentes no projeto enquanto o mesmo estiver em desenvolvimento.  
Já as `dependencies:` sempre estarão presentes no projeto.

[^ Sumário ^](#sumário)

### Importando e Utilizando o pacote emoji

Crie o arquivo `index.js` dentro da pasta `pacotes` e importe o pacote/módulo, lembrando de verificar na página do pacote como realizar a importação se utilizando a sintaxe CommonJS ou a sintaxe ECMAScript.  
Em nosso exemplo estamos utilizando a ***sintaxe CommonJS do Node.js***.

```js
// index.js

const emoji = require('node-emoji')

console.log(emoji.random())
```

Como foi definido no `package.json` que o script `start` é responsável por executar um arquivo `index.js` então (dentro da pasta `pacotes`) iremos utiliza-lo no Terminal.  

```zsh
// Terminal

$ npm start

> pacotes@1.0.0 start
> node index.js

{ name: 'ice_hockey', emoji: '🏒' }
```

Em outras palavras este script `start` roda o comando `node index.js`, mas poderia ser qualquer outro comando mais complexo e nos retorna um `Objeto` contendo o nome e o emoji correspondente `{ name: 'ice_hockey', emoji: '🏒' }`.

[^ Sumário ^](#sumário)

### Versionamento Semântico

O que significa cada número na versão da dependência?

O Node.js utiliza o  ***Versionamento Semântico***, onde as versões desses pacotes tem um significado, eles possuem 3 números *(x.y.z)* e iremos ver o que cada um significa:

- ***Major***: É o primeiro digito da versão;
- ***Minor***: É o segundo digito da versão;
- ***Fix***: É o terceiro digito da versão.

Segundo o ***Versionamento Semântico***, o primeiro projeto recebe a versão `1.0.0`, a partir daí iremos incrementar o valor `Minor` (no meio) ou valor `Fix` *(no final*).  

- Você aumenta a ***versão major*** quando você cria mudanças de API incompatíveis;  
- Você aumenta a ***versão minor*** quando você adiciona uma funcionalidade compatível com versões anteriores;  
- Você aumenta a ***versão fix*** quando você arruma bugs sem quebrar versões anteriores.  

Essa convenção é adotada em todas linguagens de programação, e é muito importante que todo pacote `npm` a siga, pois o sistema como um todo depende disso.  

Outra coisa que precisamos ter atenção é com o símbolo que aparece na frente da versão da dependência ***"^1.0.0"***.  
O acento circunflexo ***"^"*** sinaliza que quando houver uma versão `Minor` atualizada da dependência, a mesma poderá ser atualizada da mesma forma que se tiver um til ***"~"*** na frente do número da versão ***"~1.0.0"***, somente o `Fix` poderá ser atualizado.  
E se não houver nada antes do número da versão, significa que somente a versão específica pode ser utilizada.  
Dito isso, precisamos prestar muita atenção a versão do pacote e se iremos querer que o mesmo seja atualizado ou não, para não haver quebra no projeto.

[^ Sumário ^](#sumário)

## O que é o Package-lock.json?

O arquivo `package-lock.json` é criado quando se faz alguma alteração no `package.json` ou quando um pacote é instalado.  
Este arquivo não precisa ser editado manualmente, pois o mesmo é atualizado automaticamente toda vez que uma dependência é adicionada.  
Basicamente ele contém uma ordem dos pacotes que serão instalados, simplificando, ele faz a mesma coisa que o `package.json` só que com mais detalhes sobre cada pacote.

> ***DICA:***  
As vezes por motivos adversos *(edições mau sucedidas)* podem causar erros na aplicação e uma das formas de se resolver é excluir o `package-lock.json` e a pasta `mode-modules` e rodar novamente o comando `npm i` que irá instalar novamente todos os pacotes, possivelmente corrigindo o pacote corrompido ou com erro de configuração.

[^ Sumário ^](#sumário)

## Instalando o Gerenciador de Pacotes YARN

Assim como o NPM o YARN é um gerenciador de pacotes e possui uma sintaxe parecida com a do `npm`, mas verenos a seguir quais são suas diferenças.  
Mas antes de começar a mostrar suas diferenças, precisamos primeiro instalar o `yarn` de forma global e não dentro de um projeto como temos feito até agora, para isso usaremos o comando a seguir no Terminal.

```zsh
// Terminal

$ npm i -g yarn
```

Descrição do comando acima.

- `npm`: palavra-chave do gerenciador de pacote;
- `i`: sinalizador de instalação;
- `-g`: sinalizador global;
- `yarn`: pacote a ser instalado.

Para conferir se o `yarn` foi instalado de forma correta, rode o comando `yarn --version` para verificar a versão instalada no sistema.  

```zsh
// Terminal

$ yarn --version
1.22.19
```

[^ Sumário ^](#sumário)

### Instalando o Package.json com o YARN

Antes de instalar uma dependência, precisamos primeiro instalar o `package.json` muito parecido com o que fizemos utilizando o `npm`.  
Primeiro precisamos entrar na pasta do projeto que no nosso caso é a pasta `yarn` que está dentro de `conhecendo-package-json`.  
Abra o Terminal na pasta `yarn` clicando com o botão direito na mesma e selecionando "Abrir no Terminal Integrado" e rodando logo em seguida o comando `yarn init -y` para criar um `package.json` padrão.  

```zsh
// Terminal

$ yarn init -y

yarn init v1.22.19
success Saved package.json
```

Assim como no `npm` foi criado o `package.json`, mas é um arquivo menor e com menos opções, mas que também podemos editar, adicionando, excluindo ou atualizando.  

```json
// package.json

{
  "name": "yarn",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

No nosso caso, iremos adicionar a chave `"scripts": {"start": "node index.js"}` para poder usar o comando `yarn start` no Terminal para podermos rodar nossos arquivos.

```json
// package.json

{
  ...
  "scripts": {
    "start": "node index.js",
    "roda": "node index.js"
  }
}
```

> ***DICA:***  
Diferentemente do NPM, no YARN quando criamos um script personalizado `"roda": "node index.js"`, não é preciso adicionar o sinalizador `run` para poder executar o arquivo, bastando apenas digitar `yarn roda` *(que é o nosso caso)*.

[^ Sumário ^](#sumário)

### Instalando uma Dependencies com o YARN

Diferentemente do NPM, no YARN precisamos além de usar a palavra-chave `yarn`, precisamos também de usar o sinalizado `add` para adicionar uma dependência.  
E para pesquisar por um pacote, iremos usar também o site do NPM, pois o YARN usa o mesmo catálogo.
Agora vamos instalar o mesmo pacote que instalamos no NPM, para isso utilizaremos o comando `yarn add node-emoji` e abaixo teremos o comando e a saída no Terminal.  

```zsh
// Terminal

$ yarn add node-emoji

yarn add v1.22.19
info No lockfile found.

[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
success Saved 6 new dependencies.

info Direct dependencies
└─ node-emoji@2.1.0

info All dependencies
├─ @sindresorhus/is@3.1.2
├─ char-regex@1.0.2
├─ emojilib@2.4.0
├─ node-emoji@2.1.0
├─ skin-tone@2.0.0
└─ unicode-emoji-modifier-base@1.0.0
Done in 2.50s.
```

Note que o `yarn` tem uma saída mais completa, mostrando o pacote instalado, juntamente com suas dependências, tudo isso dentro da pasta `node_modules`.  

Assim como foi criada a pasta `node_modules`, também foi criado o arquivo `yarn.lock` que contém todas as dependências instaladas *(também não deve ser editado)*.

Também foi acrescentado ao `package.json` uma nova chave chamada `"dependencies":` contendo a dependência que acabou de ser instalada.  

```json
// package.json

{
  ...
  "dependencies": {
    "node-emoji": "^2.1.0"
  }
}
```

[^ Sumário ^](#sumário)
  
### Instalando uma devDependencies com o YARN

Para instalar uma `devDependencies` é praticamente a mesma coisa que no NPM, com a diferença de usar `yarn add` antes, no caso o comando completo ficará assim `yarn add -D chalk`, onde `-D` sinaliza que é uma ***Dependência de Desenvolvimento***.

```zsh
// Terminal

$ yarn add -D chalk

yarn add v1.22.19

[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
success Saved 1 new dependency.

info Direct dependencies
└─ chalk@5.3.0

info All dependencies
└─ chalk@5.3.0
Done in 1.42s.
```

E mais uma vez, atualiza o `package.json` adicionando mais uma chave a `"devDependencies":`, contendo o pacote que acabamos de instalar.  

```json
// package.json

{
  ...
    "devDependencies": {
    "chalk": "^5.3.0"
  }
}
```

[^ Sumário ^](#sumário)

## PROJETO I - Módulo Chalk

Agora iremos iniciar um novo projeto, crie uma pasta chamada `projeto1` dentro da pasta `pacotes`.  
Em seguida, rode no terminal o comando para criar o `package.json` com os valores padrão, `npm init -y`.

```zsh
// Terminal

$ npm init -y
```

```json
// package.json

{
  "name": "projeto1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

[^ Sumário ^](#sumário)

### Instalando Chalk como Dependência de Produção

Instale o pacote ***Chalk*** como uma dependência de produção no projeto.  
Dentro da pasta `projeto1`, execute no Terminal o comando `npm i chalk`.

```zsh
// Terminal

$ npm i chalk
```

```json
// package.json

{
  "name": "projeto1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

[^ Sumário ^](#sumário)

### Editando o Package.json

Como o pacote ***Chalk*** utiliza a sintaxe ***ECMAScript*** precisamos habilitar o suporte ao mesmo acrescentando a chave `"type": "modules"`.  

Adicione no `package.json` o script `"start": "node index.js"`, para que possamos executar nosso projeto no Terminal através do comando `npm start`.  

```json
// package.json
{
  ...
  "type": "module",
  "scripts": {
    "start": "node index.js"
  },
  ...
}
```

[^ Sumário ^](#sumário)

### Criando o arquivo Principal

Dentro da pasta `projeto1`, crie um arquivo chamado `index.js` onde conterá nosso Código Principal.

```js
// index.js

import chalk from "chalk"

const azul = (texto) => console.log(chalk.blue(texto))
const aviso = (texto) => console.log(chalk.bgYellowBright.bold(texto))
const erro = (texto) => console.log(chalk.bgRed.bold.italic(texto))

azul('Olá, eu sou um texto azul!')
aviso(' Preciso te informar algo importante! ')
erro(' Algo deu muito errado!!! ')

```

Como pode ser visto no código acima, foi utilizado a ***Sintaxe ECMAScript*** para fazer a importação do módulo `import chalk from 'chalk'` e também podemos perceber que quando instalamos um módulo externo não precisamos indicar o caminho relativo, pois o ***Node.js*** reconhece automaticamente.  

Foram criadas 3 Funções *(azul, aviso e erro)*, utilizamos ***arrow functions*** para poder facilitar, onde a Função Anonima recebe o parâmetro `texto` e irá retornar um `console.log()` recebendo por parâmetro a instância do `chalk` com suas propriedades encadeadas `chalk.bgYellow.bold` recebendo o `(texto)`.  

Por fim, chamamos as 3 funções criadas cada uma com seu referido texto.  

Executando o comando `npm start` no terminal, verá o resultado.

### Instalando o Pacote Server

Agora iremos instalar um pequeno servidor básico para que possamos prover uma página web para utilizar nos projetos adiante.  
Para isso, ainda dentro da pasta `projeto1` iremos executar no Terminal o comando `npm i server` que irá instalar o servidor, para mais informações de como usar acesse o [site](https://serverjs.io/).  

```zsh
// Terminal

$ npm i server

npm WARN deprecated csurf@1.11.0: Please use another csrf package

added 212 packages, and audited 214 packages in 43s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Como podemos ver, somente com a instalação desde Pacote `server` foram instalados 212 dependências e com isso a pasta `node_modules` ficou enorme.  

Com essa instalação também houve atualização no `package.json` e no `package-lock.json`.  

[^ Sumário ^](#sumário)

### Importando e definindo o Servidor dentro do Projeto1

Agora iremos importar dentro do aquivo `index.js` que se encontra dentro da pasta `projeto1`, o pacote do servidor através da ***Sintaxe ECMAScript*** utilizando:

```js
// index.js

import server from 'server'
```  

Neste momento iremos utilizar somente o ***Método Get*** e para isso, iremos utilizar o ***Destructuring*** para pegar este Método `get` que está dentro de `server.router`.  
``.  

```js
// index.js

const {get} = server.router
```  

Essas informações se encontram na [página](https://serverjs.io/) do Pacote Server.

[^ Sumário ^](#sumário)

### Inicializando o Servidor

Para isso, iremos criar nosso `server()` que irá receber um Objeto contendo as configurações `{}` e um `Array[]` contendo as rotas `[]`.  

- Como configuração, só iremos configurar a porta `port:` que será a `8080` e teremos nosso servidor ativo;
- Agora no `Array[]`, iremos configurar as rotas:
  - A Sintaxe utilizada pelo Método Get é a seguinte, primeiro definimos a Rota e depois a Função que será chamada;
  - `get("/",` será a nossa Rota;
  - `(ctx) =>` Função Anônima;
  - `"Olá Mundo")` retorno da Função.

```js
// index.js

server({ port: 8080 }, [
    get('/', (ctx) => 'Olá Mundo!'),
])
```

O quê o comando `get('/', (ctx) => 'Olá Mundo!')` faz:  

Quando quando houver uma requisição `get` para `/`, irá executar a Função Anônima `(ctx)` que iá retornar `=>` uma página contendo `Olá Mundo!`.

Para testar e verificar se tudo foi configurado e definido corretamente, rode no terminal o comando `npm start`, logo depois abra o navegador e acesse o endereço [http://localhost:8080](http://localhost:8080) para verificar se aparece a página contendo a frase ***Olá Mundo!***.  

Mas agora se fizermos alguma alteração no código e depois salvar, as modificações não irão aparecer automaticamente na página, pois precisamos parar o servidor com o comando `CTRL C` e depois iniciar novamente o servidor `npm start` com o novo código e isso é muito chato de se ficar fazendo, então, para facilitar iremos instala outro pacote que ficará observando as alterações feitas nos arquivos e atualizando a página.

[^ Sumário ^](#sumário)

### Instalando o Pacote Nodemom como devDependencies

Como já vimos anteriormente, iremos instalar o Nodemom como uma Dependência de Desenvolvimento através do comando `npm i -D nodemon`.  

```zsh
// Terminal

$ npm i -D nodemon

added 33 packages, and audited 247 packages in 3s

23 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Como podemos ver acima, foram instaladas 33 dependências para o Pacote Nodemon e abaixo veremos no `package.json` ele adicionado como uma `devDependencies`.

```json
// package.json

  "devDependencies": {
    "nodemon": "^3.0.1"
  }
```

Agora para que funcione como esperamos, precisado editar o script `start` para que use o comando `nodemon` ao invés de `node`, para quando executarmos o comando `npm start` no Terminal, o servidor inicie com o atualização automática, pois, o `Nodemon` ficará observando as modificações feitas no arquivo `index.js`.  

```json
// package.json

  "scripts": {
    "start": "nodemon index.js"
  },
```

Agora quando executamos no Terminal o comando `npm start` temos a seguinte saída informando:

- `[nodemon]` para reiniciar a qualquer momento, digite `rs`
- `[nodemon]` observando caminho(s): *.*
- `[nodemon]` extensões de observação: js,mjs,cjs,json

Agora quando fizermos alguma alteração e salvar, basta somente atualizar a página com `F5` para poder ver a modificação.  

Como o Nodemon foi instalado como uma `devDependencies`, ele não estará disponível em produção, somente enquanto estivermos desenvolvendo.  

[^ Sumário ^](#sumário)

### Instando o Pacote Luxon de Hora Mundial

Com esse [Pacote](https://www.npmjs.com/package/luxon), podemos saber a ***data e hora local*** em qualquer cidade no mundo. E para que possamos utilizar esse pacote, primeiro precisamos matar/parar o servidor `CTRL C` caso ele esteja rodando, depois, iremos instalá-lo como uma ***Dependência de Desenvolvimento*** dentro da pasta `projeto1` através do comando `npm i luxon`.  

```zsh
// Terminal

$ npm i luxon
```

```json
// package.json

...
  "dependencies": {
    ...
    "luxon": "^3.3.0",
    ...
  },
...
```

Agora que o novo pacote já está instalado, podemos iniciar novamente o servidor.

```zsh
// Terminal

$ npm start
```

[^ Sumário ^](#sumário)

### Adicionando novas Rotas

Agora que o ***Pacote Luxon*** já está instalado, iremos utiliza-lo para criar as novas rotas para mostrar a hora local das cidades.  
Faça as seguintes modificações dentro do arquivo `index.js`.

- `import { DateTime } from 'luxon'`: Primeiro precisamos importar o Método `DateTime` do Módulo Luxon;
- `get('/roma',`: Adicionamos a Rota `/roma`;

- `() => {`: Criamos a Função Anônima;

- `const hora =`: Criamos a constante `hora` para guardar a hora local de Roma;

- `DateTime.local(`: Responsável por pegar a hora local de algum lugar, e é aqui dentro que iremos pegar um Objeto `{}` responsável por pegar a zona temporal (o Time Zone) fuso horário local;

- `{zone: 'Europe/Rome'})`: Pega o Fuso Horário de Roma;

- `.toFormat('HH:mm:ss')`: Formata a hora para 24h `HH`, minutos `mm` e segundos `ss`. Caso o formato fosse pra 12h deveria colocar `hh`;

- `` return `Hora local de Roma ${hora}` ``: Retorna o texto Formatado com a hora local.

```js
// index.js

...
    get('/roma', () => {
        const hora = DateTime.local({zone: 'Europe/Rome'}).toFormat('HH:mm:ss')
        return `Hora local de Roma ${hora}` 
    }),
...
```

Para terminar iremos criar uma Função para imprimir no Terminal a Cidade e a hora local da mesma, formatando com o Chalk.

```js
// index.js

...
// Função que imprime no terminal a Cidade e a hora local
function imprimeHoraLocal (cidade, hora){
    return console.log(chalk.bgBlue.bold(
        ` Em ${cidade} são ${hora} horas. `
    ))
}

server({ port: 8080 }, [
    get('/', (ctx) => 'Olá Mundo!'),
    get('/roma', () => {
        const hora = DateTime.local({zone: 'Europe/Rome'}).toFormat('HH:mm:ss')
>>>>    imprimeHoraLocal('Roma', hora)
        return `Hora local de Roma ${hora}` 
    })
])
...
```

Para criar a Rotas para as outras cidades é só repetir o processo a partir de `get('/roma',)` e realizar as substituições a seguir:

- `get('/luanda',)` `zone: 'Africa/Luanda'` `'Luanda'`;
- `get('/seoul',)` `zone: 'Asia/Seoul'` `'Seoul'`;
- `get('/cuiaba',)` `zone: 'America/Cuiaba'` `'Cuiabá'`;
- `get('/brasilia',)` `zone: 'America/Sao_Paulo'` `'Brasília'`.

Com isso, vemos que utilizando os pacotes, `server` para criar um servidor básico, `nodemon` para ficar atualizando o servidor, `Luxon` para pegar a Hora Mundial Local e o `chalk` para formatar o texto no Terminal, conseguimos criar nossa aplicação sem precisar construir tudo do zero.

[^ Sumário ^](#sumário)

## PROJETO II - Pensador Scraping

Neste projeto iremos fazer um Web Scrapping do site [PENSADOR](https://www.pensador.com/) procurando por um tipo de poesia, mensagem ou frase.  

Como pode ser visto na página do Módulo [pensador-scraping](https://www.npmjs.com/package/pensador-scrap), existe alguma formas de se utilizar tais como:

- Buscar no site e retorna uma lista de pensamentos, permitindo a quantidade de resultados;
- Buscar informações de um determinado autor;
- Buscar os Top 9 Autores do site;
- Buscar a biografia de um autor;
- Escolha um pensamento "aleatório" de algum tópico.

Mas a forma que iremos utilizá-lo será escolhendo um pensamento aleatório de um determinado pensador, e depois salvar esse pensamento em um arquivo.  

Então vamos iniciar nosso projeto, teremos que criar uma pasta `projeto2` dentro da pasta `pacotes`.  

Depois dentro da pasta `projeto2` executar o comando `npm init -y` para iniciar o `package.json` com os valores padrão.  

```json
// package.json

{
  "name": "projeto2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Editar o `package.json` adicionando a chave `"type": "module"` para poder usar a ***Sintaxe ECMAScript***.  

```json
// package.json

...
  "type": "module",
...
```

E adicionar o script `"start": "node index.js"` também dentro do `package.json`.

```json
// package.json

...
  "scripts": {
    "start": "node index.js",
    ...
  },
...
```

[^ Sumário ^](#sumário)

### Instalando o Módulo Pensador Scraping

Agora que já criamos e configuramos o `package.json` podemos iniciar nosso projeto instalando o pacote com o comando `npm i pensador-scrap`.

Após executar esse comando no terminal, teremos instalado o pacote com suas dependências e com isso criando a pasta `node_modules` e o arquivo `package-lock.json`.  
A seguir veremos a saída no Terminal do comando acima:

```zsh
// Terminal

$ npm i pensador-scrap

added 23 packages, and audited 24 packages in 9s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Após a instalação do pacote, o `package.json` foi novamente atualizado sendo adicionado a chave `"dependencies":` contendo o Módulo que acabado de instalar.  

```json
// package.json

...
  "dependencies": {
    "pensador-scrap": "^0.1.0"
  }
...
```

[^ Sumário ^](#sumário)

### Criando o Código Principal - Pensador Scraping

Dentro de `projeto2`, crie um arquivo chamado `index.js` onde iremos definir nosso programa.  

- `import pensador from 'pensador-scrap'`: Importa o Módulo `pensador-scrap` para a variável `pensador`;

- `pensador.search()`: Método que realiza a busca.  
Dentro passa um Objeto `{}` contendo as informações;

- `query: 'Tesla',`: O parâmetro ***query*** faz a pesquisa pela pessoa, no caso ***Tesla***.

- `limit: 2`: O parâmetro ***limit*** limita a quantidade de pensamentos da pesquisa no caso ***2***.

```js
// index.js

  import pensador from 'pensador-scrap'

  pensador.search ({
      query: 'Tesla',
      limit: 2
  })
```

Executando esse primeiro programa, através do comando `npm start` no Terminal, não teremos nenhuma saída, pois, não adicionamos nenhuma forma de apresentar nenhuma informação, além de ter demorado um pouco pois o código teque que se conectar com a api para fazer a pesquisa.  

Agora iremos realizar as modificações para que possamos receber as informações de retorno da chamada `pensador.search({query: 'Tesla', limit: 2})`.  

Mas essa é uma Função as***Síncrona*** e para receber esse retorno temos que utilizar a sintaxe de ***Promise*** ou a sintaxe de ***async/await*** para poder pegar o resultado.  

Em nosso caso, iremos utilizar a sintaxe async/await.

> ***DICA:***  
*Uma função as***Síncrona*** pode conter uma expressão await, que pausa a execução da função as***Síncrona*** e espera pela resolução da Promise passada, e depois retoma a execução da função as***Síncrona*** e retorna o valor resolvido.*

Essa Função irá retornar um Objeto contendo algumas coisa, e entre essas coisas estão um erro e um Objeto de sucesso `{error, success}`.  
Então iremos utilizar a ***Sintaxe Destructuring*** para pegar um possível erro `const {error,` e o sucesso `success}` recebendo um await `= await` da função `pensador.search({query: 'Tesla', limit: 2})`.  
Recebendo o do pensamento do Pensador.  

Para que possamos ver os resultados da pesquisa, precisamos mostrar no Terminal através `console.log(error)` que nos mostrá se houver algum erro e o `console.log(success)` que nos mostrará as informações da pesquisa, abaixo a saída no terminal.

```zsh
// Terminal

$ $ npm start

> projeto2@1.0.0 start
> node index.js

undefined

{
  author: {
    name: 'Tesla',
    thought_total: 58,
    avatar_url: '',
    info: '',
    associated: [ 'https://www.pensador.com/frases_tesla/' ],
    bio: '',
    tags: ''
  },
  thought: [
    {
      author: 'Nikola Tesla',
      content: 'Se você quiser descobrir os segredos do Universo, pense em termos de energia, frequência e vibração.',
      image_url: 'https://cdn.pensador.com/img/frase/ni/ko/nikola_tesla_se_voce_quiser_descobrir_os_segredos_do_un_l9e41qd.jpg',
      url: 'https://www.pensador.com/frase/MjIzMzM2Nw/'
    },
    {
      author: 'Nikola Tesla\n' +
        '\n' +
        '\n' +
        '\n' +
        '\n' +
        'A Visit to Nikola Tesla, Dragislav L. Petković in Politik, 1927',
      content: 'Deixem que o futuro diga a verdade e avalie cada um de acordo com o seu trabalho e realizações. O presente pertence a eles, mas o futuro pelo qual eu sempre trabalhei pertence a mim.',
      image_url: 'https://cdn.pensador.com/img/frase/ni/ko/nikola_tesla_deixem_que_o_futuro_diga_a_verdade_e_avali_lrj40j9.jpg',
      url: 'https://www.pensador.com/frase/NjczNDAx/'
    }
  ],
  query: 'Tesla',
  total: 2
}
```

Podemos ver que a resposta do `console.log(error)` foi `undefined`, e todo o resto foi o Objeto de retorno de `success`.  

Mas ainda não é isso que estamos procurando, pois precisamos receber o pensamento `thought:` do Pensador.  

Como em nossa pesquisa foi pedido mais de um pensamento, no caso 2 o nosso retorno foi um `Array[]` contendo 2 pensamentos.  

```zsh
// Terminal

  thought: [
    {
      author: 'Nikola Tesla',
      content: 'Se você quiser descobrir os segredos do Universo, pense em termos de energia, frequência e vibração.',
      image_url: 'https://cdn.pensador.com/img/frase/ni/ko/nikola_tesla_se_voce_quiser_descobrir_os_segredos_do_un_l9e41qd.jpg',
      url: 'https://www.pensador.com/frase/MjIzMzM2Nw/'
    },
    {
      author: 'Nikola Tesla\n' +
        'A Visit to Nikola Tesla, Dragislav L. Petković in Politik, 1927',
      content: 'Deixem que o futuro diga a verdade e avalie cada um de acordo com o seu trabalho e realizações. O presente pertence a eles, mas o futuro pelo qual eu sempre trabalhei pertence a mim.',
      image_url: 'https://cdn.pensador.com/img/frase/ni/ko/nikola_tesla_deixem_que_o_futuro_diga_a_verdade_e_avali_lrj40j9.jpg',
      url: 'https://www.pensador.com/frase/NjczNDAx/'
    }
  ],
```

O que queremos obter deste Objeto de Sucesso, é um pensamento aleatório do pensador pesquisado.  

[^ Sumário ^](#sumário)

### Lógica Abordada - Pensador Scraping

A lógica abordada será, pegar um quantidade grande de pensamentos e dentre eles escolher um aleatoriamente.  

Então ao invés de selecionar 2 pensamentos `limit: 2`, irenos selecionar 58 pensamentos `limit: 58`, com isso, teremos um ***`Array[]`*** contendo ***58 Elementos*** e iremos escolher ***1 elemento aleatório*** dentre os 58 elementos trazidos da API.  

Para fazer isso, podemos extrair desse Objeto `success` somente o `Array[]` de pensamentos `thought`.  
Para isso vamos criar uma constante `const pensamentos` que irá receber o `Array[]` de pensamentos `= success.thought`.

```js
// index.js

...
const pensamentos = success.thought
...
```

Através da constante `pensamentos` conseguimos pegar o `Array[]` de 58 elementos, agora precisamos escolher aleatoriamente 1 elemento deste `Array[]`.  
Para isso, iremos criar um índice utilizando a ***Função Math.random()***:  

- `const indiceAleatorio`: Constante que contém o índice;

- `= Math.floor(`: Função que retorna o menor número inteiro;
  
- `Math.random() * pensamentos.length)`: Função Aleatória que multiplica o a quantidade de pensamentos.

```js
// index.js

...
const indiceAleatorio = Math.floor(Math.random() * pensamentos.length)
...
```

Agora que temos nosso `indiceAleatório` vamos utilizá-lo para selecionar o nosso pensamento.  
Então teremos a constante `const` de `pensamentoSelecionado` que irá receber `=` pensamentos `pensamentos` na posição indice aleatório `[indiceAleatório]`.

```js
// index.js

...
const pensamentoSelecionado = pensamentos[indiceAleatorio]
...
```

E para que possamo ver no terminal, precisamos formatar o console.log().

- `${pensamentoSelecionado.author}`: Mostra o autor do pensamento;
- `${pensamentoSelecionado.content}`: Mostra o conteúdo do Pensamento.
- `${pensamentoSelecionado.image_url}`: Mostra a imagem do Pensador com o Pensamento.
- `${pensamentoSelecionado.url}`: Montra a página completa, com a imagem e o pensamento.

Veja agora o Código Principal completo.

```js
// index.js

import pensador from 'pensador-scrap'

const {error, success} = await pensador.search ({
    query: 'Tesla',
    limit: 58
})

const pensamentos = success.thought
const indiceAleatorio = Math.floor(Math.random() * pensamentos.length)
const pensamentoSelecionado = pensamentos[indiceAleatorio]

console.log(`Mensagem de erro: ${error}`)
console.log(`\nPensamento de ${pensamentoSelecionado.author}
${pensamentoSelecionado.content}`)

```

A saída no Terminal é a seguinte:

```zsh
// Terminal

$ $ npm start

> projeto2@1.0.0 start
> node index.js

Mensagem de erro: undefined

Pensamento de Nikola Tesla
Esteja sozinho, este é o segredo da invenção, estar sozinho, isto é quando as ideias nascem.
```

Concluindo nossa primeira parte do projeto, conseguimos pegar um pensamento aleatório de um determinado Pensador, retirado do site [pensador.com](https://www.pensador.com/) usando poucas linhas de código.  
O próximo passo é salvar essas informações em arquivo.

[^ Sumário ^](#sumário)

## Módulo FS - File System

Para que possamos salvar um pensamento em arquivo, iremos precisar de um ***Módulo Nativo do Node.js***.  
O Módulo em questão é o ***File System*** `fs`, como ele temos a possibilidade de manipular o sistema de arquivos do Sistema Operacional, podemos encontrar mais informações sobre este e outros ***Módulos Nativos*** na [***documentação***](https://origin.nodejs.org/dist/latest-v18.x/docs/api/fs.html) do Node.js.  

O import é feito igual ao outros com a diferença que não precisa colocar o caminho relativo do Módulo assim como fizemos com os Módulos instalados, bastando usar o import `import fs from 'fs'`.  

```js
// index.js

...
import fs from 'fs'
...
```

Após adicionar o import, podemos salvar o arquivo e executar o comando `npm start` no Terminal, e veremos que não será retornado nenhum erro, isso ocorre pelo fato de o Módulo `fs` já vir instalado de forma nativa no Node.js.

Antes de fazermos a escrita no arquivo, iremos fazer algumas alterações no texto que vamos salvar.  
Ao invés de só salvar o pensamento selecionado `pensamentoSelecionado`, vamos criar uma nova constante `const` chamada `salvarPensamento` que irá usar uma Template String `` `\nPensamento de ${pensamentoSelecionado.author} "${pensamentoSelecionado.content}"` `` para salvar o pensamento.

```js
// index.js

...
const salvarPensamento = `\nPensamento de ${pensamentoSelecionado.author}
"${pensamentoSelecionado.content}"`
...
```

- `pensamentoSelecionado.author`: Pega o autor, no pensamento selecionado;
- `pensamentoSelecionado.content`: Pega o pensamento;

[^ Sumário ^](#sumário)

### Salvando um Pensamento em Arquivo

Agora iremos salvar o pensamento em um arquivo, e para isso vamos usar o Módulo `fs.` e uma Função interna que irá sobrescrever o conteúdo do arquivo `writeFileSync()`, esta Função recebe 3 parâmetros: o primeiro é o local e o nome do arquivo `'pensamentos.txt'`, o segundo é o dado a ser salvo `salvarPensamento` e o terceiro é a codificação `'utf8'`.  
Com essa função, salvamos o pensamento no arquivo `pensamento.txt`, mas nos deparamos com um problema, pois toda vez que executarmos o programa, o arquivo será sobrescrito e apagará o conteúdo anterior.

```js
// index.js

...
fs.writeFileSync('pensamentos.txt', salvarPensamento, 'utf8')
...
```

[^ Sumário ^](#sumário)

#### Comandos FileSystem

- `fs.writeFileSync(a, b, c)`  
Cria e sobrescreve o conteúdo do arquivo de forma ***Síncrona***, precisa de 3 parâmetros:  

  - `a` Nome do arquivo;
  - `b` Dado a ser salvo;
  - `c` Codificação do arquivo (ex. `utf8`).

- `fs.appendFileSync(a, b, c)`  
Cria e adiciona na última linha do arquivo o conteúdo do arquivo de forma ***Síncrona***, precisa de 3 parâmetros:  

  - `a` Nome do arquivo;
  - `b` Dado a ser salvo;
  - `c` Codificação do arquivo (ex. `utf8`).

- `fs.readFileSync(a, c)`  
Faz a leitura do conteúdo do arquivo de forma ***Síncrona***, precisa de 2 parâmetros:  

  - `a` Nome do arquivo;
  - `c` Codificação do arquivo (ex. `utf8`).

Agora que terminamos vamos ver como ficou o nosso programa:

```js
// index.js

import pensador from 'pensador-scrap'
import fs from 'fs'

const {error, success} = await pensador.search ({
    query: 'Tesla',
    limit: 58
})

const pensamentos = success.thought
const indiceAleatorio = Math.floor(Math.random() * pensamentos.length)
const pensamentoSelecionado = pensamentos[indiceAleatorio]
const salvarPensamento = `Pensamento de ${pensamentoSelecionado.author}
"${pensamentoSelecionado.content}"\n\n`

// Sobrescreve o conteúdo do arquivo
// fs.writeFileSync('pensamentos.txt', salvarPensamento, 'utf8')

// Adiciona o conteúdo na última linha do arquivo
fs.appendFileSync('pensamentos.txt', salvarPensamento, 'utf8')

// Lê o conteúdo do arquivo
const lerArquivo = fs.readFileSync('pensamentos.txt', 'utf8')

console.log(`Mensagem de erro: ${error}\n`)
console.log(`Conteúdo do arquivo Salvo:\n\n${lerArquivo}`)
```

Conclusão, vimos como pegamos os dados de uma variável e salvamos, atualizamos e depois lemos essas informações utilizando o Módulo `fs` FileSystem nativo do Node.js.  

Mas, ainda temos mais uma parte para terminar, pois ainda não estamos fazendo o tratamento de erro, mas veremos a seguir.

[^ Sumário ^](#sumário)

### Tratamento de Erro - Pensador Scraping

Nós temos nosso programa funcionando quando temos um retorno de sucesso `{success}`, quando o pensador é encontrado através da pesquisa `query: 'Pensador'`.  

Mas quando o retorno é um erro `{error}` o programa quebra, causa uma falha e para, pois, não estava fazendo nenhum tratamento neste retorno e é isso que iremos fazer mais adiante.  

O que iremos fazer é de alguma forma identificar se ocorreu um erro e se existir definir um comportamento para que a ação seja executada.  

A abordagem adotada será o ***TRY/CATCH***, com isso o programa vai tentar realizar uma ação `try{}`, se o retorno for `success` ele continua a programação e realiza as tarefas, mas se o retorno for `error`, `catch(error){}` ele irá para o tratamento do erro e não irá quebrar, só terá um outro comportamento.  

Iremos colocar o comportamento do nosso programa dentro do escopo do `try{}`, tivemos que fazer outras modificações no código.  
Criamos mais 4 variáveis, 2 para o Código funcionar com o ***TRY/CATCH*** e 2 para melhorar a formatação.  

```js
// index.js

...
let salvarPensamento
let lerArquivo
const linha = '='

const autor = 'Tesla'
...
```

```js
// index.js

...
try {
  const pensamentos = success.thought
    const indiceAleatorio = Math.floor(Math.random() * pensamentos.length)
    const pensamentoSelecionado = pensamentos[indiceAleatorio]
    salvarPensamento = `Pensamento de ${pensamentoSelecionado.author}
"${pensamentoSelecionado.content}"\n\n${linha.repeat(80)}\n\n`
}
...
```

E caso ele encontre algum erro na execução ele irá entrar no `catch(erro){}`.  
  
```js
// index.js

...
catch (erro) {
  salvarPensamento = `"${autor}" Pensador inexistente.\n\n${linha.repeat(80)}\n\n`
}
...
```

O bloco `finally{}` irá executar independentemente se executou ou não o `try` ou o `catch`.  

```js
// index.js

...
finally {
    // Sobrescreve o conteúdo do arquivo
    // fs.writeFileSync('pensamentos.txt', salvarPensamento, 'utf8')

    // Adiciona o conteúdo na última linha do arquivo
    fs.appendFileSync('pensamentos.txt', salvarPensamento, 'utf8')

    // Lê o conteúdo do arquivo
    lerArquivo = fs.readFileSync('pensamentos.txt', 'utf8')

    console.log(`Mensagem de erro: ${error}\n`)
    console.log(`Conteúdo do arquivo Salvo:\n\n${lerArquivo}`)
}
...
```

[^ Sumário ^](#sumário)

## PROJETO III - Banco de Dados

Neste projeto iriemos fazer uma aplicação CRUD *(Create, Readme, Update, Delete)*, ou seja: ***criar, ler, atualizar e deletar*** que seria em bom português ***CLAD***, mas ninguém usa essa terminologia, :-).  

Nesta aplicação, não iremos utilizar um Banco de Dados, real como: MariaDB, MongoDB, MySql, firebase, etc. Iremos utilizar um arquivo `Banco.js` que irá simular nosso ***Banco de Dados***.  

Nós vamos desenvolver um ***Backend*** que será um arquivo responsável por fazer iterações com esse pseudo banco de dados e teremos um ***Frontend*** que será nossa interface no Terminal, onde iremos interagir para realizar operações neste Banco.

[^ Sumário ^](#sumário)

## Criando o Projeto III

Primeiro devemos criar e configurar nosso projeto assim cono fizemos nos anteriores.  

- Dentro da pasta `pacotes`, crie a pasta `projeto3`;

- Abra o terminal na pasta `projeto3`, clique com o botão direito na pasta e depois escolha ***"Abrir Terminal Integrado"***;

- Execute o comando no Terminal `npm init -y` para criar o `package.json` com os valores padrão;

- Edite o `package.json` com as seguintes informações:

  - `"description": "",` breve descrição sobre o projeto.

  - `"type": "modules",` habilita o suporte para sintaxe ECMAScript;

  - `"start": "node index.js",` crie dentro do Objeto `"scripts": {}`, script para executar o programa no Terminal;

  - `"author": "",` preencha com seu nome.

```json
// package.json

{
  "name": "projeto3",
  "version": "1.0.0",
  "description": "Pseudo Banco de Dados em arquivo",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Marcos Vinicius",
  "license": "ISC"
}
```

[^ Sumário ^](#sumário)

## Instalando o Módulo Terminal Kit - Interface

É uma biblioteca de terminal completa com: 256 cores, estilos, teclas e manuseio do mouse, campo de entrada, barras de progresso, buffer de tela *(incluindo **composição de 32 bits** e **carregamento de imagem**)*, buffer de texto e muito mais...

Quer você precise apenas de cores e estilos, criar uma ferramenta de linha de comando interativa simples ou um aplicativo de terminal complexo: esta é a biblioteca de terminal absoluta para Node.js!

NÃO depende de ncurses.

Alguns tutoriais estão disponíveis [AQUI](blog.soulserv.net/tag/terminal).  

Instruções de como instalar e usar na [página](https://www.npmjs.com/package/terminal-kit) do pacote no site do NPM.  

Para instalar o pacote iremos utilizar o comando `npm i terminal-kit` no terminal.  

```zsh
// Terminal

$ npm i terminal-kit
```

Após isso teremos a pasta `node_modules` criada, o arquivo `package-lock.json` criado e o `package.json` atualizado com a dependência adicionada.

```json
// package.json

...
  "dependencies": {
    "terminal-kit": "^3.0.0"
  }
...
```

[^ Sumário ^](#sumário)

## Criando o Backend - Banco de Dados

Agora iremos iniciar a implementação do ***Backend***, crie o arquivo `Banco.js` dentro da pasta `projeto3`, é nele que iremos implementar a lógica do nosso banco, onde iremos criar o nosso CRUD.  

A princípio iremos começar com um ***Array[]*** para armazenar nossas informações, então, vamos começar a criar nossas funções de modo a armazenar os elementos, dentro deste array.  

Então vamos começar criando uma variável `let` chamada `dadosManipulaveis`que irá receber `=` um array vazio `[]`.  

```js
// Banco.js

...
// Aceita Objetos no formato {nome, id}
let dadosManipulaveis = []
...
```

Agora, iremos criar as três Funções que irão interagir com os `dadosManipulaveis` são elas:

- `function salvar(){}` Função que irá `salvar os dados` no `arra[]`;
- `function deletar(){}` Função que irá `excluir um dado` através de um `id` único no `Array[]`;
- `function pegarDados(){}` Função que irá `ler os dados` do `Array[]`.

[^ Sumário ^](#sumário)

### Função salvar()

Então, vamos começar pela função `salvar()` ela irá receber algum tipo de Objeto que queremos salvar nos `dadosManipuláveis` que serão dois parâmetros `(nome, id)` nome e id.

Agora dentro do escopo `{}` da Função vamos colocar nossa logica, `dadosManipulaveis.push({nome, id})` adiciona os dados no array, aqui `({nome, id})` estamos utilizando a feature do ECMAScript cuja a chave tem o mesmo nome do valor, não precisa ser declarada, seria a mesma coisa que `({nome: nome, id: id})`.

```js
// Banco.js

...
// Função Salvar
function salva(nome, id){
    dadosManipulaveis.push({nome, id})
}
...
```

[^ Sumário ^](#sumário)

### Função deletar()

Na Função `deletar()` iremos receber por parâmetro um `id`, para que possamos fazer a exclusão de um elemento de um Array[], existem algumas abordagens, a que iremos utilizar é, substituir o Array[] original `dadosManipulaveis`, pelo mesmo Array[], sem o elemento que estamos tentando deletar.  

Para isso, vamos fazer uma filtragem e retirar este elemento.

Então vamos criar uma constante `const` chamada `dadosFiltrados` que irá receber `=` os `dadosManipulaveis.filter()` e dentro do filter vamos criar uma ***Arrow Function*** que irá receber por parâmetro um dado `(dado) =>` que retornará `{ return` um id de um dado `dado.id` se for diferente `!=` do id passado `id }` e por fim, vamos atualizar os `dadosManipulaveis` passando os `dadosFiltrados`.

```js
// Banco.js

...
// Função Deletar
export function deletar(id){
    const dadosFiltrados = dadosManipulaveis.filter((dado) => {
        return dado.id != id
    })
    dadosManipulaveis = dadosFiltrados
}
...
```

[^ Sumário ^](#sumário)

### Função pegaDados()

Esta Função irá retornar os `dadosManipulaveis` em um formato para poder mostrar no Terminal, para isso iremos criar uma constante `const` chamada `dadosImprimiveis` que irá receber `=` os `dadosManipulaveis.map()` e dentro do map vamos criar uma ***Arrow Function*** que irá receber por parâmetro um `dado` `(dado) =>` e retornará uma Template String contendo o nome e o id do dado `` {`return ${dado.nome} -> ${dado.id}`} `` e por fim retorna `return` os `dadosManipulaveis`.

```js
// Banco.js

...
// Função Ler Dados
function pegaDados(){
    const dadosImprimiveis = dadosManipulaveis.map((dado) => {
        return `${dado.nome} -> ${dado.id}`
    })
    return dadosManipulaveis
}
...
```

Para que possamos usar as funções que acabamos de criar, precisamos exportá-las, para que possamos importar em nosso código principal, para isso devemos colocar a palavra chave `export` antes das Funções que queremos exportar, o código atualizado aficará assim:

```js
// Banco.js

// Aceita Objetos no formato {nome, id}
let dadosManipulaveis = []

// Função Salvar
export function salvar(nome, id){
    dadosManipulaveis.push({nome, id})
}

// Função Deletar
export function deletar(id){
    const dadosFiltrados = dadosManipulaveis.filter((dado) => {
        return dado.id != id
    })
    dadosManipulaveis = dadosFiltrados
}

// Função Ler Dados
export function pegaDados(){
    const dadosImprimiveis = dadosManipulaveis.map((dado) => {
        return `${dado.nome} -> ${dado.id}`
    })
    return dadosImprimiveis
}
```

[^ Sumário ^](#sumário)

### Código Principal - Chamando Funções

Agora iremos criar nosso Código Principal, dentro de `projeto3` crie o arquivo `index.js` onde iremos importar o pacote do Banco de Dados, depois faremos as chamadas das Funções com seus valores:

- `` import {salvar, deletar, pegaDados} from './Banco.js'
`` Importa as Funções utilizando a sintaxe destructuring.

- `salvar('Marcos', 10)` Chama a Função Salvar, passando por parâmetro o Objeto {nome:'Marcos', id: 10} e os salva no Array[].

- `deletar(10)` Chama a Função Deletar, passando o (id: 10) que será excluído do Array[] e depois atualiza o Array[] com a alteração realizada.

- `pegaDados()` Chama a Função pegaDados, que mostra o conteúdo do Array[].

[^ Sumário ^](#sumário)

### Salvando os Dados em Arquivo

Agora que já implementamos as Funções e tudo está funcionando perfeitamente, precisamos salvar os dados em arquivo para poder persistir as informações quando o programa for aberto novamente, pois como está, os dados se perdem pois só estão salvos na memória.  

Dentro da pasta `projeto3` crie um arquivo chamado `Banco.json` onde iremos armazenar os dados no formato JSON, e dentro, digite `{}` para poder identificar que é um conteúdo JSON.  

Agora dentro de `Banco.js`, iremos criar uma Função que irá persistir nossos valores, então, ela irá salvar os `dadosManipulaveis` no arquivo `Banco.json`.  

Agora iremos implementar nossa Função `function` chamada `persistirValores()` que irá transformar o Array[] `dadosManipulaveis` em um JSON.  

Então teremos uma constante `const` chamada `dadosJSON` que receberá `=` o resultado de `JSON.stringify(` ***(Função utilizada para transformar algo em JSON)*** iremos passar como parâmetro os `dadosManipulaveis, null, 4)`, e o que significam esses valores?  

A Função `JSON.stringify()` recebe três parâmetros:

- `dadosManipulaveis` os dados que serão convertidos;
- `null` a Função que de alguma forma irá selecionar algo dos dados, modificar os dados para serem salvos no formato JSON;
- `4` a quantidade de espaço entre as entradas do JSON.

Depois de termos esses dados convertido para o formato JSON, podemos salva-los no arquivo `Banco.json`, para isso, precisamos importar o Módulo FS `import fs from 'fs'` e depois, podemos continuar a implementação da Função `persistirValores()` adicionando a ***Função de Escrita do Módulo FS*** `fs.writeFileSync()` passando os parâmetros:

- `'Banco.json'` o arquivo onde os dados serão salvos;
- `dadosJSON` os dados que serão salvos;
- `'utf8'` codificação dos dados.

Por fim, iremos exportar esta Função com o comando `export`, para que possamos chamá-la em nosso Código Principal.

```js
// Banco.js

import fs from 'fs'
...
// Salva os valores em formato JSON
export function persistirValores() {
    const dadosJSON = JSON.stringify(
        dadosManipulaveis, null, 4)
    fs.writeFileSync('Banco.json', dadosJSON, 'utf8')
}
...
```

Agora iremos chamá-la `persistirValores()` em nosso Código Principal `index.js` para que os dados sejam salvos, devemos colocá-la ao final do processo que queremos salvar. Não se esquecendo de adicionar a Função `persistirValores` no import do `import {salvar, deletar, pegaDados, persistirValores} from './Banco.js'`.

```js
// index.js

import {salvar, deletar, pegaDados, persistirValores} from './Banco.js'
...
persistirValores()
...
```

Executando no Terminal o comando `npm start` o programa será executado e os dados serão salvos no arquivo `Banco.json`.

```zsh
// Terminal

$ npm start
```

```json
// Banco.json

[
    {
        "nome": "Taíssa",
        "id": 40
    },
    {
        "nome": "Íris",
        "id": 2
    },
    {
        "nome": "Mary Ellen",
        "id": 20
    },
    {
        "nome": "Junior",
        "id": 24
    }
]
```

Agora que já temos os dados sendo salvo, precisamos criar a Função que faz a leitura desses dados em formato JSON.

[^ Sumário ^](#sumário)

### Fazendo a Leitura dos Dados em JSON

Agora iremos implementar nossa Função `function` que irá Lêr esses valores chamada `carregarValores(){`, então, vamos precisar pegar o texto dentro do arquivo banco, para isso, teremos uma constante `const` chamada `dadosJSON` que irá receber `=`  o arquivo em questão através do Módulo FS `fs.readFileSync()` passando por parâmetro o nome do arquivo `'Banco.json'` e a codificação `'utf8'`.  

Agora precisamos transformar esses `dadosJSON` para o formato de ***Array[]*** para que possamos ***Lêr*** e atualizar nossos `dadosManipulaveis`.  

Depois precisamos criar uma constante `const` chamada `dados` que receberá `= JSON.parse()` que irá converter `dadosJSON` para o formato de ***Array[]***.  

Pra finalizar iremos retornar `return` os `dados`,  para que possamos iniciar nossa variável `let dadosManipulaveis` com as informações salvas no arquivo `Banco.json` utilizando a ***Função*** `carregarValores()`.  

Fazendo isso, quando o programa for inicializado os valores de `dadosManipulaveis` já serão carregados com os valores do arquivo `Banco.json`, e como a Função `carregarValores()` irá servir só para inicializar os Dados Manipuláveis, ela não precisará ser exportada.  

E como não iremos exportar a Função `carregarValores()`, podemos usar uma ***Convenção de Nomenclatura*** utilizando uma underline `_` no início do nome da Função `_carregarValores()`.  

Para o ***Javascript*** não vai significar nada, mas indica para os programadores que é uma ***Função Interna do Módulo*** que será usada somente neste arquivo.

```js
// Banco.js

import fs from 'fs'

// Aceita Objetos no formato {nome, id}
let dadosManipulaveis = _carregarValores()

// Lê as informações do arquivo
function _carregarValores(){
    const dadosJSON = fs.readFileSync('Banco.json', 'utf8')
    const dados = JSON.parse(dadosJSON)
    return dados
}
...
```

[^ Sumário ^](#sumário)

### Executando o Código Principal

Para que possamos testar e ver se tudo ocorreu perfeitamente, vamos executar o Código Principal no Terminal com o comando `npm start`, a seguir veremos o código:

```js
// index.js

import {salvar, deletar, pegaDados, persistirValores} from './Banco.js'

console.log(`Dados Lidos do Banco\n${pegaDados()}\n`)

salvar('Marcos', 845)
salvar('Taíssa', 840)
salvar('Edith', 869)
salvar('Íris', 82)
salvar('Mary Ellen', 820)
salvar('Junior', 824)
salvar('Lucas', 81)

console.log(`Dados Atualizados no Banco\n${pegaDados()}`)

persistirValores()

```

No Código acima estamos fazendo a leitura do arquivo `Banco.json` utilizando a Função `pegaDados()`, estamos adicionando novos dados ao arquivo `Banco.json` através da Função `salvar()` e por fim, estamos salvando os dados adicionados no arquivo `Banco.json` através da Função `persistirValores()`.  

Tudo isso estando correto, teremos um ***Array[]*** contendo os dados antigos, mais os dados recém adicionados, veremos o conteúdo do arquivo a seguir:

```json
// Banco.json

[
    {
        "nome": "Marcos",
        "id": 45
    },
    {
        "nome": "Taíssa",
        "id": 40
    },
    {
        "nome": "Marcos",
        "id": 845
    },
    {
        "nome": "Taíssa",
        "id": 840
    },
    {
        "nome": "Edith",
        "id": 869
    },
    {
        "nome": "Íris",
        "id": 82
    },
    {
        "nome": "Mary Ellen",
        "id": 820
    },
    {
        "nome": "Junior",
        "id": 824
    }
]
```

***Conclusão:***  
Por quê estamos copiando as coisas do arquivo para a memória para o Array[], para só depois realizar as alterações e depois salvar no banco novamente?  

Esta estratégia é utilizada em algumas aplicações para não realizar acessos ao banco toda hora, pois, isso pode ser muitos custoso *(em valor e em processamento)* principalmente quando no sistema o que será feito são modificações no banco.  

Então, dependendo da aplicação é mais interessante fazer a cópia do banco ou parte para a memória para faze as alterações de uma forma mais rápida, pra depois persistir as informações novamente no banco, por exemplo, se serão feitas cinco alterações, ao invés de se realizar cinco acessos ao banco, acessamos somente uma vez, realizamos as alterações e depois acessamos novamente para salvar.

[^ Sumário ^](#sumário)

### Implementando um ID

Como o `Banco.json` já está implementado e funcionando, iremos implementar um ID de auto incremento, e o que é isso:  
É um ID que será incrementado automaticamente toda vez que um elemento for adicionado ao nosso ***Array[]***, pois, da forma que está sendo feito, estamos passando os IDs que queremos utilizar de forma manual, e isso pode ocorrer diversos problemas como duplicidade de IDs, então, a lógica que será implementada irá ajudar um pouco.  

Dentro de `Banco.js` implementaremos uma variável `let` chamada `ultimoIdRegistrado` que receberá `=` o último elemento dos `dadosManipulaveis[` na posição `dadosManipulaveis.length -1]` e iremos ver seu `.id`.  

Agora iremos implementar a variável que será responsável por atribuir os IDs dos elementos, crie uma variável `let` chamada `idGlobal` que receberá `=` o `ultimoIdRegistrado +1`.  

```js
// Banco.js

...
let ultimoIdRegistrado = dadosManipulaveis[dadosManipulaveis.length - 1].id
// Responsável por atribuir os Ids
let idGlobal = ultimoIdRegistrado + 1
...
```

Agora iremos começar a usar a variável `idGlobal`, ela será utilizada apenas na Função `salvar()`, pois, é a Função responsável por atribuir Id a uma determinada entrada.  
Para isso, iremos usar a variável `idGlobal` como valor da chave `id:` e pra finalizar iremos incrementar a variável `idGlobal++`.

```js
// Banco.js

...
// Função Salvar
export function salvar(nome, id) {
    dadosManipulaveis.push({ nome, id: idGlobal })
    idGlobal++
}
...
```

Para testar, devemos executar o comando `npm start` no Terminal, mas antes, precisamos fazer alterações no `index.js` retirando os IDs que foram colocados manualmente.

```js
// index.js


import {salvar, deletar, pegaDados, persistirValores} from './Banco.js'

console.log(`Dados Lidos do Banco\n${pegaDados()}\n`)

salvar('Marcos')
salvar('Taíssa')
salvar('Edith')
salvar('Íris')
salvar('Mary Ellen')
salvar('Junior')

persistirValores()

console.log(`Dados Atualizados no Banco\n${pegaDados()}`)
```

Da forma que está, se tentar rodar o programa ele apresentará um erro de lógica se o `Banco.json` estiver vazio, por isso, precisamos modificar a lógica de `ultimoIdRegistrado` para verificar se possui o ultimo Id `?.id` caso contrário adicione o valor padrão "-1" `?? -1`, isso significa que quando for incrementar com `idGlobal` irá somar +1-1 que dará 0, criando assim o `id: 0` que será atribuído ao `idGlobal`.  

Com isso, teremos um `Banco.json` com o seguinte conteúdo:

```json
// Banco.json

[
    {
        "nome": "Marcos",
        "id": 0
    },
    {
        "nome": "Taíssa",
        "id": 1
    },
    {
        "nome": "Edith",
        "id": 2
    },
    {
        "nome": "Íris",
        "id": 3
    },
    {
        "nome": "Mary Ellen",
        "id": 4
    },
    {
        "nome": "Junior",
        "id": 5
    }
]
```

Dessa forma implementamos uma maneira um pouco mais segura de adicionar elementos ao `Banco.json` sem ter que ficar adicionando os IDs manualmente.  

Agora só está faltando a Função `update()` que será utilizada para editar as informações do `Banco.json` com o auxílio do Id que acabamos de implementar, mas isso veremos a seguir.

[^ Sumário ^](#sumário)

### Modificando a Função salvar()

Estaremos fazendo uma pequena alteração na Função `salva()` para que ela possa tanto adicionar um novo elemento quanto editar um elemento no Banco de Dados, e para isso iremos utilizar o `id` que a Função recebe como parâmetro.  

Vimos que nen sempre precisamos de utilizar o `id` como parâmetro na hora de adicionar um elemento `salvar('Alguém')` não passamos o `id`, mas, podemos eventualmente passar o `id` quando form preciso editar um Usuário.  

Quando o `id` for passado, será porquê queremos editar um usuário e quando ele não for passado, significa que estamos adicionando uma pessoa com um `idGlobal`.  

[^ Sumário ^](#sumário)

#### Implementando o Índice do Banco

Para identificar onde este elemento existe, será preciso pesquisar por um ***índice***.  

Então, criamos uma constante `const` chamada `indice` onde será armazenado o índice quem contém o `id` que foi passado por parâmetro para a Função *salvar( nome, ***id*** )*, que receberá `=` a pesquisa utilizando a ***Função findIndex()*** então, `dadosManipulaveis.findIndex(` que receberá por parâmetro uma ***Função Callback*** que terá um Objeto como parâmetro `(obj) =>` e queremos encontrar o ***índice*** onde o `obj.id` é igual `===` ao `id)` que foi passado por parâmetro para a Função *salvar( nome, ***id*** )*.  

Então, entendemos que: `.findIndex((obj) => obj.id === id)` irá retornar um `id` do Array[] `dadosManipulaveis` onde o ID do elemento que está no Array[] `obj.id` é igual ao ID passado por parâmetro `=== id)`.  

Agora iremos começar verificando SE `if(`o `indice` for maior ou igual `>=` a `0 ) {`, então será feita a alteração.  

> ***E precisamos fazer essa verificação se o `id` existe e se é maior ou igual a `0`?  
Sim, para ter certeza que o `id` existe lá no Banco de Dados, arquivo `Banco.json`.***  

Agora que já temos o `indice`, iremos fazer a alteração nesta posição:  
Pegando os `dadosManipulaveis` na posição `[indice].nome` recebendo `=` o `nome` passado por parâmetro na Função.  

Então, se `if` o ID existir o nome será alterado, senão `else` adiciona uma nova pessoa com `idGlobal`.  

> ***O motivo de se colocar o `indice` fora do `if` é que com essa abordagem, pode acontecer de tentar-mos modificar um elemento de índice 3 `[3]` e o elemento não existir mais, e se ele existir, a alteração é realizada, e se ele não existir adiciona um novo elemento desconsiderando o `id: 3` e considerando o `idGlobal`.***

A seguir veremos o código:

```js
// index.js

...
// Função Salvar
export function salvar(nome, id) {
    // verifica se o ID existe no Banco
    const indice = dadosManipulaveis.findIndex((obj) => obj.id === id)
    if (indice >= 0) {   // será feito a atualização
        dadosManipulaveis[indice].nome = nome
    } else {
        dadosManipulaveis.push({ nome, id: idGlobal })
        idGlobal++
    }
}
...
```

[^ Sumário ^](#sumário)

#### Testando as Alterações

Agora iremos testar nossa Função `salvar()` adicionando novos elementos e editando o elemento de `id: 0` modificando a chave `nome:` para `'Marcos Vinicius'`.  
Com o código abaixo podemos ver as possíveis utilizações das Funções.

```js
// index.js

import {salvar, deletar, pegaDados, persistirValores} from './Banco.js'


// Adiciona um Elemento do Banco
// salvar('Marcos')
// salvar('Taíssa')
// salvar('Edith')
// salvar('Íris')
// salvar('Mary Ellen')
// salvar('Junior')

// Exclui um Elemento do Banco
// deletar(6)
// deletar(7)

console.log(`Dados Lidos do Banco\n${pegaDados()}\n`)

// Edita um Elemento do Banco
salvar('Marcos Vinicius', 0)

// Salva os Elementos no Banco
persistirValores()

console.log(`Dados Atualizados no Banco\n${pegaDados()}`)
```

Como pudemos ver, a abordagem de auto incremento do ID não é tão satisfatória e isso será resolvido mais adiante, mas, com este incremento do ID e a modificação da Função `salvar()` para poder tanto editar quando adicionar um novo elemento ao banco, finalizamos a criação do CRUD.

[^ Sumário ^](#sumário)

## Implementando Menu com Módulo Terminal Kit

Agora que o `Banco.js` já está praticamente pronto, que é o arquivo que contém todas as funcionalidades "Funções" para interagir com o Banco de Dados, já podemos iniciar a implementação do ***FrontEnd*** no Terminal com o Módulo Terminal-Kit.  

O motivo de estarmos dividindo o programa em duas partes diferentes `banco.js` e `Interface.js`, porquê não fazer tudo no `index.js`?  

Temos muitos códigos de funcionalidades diferentes:

- `Banco.js` possui todas a funcionalidades relacionadas com a interação com o Banco de Dados e este Módulo pode ser reaproveitado para outras aplicações;

- `Interface.js` vai conter diversas funcionalidades relacionadas com a ***Interface Gráfica no Terminal***, também poderá ser reaproveitado em outros Projetos.

Com isso, teremos dois Módulos distintos que poderão ser reaproveitados em outros projetos e os dois estarão integrados no `index.js`.  

O `index.js` servirá para juntas esses dois Módulos diferentes, que não tem conexão direta entre si e criar uma conexão entre esses Módulos.  

[^ Sumário ^](#sumário)

### Criando o Módulo Interface

Vamos começar criando o arquivo `Interface.js` dentro da pasta `projeto3` e neste aquivo, iremos implementar as Funções relativas a ***Interface***.  

Agora iremos importar o Módulo Terminal Kit que já foi instalado anteriormente através do comando `import kit from 'terminal-kit'`.  

Subsequente, iremos criar uma constante `const` chamada `term` que receberá `=` o nosso Módulo `kit.terminal`, com isso, a partir da constante `term` iremos conseguir acessar as Funções do Terminal que o ***Módulo Terminal-Kit*** disponibiliza.  

Agora criaremos a primeira Função que será um MENU onde vamos poder escolher qual ação será executada.  

Esta Função Assíncrona `async function menu(` receberá como parâmetro `itens) {`, que serão os itens do MENU, para exibir o MENU, será preciso criar alguns Objetos com formatação do MENU.  
Então, vamos criar uma variável `let` que será nosso Objeto de opções `options` recebendo `=` um Objeto `{` contendo os estilos `style:` que será `term.inverse,` e terá o Estilo Quando Selecionado `selectedStyle:` que será `term.white.bgCyan`.  

Com isso, estamos definindo que o estilo do MENU será inverso e que o estilo do objeto selecionado do MENU, terá a fonte branca com o fundo cyan e para saber mais sobre o Módulo, pode acessar a [página](https://www.npmjs.com/package/terminal-kit) para ficar por dentro de todas a funcionalidades disponíveis.  

Agora que já definimos as opções `options` com os estilos que serão inicializados com o MENU, podemos criar nosso MENU utilizando definindo uma constante `const` chamada `opcaoSelecionada` recebendo `= await` que irá esperar que a Função aconteça `term.singleLineMenu(` que irá criar um MENU de uma linha, ele receberá por parâmetro os `itens,` e passará as opções`options).promise` "leia a dica"

> ***DICA:***  
Existem algumas dificuldades em relação ao Terminal-Kit que precisa prestar muita atenção, pois ele utiliza geralmente a ***sintaxe de Promise***, mas ela pode ser um pouco confusa em relação a documentação.  
Por esse motivo, iremos utilizar a ***sintaxe Async/Await*** com os elementos do Terminal-Kit.  
Mas, para podermos usar essa sintaxe, será preciso utilizar um `.promise` ao final da chamada.

A `opcaoSelecionada`, será o retorno do MENU `term.singleLineMenu()` com isso, iremos selecionar um elemento do MENU e isso irá retornar a `opcaoSelecionada`.

Por fim, depois de ter a Opção Selecionada será retornado `return` a `opcaoSelecionada}`.

```js
// Interface.js

import kit from 'terminal-kit'
const term = kit.terminal

export async function menu(itens) {
    let options = {
        style: term.inverse,
        selectedStyle: term.white.bgCyan
    }
    const opcaoSelecionada = await term.singleLineMenu(itens, options).promise
    return opcaoSelecionada
}
```

[^ Sumário ^](#sumário)

### Testando o MENU no Código Principal

Agora iremos editar o aquivo `index.js` para que possamos importar o Módulo Interface e chamar a Função `menu()` para que possamos fazer o teste.  

Dentro do arquivo `index.js` apague o conteúdo anterior e importe o Módulo `Interface.js` utilizando a sintaxe de destructuring para importar a Função `{menu}`.  

```js
// index.js

...
import {menu} from './Interface.js'
...
```

Para chamar a Função `menu()` será preciso ter os itens do MENU, então, crie uma constante `const` chamada `itensMenu` que receberá `=` um Array[] `[]` que será uma lista com todas as Opções possíveis de serem acessadas no MENU, dentro do Array[] teremos:

- `' Adicionar ',` para adicionar Usuários;
- `' Editar ',` para editar elementos do Banco;
- `' Deletar ',` para deletar elementos do Banco;
- `' Exibir ',` para exibir os elementos do Banco;
- `' Salvar ',` para salvar os dados em arquivo;
- `' Sair '` para finalizar o programa.

Então, agora podemos fazer a chamada do MENU para que possamos testar através de `menu(itensMenu)` onde foi passado por parâmetro `itensMenu` que irá retornar um item selecionado.  

Então, adicionamos uma constante `const` chamada `selecionado` e atribuímos `=` a ela o valor de `menu(itemsMenu)`, mas desta forma, irá reportar um erro, pois espera uma Promise, mas como estamos utilizando a sintaxe de async/await precisamo adicionar `await` antes da Função para que ela espere o retorno para ser chamada.  

```js
// index.js
import { salvar, deletar, pegaDados, persistirValores } from './banco.js'
import { menu } from './Interface.js'

const itemMenu = [
  ' Adicionar ',
  ' Editar ',
  ' Deletar ',
  ' Exibir ',
  ' Salvar ',
  ' Sair ',
]

const selecionado = await menu(itemMenu)

console.log(selecionado)
```

Rodando o comando `npm start` no Terminal o MENU irá funcionar e quando selecionado o item, ele mostra informações sobre a seleção *(indice selecionado, texto selecionado)*, mas, ainda sim existe um problema, pois depois que executamos o programa, não temos fechá-lo, tendo que matar o terminal para poder encerar.  

Pra resolver isso, no arquivo `Interface.js` iremos criar mais uma Função que irá finalizar o programa, então, criaremos e exportaremos `export` esta Função `function` chamada `finaliza(){` que conterá o processo `process.exit()}`.

```js
// Interface.js

...
export function finaliza() {
  process.exit()
}
...
```

E o que significa essa Função `process.exit()`?  

Quando um programa é inicializado no Node.js, está iniciando um processo, e ele será executado e finalizado.  
Mas, quando estamos utilizando o Terminal-Kit, esse processo não sabe quando deve ser finalizado, pois fica a espera de algum comando, por esse motivo, precisamos especificar que queremos matar este processo e foi por esse motivo que criamos a ***Função Finaliza.***

E para finalizar, a chamaremos no `index.js` logo depois de chamar o `console.log()` a Função que acabamos de criar `finaliza()`.

```js
// index.js

...
console.log(selecionado)
finaliza()
...
```

[^ Sumário ^](#sumário)

### Integrando Interface e Banco de Dados

Agora que o MENU já foi implementado, iremos implementar a lógica para integrar o Banco de Dados com o mesmo.  

A lógica será, exibir o MENU e realizar uma tarefa assim por diante, até que seja selecionado `Sair` e o programa se encerrará.  

Para isso, iremos envolver a chamada do MENU em um laço infinito `while (1) {}` que será um while true "o número 1 significa `true`".

```js
// index.js

...
while (1) {
  const selecionado = await menu(itemMenu)
  console.log(selecionado)
}
...
```

Com isso, ficaremos exibindo o MENU e depois imprimindo o a Opção Selecionada repetidamente no laço infinito.  

Agora que temos o elemento selecionado, podemos tomar alguma decisão a partir deste elemento e para fazer isso, iremos utilizar a estrutura `switch(` no elemento `selecionado) {}`, então será feito alguma coisa de acordo com o elemento selecionado.

Vimos anteriormente, que a Função `menu(itemMenu)` está retornando um Objeto contendo `{selectedItem: 2, selectedText: ' Deletar ', x: 24, y: 9}`, mas o que nos interessa são os parâmetros ***selectedItem:*** ou ***selectedText:*** para fazer nossa lógica.  

Mas, o parâmetro que iremos usar será `selectedText:` pois facilitará o entendimento, para isso, iremos editar o retorno do `menu()` lá em `Interface.js`, para que possamos receber o Texto Selecionado `return opcaoSelecionada.selectedText`.

```js
// Interface.js

...
  const opcaoSelecionada = await term.singleLineMenu(itens, options).promise
  return opcaoSelecionada.selectedText
}
...
```

Agora que já temos como pegar o valor do Texto Selecionado `selectedText:`, será o texto do Array[], mas agora temos outro problema, pois temos espaço antes e depois da palavra e ela está usando letras maiúsculas e minúsculas, mas para resolver isso iremos modificar o parâmetro `selecionado` para retirar os espaços do inicio e do final da palavra usando `.trim()` e colocaremos as letras em minúscula usando `.toLowerCase()`.  

 vamos implementar a lógica.

- `switch (selecionado.trim().toLowerCase()) {` será feito algo de acordo com o valor selecionado;
- `case 'adicionar':` caso a opção "adicionar" seja a escolhida;  
  - `term.clear()` limpa o terminal;
  - `break` para o laço;
- `case 'editar':` caso a opção "editar" seja a escolhida;  
  - `term.clear()` limpa o terminal;
  - `break` para o laço;
- `case 'deletar':` caso a opção "deletar" seja a escolhida;  
  - `term.clear()` limpa o terminal;
  - `break` para o laço;
- `case 'exibir':` caso a opção "exibir" seja a escolhida;  
  - `term.clear(),` limpa o terminal;
  - `console.log(pegaDados())` exibe no Terminal o conteúdo do arquivo `Banco.json`.
  - `break` para o laço;
- `case 'salvar':` caso a opção "salvar" seja a escolhida;  
  - `term.clear(),` limpa o terminal;
  - `persistirValores()` salva os valores no arquivo `Banco.json`
  - `break` para o laço;
- `case 'sair':` caso a opção "persistir" seja a escolhida;  
  - `finalizar()` finaliza o programa.

- `default:` caso "nenhuma" opção seja escolhida;  
  - `term.clear(),` limpa o terminal;
  - ``term(`${selecionado.trim().toLowerCase()} não é válido!`)`` exibe esta mensagem no Terminal.
  - `break` para o laço;

```js
// index.js

...
while (1) {
  const selecionado = await menu(itemMenu)
  switch (selecionado.trim().toLowerCase()) {
    case 'adicionar':
      term.clear()
      break
    case 'editar':
      term.clear()
      break
    case 'deletar':
      term.clear()
      break
    case 'exibir':
      term.clear()
      term.brightBlue.bold(`\n\n${pegaDados()}`)
      break
    case 'salvar':
      term.clear(),
      persistirValores()
      break
    case 'sair':
      term.clear(),
      finalizar()
      break

    default:
      term.clear(),
      term(`${selecionado.trim().toLowerCase()} não é válido!`)
      break
  }
}
...
```

[^ Sumário ^](#sumário)

### Criando a Função de Input - Entrada de Dados

Agora iremos criar e exportar `export` uma Função Assíncrona `async function` chamada `ler(` que irá ler o dados digitados pelo Usuário em nossa Interface, será passado por parâmetro um `enunciado)` que será um texto que será exibido no Terminal, pedindo que digite algo, então, `{` iremos utilizar o `term(` para exibir a mensagem no Terminal com a seguinte Template String, `` `\n${enunciado}\n\n})` ``, em seguida faremos a leitura do que será digitado através do `term.inputFiled()` ele utiliza a sintaxe de Promise, mas assim como no MENU, iremos utilizar a sintaxe de Async/Await por isso iremos colocar `.promise` ao final e depois antes de `term ...` criamos uma constante `const` chamada `input` que receberá `=` esperando digitar `await` nosso Input que acabamos de definir, por fim, iremos retornar `return` o que foi digitado `input`.  

```js
// Interface.js

...
export async function ler(enunciado) {
  term(`\n${enunciado}\n\n`)
  const input = await term.inputField().promise
  return input
}
...
```

Agora iremos criar mais duas Funções que irão deixa o programa um pouco mais bonito, iremos criar uma Função para exibir texto em verde e texto em azul.  

Vamos começar exportando `export` uma Função `function` chamada `textoVerde(`que receberá por parâmetro um `texto)` então, `{`definimos a cor do Terminal para verde `term.green(` passando o `` `\n\n${texto}`) `` recebido por parâmetro`}`.

```js
// Interface.js

...
export function textoVerde(texto){
  term.green(`\n\n${texto}`)
}
...
```

O mesmo processo será para criar a Função do Texto Azul e Aviso, só mudando a cor do Terminal.

```js
// Interface.js

...
export function textoAzul(texto){
  term.blue(`\n\n${texto}`)
}

export function aviso(texto){
  term.blink.red(`\n\n${texto}`)
}
...
```

[^ Sumário ^](#sumário)

### Adicionando Funcionalidade ao Menu Adicionar

Iremos utilizar a Função `ler()` para realizar as ações que ainda não definimos no MENU que são: ***Salvar, Editar e Deletar***.  

Agora dentro de `index.js` iremos no ***Switch/Case*** no `case 'adicionar:'` vamos criar uma constante `const` chamada `nome` que espera receber `= await` o que for digitado `ler('\n\nDigite o Nome de Usuário:')`, como resultado estaremos armazenando o que for digitado na constante `nome`.  

Depois iremos utilizar a Função `salvar(` passando por parâmetro a constante `nome)` e por fim, vamos utilizar a Função `textoVerde('Usuário criando com sucesso!')` para exibir o texto em verde, também teremos o mesmo para exibir um texto de aviso em vermelho `aviso('Clique em Ver Todos e confirme se foi adicionado e depois clique em Salvar.')`.

```js
// index.js

import { salvar, deletar, pegaDados, persistirValores } from './banco.js'
import { aviso, finaliza, ler, menu, textoVerde } from './Interface.js'
import kit from 'terminal-kit'

const term = kit.terminal
const itemMenu = [
  ' Adicionar ',
  ' Editar ',
  ' Deletar ',
  ' Exibir ',
  ' Salvar ',
  ' Sair ',
]
let nome, id

term.clear()

while (1) {
  const selecionado = await menu(itemMenu)
  switch (selecionado.trim().toLowerCase()) {
    case 'adicionar':
      term.clear()
      nome = await ler('\n\nDigite o Nome de Usuário:')
      if (!nome.trim()) {    // verifica se nome ñ é vazio
        term.clear()
        aviso('O Nome não pode ser vazio!!!')
        break
      }
      term.clear()
      salvar(nome)
      textoVerde('Usuário adicionado com sucesso!!!')
      aviso(
        'Clique em "Ver Todos" e confirme se foi adicionado e depois clique em "Salvar".'
      )
      break
```

[^ Sumário ^](#sumário)

### Adicionando Funcionalidade ao Menu Editar

Faremos os mesmo procedimentos que os feito no MENU Adicionar com a diferença de que teremos dois inputs, um para digitar o ***ID de Usuário*** `id = await ler('\n\nDigite o ID do Usuário: ')` é pelo ID que iremos identificar qual será editado e outro para o ***Nome de Usuário*** `nome = await ler('\n\nDigite o novo Nome de Usuário: ')`, e na Função `salvar()` serão passados dois parâmetros `nome` e `+id` o parâmetro ID é precedido do sinal de "+" para converter a "string" digitada em "number".

```js
// index.js

...
    case 'editar':
      term.clear()
      id = await ler('\n\nDigite o ID do Usuário: ')
      if (!id.trim()) {  // verifica se o id ñ é vazio
        term.clear()
        aviso('O ID não pode ser vazio!!!')
        break
      }
      nome = await ler('\n\nDigite o novo Nome de Usuário: ')
      if (!nome.trim()) {
        term.clear()
        aviso('O Nome não pode ser vazio!!!')
        break
      }
      salvar(nome, +id)
      textoVerde('Usuário atualizado com sucesso!!!')
      aviso(
        'Clique em Ver Todos e confirme se foi adicionado e depois clique em Salvar.'
      )
      break
...
```

[^ Sumário ^](#sumário)

### Adicionando Funcionalidade ao Menu Deletar

Faremos os mesmo procedimentos que os feito no MENU Adicionar com a diferença de que teremos somente o input para digitar o ***ID de Usuário*** `id = await ler('\n\nDigite o ID do Usuário: ')` é pelo ID que iremos identificar qual será deletado e na Função `deletar()` será passado o parâmetro `+id`, o parâmetro ID é precedido do sinal de "+" para converter a "string" digitada em "number".

```js
// index.js

...
    case 'deletar':
      term.clear()
      id = await ler('\n\nDigite o ID de Usuário: ')
      if (!id.trim()) {
        term.clear()
        aviso('O ID não pode ser vazio!!!')
        break
      }
      deletar(+id)
      textoVerde('Usuário excluído com sucesso!!!')
      aviso(
        'Clique em Ver Todos e confirme se foi adicionado e depois clique em Salvar.'
      )
      break
...
```

[^ Sumário ^](#sumário)

### Adicionando Funcionalidade ao Menu Exibir

O MENU Exibir, mostrará o conteúdo do banco de dados formatado com a cor do texto em azul.

```js
// index.js

...
    case 'exibir':
      term.clear()
      textoAzul(pegaDados())
      break
...
```

[^ Sumário ^](#sumário)

### Adicionando Funcionalidade ao Menu Salvar

Basicamente é o mesmo que foi feito no exibir, sendo que só adicionamos a Função `persistirValores()`

```js
// index.js

...
    case 'salvar':
      term.clear()
      persistirValores()
      break
...
```

[^ Sumário ^](#sumário)

### Adicionando Funcionalidade ao Menu Sair

É a mesma coisa que o anterior, substituindo a Função persistirValores() pela Função `finalizar()`.

```js
// index.js

...
    case 'sair':
      term.clear()
      finalizar()
      break
...
```

E por fim, caso não caia em nenhum dos `case` entrará no padrão `default:` que seria o nosso "tratamento de erro".

```js
// index.js

...
    default:
      term.clear()
      term(`${selecionado.trim().toLowerCase()} não é válido!`)
      break
  }
}
...
```

[^ Sumário ^](#sumário)

### Modificando o ID Global por um ID Único

Iremos modificar a lógica de ID de auto-incremento, por uma lógica de ID Único.  
E como podemos conseguir esse ID Único que geralmente é usado para armazenar em um Banco de Dados Real pra representar um Objeto ou qualquer tipo de entrada neste Banco de Dados.  

Para isso, iremos utilizar um [pacote NPM](https://www.npmjs.com/package/uuid) chamado `uuid`, esse pacote cria IDs Universais e Únicos na página do pacote, mostra como utilizá-lo, e mostra os os IDs são criados na referência ***RFC4122*** e está disponível para as opções abaixo:

- Completo - Suporte para RFC4122 v1, v3, v4 e v5 UUIDs;
  - v1: Utiliza algumas informações do computador como: ***data e hora atual e o MAC*** para gerar o UUID que será um ***hash***;
  - v3 e v5: Utiliza um ***Namespace*** um nome de alguma parte do projeto pra poder gerar o UUID;
  - v4: Utiliza UUID aleatório;
- Multiplataforma - Suporte para...
  - CommonJS, Módulos ECMAScript e Compilações CDN;
  - Node 12, 14, 16, 18;
  - Navegadores Chrome, Safari, Firefox, Edge;
  - Agrupadores de módulos Webpack e rollup.js;
- React Native / Expo;
- Seguro - Valores aleatórios criptograficamente fortes;
- Pequeno - Dependência zero, pegada pequena, funciona bem com empacotadores de "tremor de árvore";
- CLI - Inclui o utilitário uuid de linha de comando.

A versão que iremos utilizar em nosso projeto é a versão 4, utilizando a Função `uuid.v4()` com isso, estaremos criando um ***hash aleatório*** para ser nosso ID Único.  

Para que possamos utilizar o UUID, primeiro precisamos instalar o pacote em nosso projeto.  
Para isso precisamos estar dentro da pasta do projeto no terminal, podemos clicar com o botão direito do mouse na pasta do projeto `projeto3` e escolher `Abrir no Terminal Integrado` e dentro do terminal utilizar o comando abaixo.

```zsh
// Terminal

$ npm i uuid
```

Com isso termos o pacote instalado em nosso projeto e adicionado nas dependências do `package.json`.

```json
// package.json

...
  "dependencies": {
    ...
    "uuid": "^9.0.0"
  },
...
```

Agora dentro do arquivo `Banco.js` iremos importar `import` utilizaremos a sintaxe de destructuring para utilizar somente a versão 4 `{v4 as uuidv4}` de `from 'uuid'`.  

A Função `uuidv4` será utilizada para gerar o ID Único e aleatório, com isso, iremos retirar a lógica do `ultimoIdRegistrado` e o `idGlobal` pois não precisamos mais deles.  

Dentro do `else` da Função `salvar()` iremos criar uma constante `const` chamada `idUnico` que receberá `=` a Função `uuidv4()` substituiremos o `idGlobal` pelo `idUnico` e excluiremos o incremento `idGlobal++`.  

```js
// Banco.js

...
    } else {
        const idUnico = uuidv4()
        dadosManipulaveis.push({ nome, id: idUnico })
    }
}
...
```

E para que o `idUnico` funcione, precisamos modificar sua chamada pois ele não será mais uma ***String*** mas sim um ***Number***, então, precisamos retirar o sinal de `+` nas chamadas do `id` no arquivo `index.js`, nas opções Editar e Deletar, pois, são as chamadas que utilizam o `id`.

```js
// index.js

...
// Editar
      ...
      salvar(nome, id)
      textoVerde('Usuário atualizado com sucesso!!!')
      aviso(
        'Clique em Ver Todos e confirme se foi adicionado e depois clique em Salvar.'
      )
      break
      ...

// Deletar
      ...
      deletar(id)
      textoVerde('Usuário excluído com sucesso!!!')
      aviso(
        'Clique em Ver Todos e confirme se foi adicionado e depois clique em Salvar.'
      )
      break
...
```

Agora após essas alterações, se nós executar-mos o programa e adicionar um novo usuário, veremos que o ID Único foi gerado com sucesso e que é um número enorme como podemos ver abaixo.

```json
// Banco.json

...
    {
        "nome": "Teste2",
        "id": "4b84dab2-dcf3-4376-ba77-48d2c914d3c2"
    }
...
```

Agora iremos abrir o arquivo `Interface.js` e criar e exportar `export` uma nova Função Assíncrona `async function` chamada `menuSelecaoUsuario(` nessa Função iremos criar um sub Menu que irá selecionar um Usuário e assim como no outro MENU, irá receber por parâmetro `itens){` que serão utilizados para criar o sub MENU, será preciso criar uma variável `let` contendo as opções `options` que receberá `=` um Objeto com as opções `{` contento um estilo `style:` que será `term.inverse,` e o texto selecionado `selectedText:` será `term.white.bgGray}`.  

Agora iremos definir o sub MENU, iremos criar uma constante `const` chamada `selecionada` que espera receber `= await` uma coluna `term.singleColumnMenu(` passando os `itens,` e as `options).promise` como parâmetro terminando com ponto promise para que possamos utilizar a sintaxe Async/Await.  
