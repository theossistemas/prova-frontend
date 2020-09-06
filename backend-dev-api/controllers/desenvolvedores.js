const mongoose = require('mongoose')
require('../models/Desenvolvedor')
const DesenvolvedorModel = mongoose.model('desenvolvedores')
const Desenvolvedor = require('../classes/Desenvolvedor')
const Error = require('../classes/Error')
const verificaCampos = require('./verificaCampos')

const criaObjetoDesenvolvedor = desenvolvedor => new Desenvolvedor(desenvolvedor)
const formataRetornoDesenvolvedores = desenvolvedores => desenvolvedores.map(criaObjetoDesenvolvedor)

function funcoesVerificacaoCamposDesenvelvedor() {
    return {
        nome: verificaCampos.stringEstaPreenchida,
        cidade: verificaCampos.stringEstaPreenchida,
        email: verificaCampos.stringEstaPreenchida
    }
} 

async function insereDesenvolvedor(res, desenvolvedor) {
    try {
        const desenvolvedorCriado = await DesenvolvedorModel(desenvolvedor).save()
        return res.status(201).send(desenvolvedorCriado)
    } catch(err) {
        return res.status(400).send(new Error(err))
    }
}

async function getDesenvolvedores(req, res) {
    try {
        const desenvolvedores = await DesenvolvedorModel.find().sort({nome: 'asc'}).populate()
        return res.status(200).send(formataRetornoDesenvolvedores(desenvolvedores))
    } catch(err) {
        return res.status(400).send(new Error(err))
    }
}

function postDesenvolvedor(req, res) {
    const desenvolvedor = new Desenvolvedor(req.body)
    const erros = verificaCampos.getCamposInvalidos(desenvolvedor, funcoesVerificacaoCamposDesenvelvedor())

    if (erros.length > 0) {
        return res.status(400).send(new Error(verificaCampos.arrayToString(erros)))
    }

    return insereDesenvolvedor(res, desenvolvedor)
}

async function deleteDesenvolvedor(req, res) {
    try {
        await DesenvolvedorModel.findByIdAndDelete(req.params.id).lean()
        res.status(204).send()
    } catch(error) {
        res.status(400).send(error)
    }
}

module.exports = {
    getDesenvolvedores,
    postDesenvolvedor,
    deleteDesenvolvedor
}