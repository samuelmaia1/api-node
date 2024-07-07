import {randomUUID} from 'node:crypto'
import { sql } from '../config/db.js'

export class DatabaseMateriais{
    async listMaterials(search){
        let materials
        
        if (search){
            materials = await sql`SELECT * FROM materiais where ilike "%${search}%"`
        } else {
            materials = await sql`SELECT * FROM materiais`
        }

        return materials
    }

    async getMaterial(id){
        const material = await sql`SELECT * FROM materiais WHERE id = ${id}`

        return material
    }

    async createMaterial(material){
        const id = randomUUID()

        const {nome, preco_aluguel, preco_reposicao, tipo, estoque} = material

        await sql`INSERT INTO materiais (id, nome, preco_aluguel, preco_reposicao, tipo, estoque) VALUES (${id}, ${nome}, ${preco_aluguel}, ${preco_reposicao}, ${tipo}, ${estoque})`
    }

    async removeMaterial(id){
        await sql`DELETE FROM materiais WHERE id = ${id}`
    }

    async alugaUnidade(quantidade, material){
        if (quantidade !== undefined && material !== undefined)
            await sql`UPDATE materiais SET estoque = ${material.estoque - quantidade} WHERE id = ${material.id}`
    }
}

export class DatabaseClientes{
    async createClient(client){
        const id = randomUUID()

        const {nome, email, contato} = client

        await sql`INSERT INTO clientes (id, nome, email, contato) VALUES (${id}, ${nome}, ${email}, ${contato})`
        .then(() => {
            console.log('Adicionado.')
        })
    }
}