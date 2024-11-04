const app = require('./app')
const mongoose = require('mongoose')

const PORT = 8080
const HOST = '127.0.0.1'

app.listen(PORT, HOST, () => {
  mongoose.connect('mongodb://user:pass@127.0.0.1:27030/dbTestFrontend')
  console.log(`API iniciada em ${HOST}:${PORT}`)
})