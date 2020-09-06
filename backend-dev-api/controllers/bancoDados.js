const mongoose = require('mongoose')
const URI = 'mongodb://localhost/devs'
const settings = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

async function conecta() {
    mongoose.Promise = global.Promise
    try {
        return await mongoose.connect(URI, settings)
    } catch(e) {
        console.log('erro ao conectar ao banco de dados', e)
    }
}

module.exports = {
    conecta
}    