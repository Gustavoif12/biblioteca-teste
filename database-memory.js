import { randomUUID } from "crypto"


export class DatabaseMemory{
    #livros = new Map()

list(){
    return Array.from(this.#livros.entries()).map((livroArray) => {

        const id = livroArray[0]
        const data = livroArray[1]

        return{
            id,
            ...data,
        }
    })
}

    create(livro){
        const livroId = randomUUID()
        this.#livros.set(livroId, livro)
    }
    
    update(id, livro){
        this.#livros.set(id, livro)
    }

    delete(id, livro){
        this.#livros.delete(id, livro)
    }
}