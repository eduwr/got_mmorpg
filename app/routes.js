const express = require('express');
const indexController = require('./controllers/indexController')
const cadastroController = require('./controllers/cadastroController')
const jogoController = require('./controllers/jogoController')

const routes = express.Router();



routes.get('/', indexController.index);

routes.get('/cadastro', cadastroController.cadastro);

routes.get('/jogo', jogoController.jogo)

module.exports = routes;