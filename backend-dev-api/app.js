const express = require('express')
const app = express()
const bancoDados = require('./controllers/bancoDados')
const bodyParser = require('body-parser')
const rotaDesenvolvedor = require('./routes/desenvolvedores')
const morgan = require('morgan')
const PORT = process.env.PORT || 8081

bancoDados.conecta()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', '*')
    next()
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(morgan('tiny'))
app.use('/', rotaDesenvolvedor)

app.listen(PORT)