class Desenvolvedor {
    constructor(dev) {
        this.nome = dev.nome
        this.email = dev.email
        this.cidade = dev.cidade
        this.formacao = dev.formacao 
        this.tecnologias = dev.tecnologias 
        this.githubURL = dev.githubURL  
        this.avatarURL = dev.avatarURL
        if (dev._id) {
            this._id = dev._id
        }
    }
}

module.exports = Desenvolvedor 