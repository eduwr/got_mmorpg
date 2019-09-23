// importar o express

const express = require('express');

// importar o body-parser

const bodyParser = require('body-parser');

// importar o express-session

const expressSession = require('express-session');

// iniciar o objeto do express

const app = express();

// configurar o ejs setar as variáveis 'view engine' e 'views' do express

app.set('view engine', 'ejs');
app.set('views', './app/views');

// configurar o middleware express.static
app.use(express.static('./app/public'));

// configurar o middleware body-parser
app.use(bodyParser.urlencoded({extended: true}));

// configura o middleware express-session
app.use(expressSession({
    secret: 'klasdffbuiocvjklsdf',
    resave: false,
    saveUninitialized: false,
}));


// exportar o objeto app;
module.exports = app;