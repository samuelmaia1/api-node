import pg from 'pg'
const {Client} = pg
import {randomUUID} from 'node:crypto'


import express from 'express'

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

import cors from 'cors'
app.use(cors())

app.post('/materiais/add', async (req, res) => {

    try {
        async function insertMarials(description, rent_price, reposition_price, type, stock){
            const client = new Client({
                user: 'postgres',
                host: 'localhost',
                database: 'secao03',
                password: 'postgres'
            })

            await client.connect()

            const sqlInsertCommand = `
                INSERT INTO materiais (descricao, preco_aluguel, preco_reposicao, tipo, estoque) VALUES ($1, $2, $3, $4, $5)
            `

            const values = [description, rent_price, reposition_price, type, stock]

            const result = await client.query(sqlInsertCommand, values)

            if (result.rowCount === 1){
                console.log('Adicionado com sucesso.')
            } else {
                console.error('Erro ao adicionar produto')
            }

            await client.end()
            
        }

        const {descricao, preco_aluguel, preco_reposicao, tipo, estoque} = req.body 

        const response = await insertMarials(descricao, preco_aluguel, preco_reposicao, tipo, estoque)

        res.json(response)

        

    } catch (error) {
        console.log('Erro: ', error)
    }
    
})

app.get('/materiais', async (req,res) => {
    try {
        async function loadMaterials(){
            const client = new Client({
                user: 'postgres',
                host: 'localhost',
                database: 'secao03',
                password: 'postgres'
            })

            await client.connect()

            const sqlSelectCommand = 'SELECT * FROM materiais'

            const result = await client.query(sqlSelectCommand)

            if (result.rowCount > 0){
                res.json(result.rows)
            } else {
                return res.json({message: 'Nenhum material encontrado'})
            }

            await client.end()
        }

        loadMaterials()

    } catch (error) {
        console.log(error)
    }
})

app.listen(3000, () => {
    console.log('Rodando servidor')
})