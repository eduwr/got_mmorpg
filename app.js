// importar as configurações do servidor
const dbConnection = require('./config/dbConnection')

const app = require('./config/server');

const mongoose = require('mongoose');


// parametrizar a porta de escuta

const server = require('http').Server(app);

// Conectar ao mongoDB Atlas

dbConnection.connectMongo();
console.log('conectou ao Mongo')

app.use(require('./app/routes'));

server.listen(3000, () => {
    console.log('Servidor ON')
});