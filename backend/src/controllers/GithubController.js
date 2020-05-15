const axios = require('axios');

module.exports = {
    // Estou buscando os dados do github através do Usuario digitado pelo input no meu frontend
    // retornando apenas o name, email, avatar_url, location com desestruturação do JavaScript
    async show(req, res) {
        const { github_username } = req.body;
        const devgit = await axios.get(`https://api.github.com/users/${github_username}`);
        const { name, email, avatar_url, location } = devgit.data;
        return res.json({ github_username, name, email, avatar_url, location });
    },
}