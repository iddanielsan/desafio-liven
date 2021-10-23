import express from 'express'
import cors from 'cors'
import users from './models/users';

const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express()

app.get('/', (req, res) => {
    
})

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use((req, res) => {
    res.status(404)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
    usersModel.create({
        nome: "Daniel",
        descricao: "Eu"
    }, (item) => console.log(item))
})

var usersModel = new users
    //return usersModel.all(['nome'], (itens) => res.json(itens))

