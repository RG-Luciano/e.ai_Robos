const express = require('express')

const app = express()

const conn = require('./db/conn')
const User = require('./models/User')

// middleware para ler o que vem no corpo da requisição
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())
app.use(express.static('assets/css'))

conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((error) => console.log(error))