const express = require('express')
const app = express()

const PORT = 3000

app.listen(PORT, function(){
    console.log(`O express etá rodando na porta ${PORT}`)
})