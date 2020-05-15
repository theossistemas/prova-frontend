const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    // Nessa rota, estou pesquisando todos os meus devs na minha base de dados do mongo
    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs);
    },

    // Estou salvando o dev com seus dados, fazendo uma validação se tiver um usuario com o mesmo nome,
    // não deixando salvar, retornando uma mensagem para o usuário.
    async store(req, res) {
        const { github_username, nome, cidade, email, techs, formacao, avatar_url } = req.body;
        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const techsArray = parseStringAsArray(techs);
            dev = await Dev.create({
                github_username,
                nome,
                cidade,
                email,
                techs: techsArray,
                formacao,
                avatar_url
            })
            return res.json(dev);
        } else {
            return res.send('Usuário já cadastrado!')
        }
    }
}