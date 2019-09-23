const express = require('express');
const indexController = require('./controllers/indexController')
const cadastroController = require('./controllers/cadastroController')
const jogoController = require('./controllers/jogoController')
const validacao = require('./controllers/validacao')

const routes = express.Router();



routes.get('/', indexController.index);

routes.get('/cadastro', cadastroController.cadastro);

routes.post('/cadastrar', validacao('cadastrarUsuario'), cadastroController.cadastrar);

routes.get('/jogo', jogoController.jogo);

routes.post('/autenticar', validacao('autenticarUsuario'), indexController.autenticar);

module.exports = routes;