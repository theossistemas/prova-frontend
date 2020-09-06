const mongoose = require('mongoose')
const desenvolvedorCampos = {
    githubURL: {
        type: String
    },
    avatarURL: {
        type: String    
    },
    nome: {
        type: String,
        required: true     
    },
    email: {
        type: String,
        required: true    
    },
    cidade: {
        type: String,
        required: true    
    },
    formacao: {
        type: String    
    },
    tecnologias: {
        type: String     
    }
}

const desenvolvedorSchema = mongoose.Schema(desenvolvedorCampos)
mongoose.model('desenvolvedores', desenvolvedorSchema)

module.exports = mongoose
