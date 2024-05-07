const express = require('express')
const app = express()
const db = require('./db/connection')

const PORT = 3000

app.listen(PORT, function(){
    console.log(`O express etá rodando na porta ${PORT}`)
})

//db connection

db
    .authenticate()
    .then(() =>{
        console.log('Conectado ao DB')
    })
    .catch(err => {
        console.log("Ocorreu um erro ao iniciar o DB", err)
    })




//routes
app.get('/', (req, res) => {
    res.send('Esta fuuncionando')
})