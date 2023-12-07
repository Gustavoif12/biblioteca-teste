import { fastify } from 'fastify'
import {DatabaseMemory} from "./database-memory.js"

const server = fastify()
const database = new DatabaseMemory()

server.get('/', () => {
    return 'Olá Mundo'
})

server.post('/livro', (request, reply) => {
    //const body = request.body//
   //console.log(body)//
   const {titulo, autor, npaginas } = request.body
    database.create({
        titulo: 'livro 1',
        autor: "autor 1 ",
        npaginas: 400
    })
    console.log(database.list())
    return reply.status(201).send()
})

server.get('/livro', () => {
    const livros = database.list()

    return livros
})

server.put('/livros/:id', (request, reply) => { 
    
    const livroId = request.params.id
    const {titulo, autor, npaginas} = request.body
    const livro = database.update(livroId, { 
        titulo,
        autor,
        npaginas,
    })
    return reply.status(204).send()
})

server.listen({
    port: 3333,
})