import express from 'express'
import cors from 'cors'
import UserRepository from './Repositories/UserRepository';
import User from './models/User';
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
    var teste = async () => {
        var repo = new UserRepository(new User)
        //var a = await repo.getAll()
        var a = await repo.create({
            username: "idanniellima",
            email: "daniellima@gmail.com",
            hash: "#$EFFFFDF"
        })
        
        console.log(a)
    }
    
    teste()
})


