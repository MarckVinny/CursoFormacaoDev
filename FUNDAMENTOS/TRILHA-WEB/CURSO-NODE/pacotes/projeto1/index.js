
import server from 'server'
import { DateTime } from 'luxon'
import chalk from 'chalk'

// Pega o Método get via Destructuring
const { get } = server.router

// Função que imprime no terminal a Cidade e a hora local
function imprimeHoraLocal (cidade, hora){
    return console.log(chalk.bgBlue.bold(
        ` Em ${cidade} são ${hora} horas. `
    ))
}

/** Cria o Servidor com:
 *  Um Objeto "{ }" contendo as configurações
 *  Um Array "[ ]" contendo as rotas */
server({ port: 8080 }, [
    get('/', (ctx) => 'Olá Mundo!'),
    get('/roma', () => {
        const hora = DateTime.local({zone: 'Europe/Rome'}).toFormat('HH:mm:ss')
        imprimeHoraLocal('Roma', hora)
        return `Hora local de Roma ${hora}` 
    }),
    get('/luanda', () => {
        const hora = DateTime.local({zone: 'Africa/Luanda'}).toFormat('HH:mm:ss')
        imprimeHoraLocal('Luanda', hora)
        return `Hora local de Luanda ${hora}` 
    }),
    get('/seoul', () => {
        const hora = DateTime.local({zone: 'Asia/Seoul'}).toFormat('HH:mm:ss')
        imprimeHoraLocal('Seoul', hora)
        return `Hora local de Seoul ${hora}` 
    }),
    get('/cuiaba', () => {
        const hora = DateTime.local({zone: 'America/Cuiaba'}).toFormat('HH:mm:ss')
        imprimeHoraLocal('Cuiabá', hora)
        return `Hora local de Cuiabá ${hora}` 
    }),
    get('/brasilia', () => {
        const hora = DateTime.local({zone: 'America/Sao_Paulo'}).toFormat('HH:mm:ss')
        imprimeHoraLocal('Brasília', hora)
        return `Hora local de Brasília ${hora}` 
    })
])
