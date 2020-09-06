const app = require('express').Router()
const desenvolvedores = require('../controllers/desenvolvedores')

app.get('/desenvolvedores', desenvolvedores.getDesenvolvedores)
app.post('/desenvolvedor', desenvolvedores.postDesenvolvedor)
app.delete('/desenvolvedor/:id', desenvolvedores.deleteDesenvolvedor)

module.exports = app