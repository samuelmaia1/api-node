import express from 'express'
import { DatabaseMateriais, DatabaseClientes } from './src/services/database-postgres.js'
import { Material } from './src/models/class.js'
import cors from 'cors'

const server = express()

const database = new DatabaseMateriais()

server.use(
    express.urlencoded({
        extended: true
    })
)

server.use(express.json())

server.use(cors())

server.post('/materiais/adicionar', async (req,res) => {
    const {nome, preco_aluguel, preco_reposicao, tipo, estoque} = req.body

    console.log(req.body)

    await database.createMaterial({
        nome,
        preco_aluguel,
        preco_reposicao,
        tipo,
        estoque
    })
    .then(res.end('Um novo item foi criado.'))
})

server.delete('/materiais/deletar/:id', async (req, res) => {
    const {id} = req.params

    await database.removeMaterial(id)
})

server.get('/materiais/:id', async (req,res) => {
    const {id} = req.params

    const material = await database.getMaterial(id)

    return res.end(JSON.stringify(material[0]))
}) 

server.put('/materiais/alugar/:id', async (req, res) => {
    const {id} = req.params

    const {quantidade} = req.body

    console.log(quantidade)
    console.log(id)

    const response = await database.getMaterial(id)

    const material = response[0]

    await database.alugaUnidade(quantidade, material)
})

server.get('/materiais', async (req,res) => {
    const search = req.query.search

    const materiais = await database.listMaterials(search)

    return res.end(JSON.stringify(materiais))
})  

server.listen(3000)