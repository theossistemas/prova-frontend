const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    nome: String,
    github_username: String,
    avatar_url: String,
    email: String,
    cidade: String,
    techs: [String],
    formacao: String,
    created_at: Date
});

module.exports = mongoose.model('Dev', DevSchema);