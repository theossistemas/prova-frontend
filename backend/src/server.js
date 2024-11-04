const app = require('./app')
const env = require('dotenv')
const dbConnection = require('../db/mongodb')

env.config()

dbConnection()

app.listen(process.env.API_PORT, process.env.API_HOST, () => {
  console.log(`API iniciada em ${process.env.API_HOST}:${process.env.API_PORT}`)
})