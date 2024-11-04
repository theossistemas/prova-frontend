const mongoose = require('mongoose')
const env = require('dotenv')

env.config()

const dbConnection = async() => {
  mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Conectado ao MongoDB.'))
    .catch((err) => console.log(err))
}

module.exports = dbConnection