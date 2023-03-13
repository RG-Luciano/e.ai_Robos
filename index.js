const express = require('express')

const app = express()

const conn = require('./db/conn')

// middleware para ler o que vem no corpo da requisição
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())
app.use(express.static('assets/css'))

app.listen(3000)