const express = require('express');
const routes = express.Router();

const DevController = require('./controllers/DevController');
const GithubController = require('./controllers/GithubController');

// Dev
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

// Busca o Usuário do Git
routes.post('/devgithub', GithubController.show);

module.exports = routes;