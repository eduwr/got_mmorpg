// importar as configurações do servidor

const app = require('./config/server');

// parametrizar a porta de escuta

const server = require('http').Server(app);
// const io = require('socket.io')(server);

// app.use((req, res, next) => {
//     req.io = io;

//     return next();
// });

// criar a conexão por websocket

app.use(require('./app/routes'));

server.listen(3000, () => {
    console.log('Servidor ON')
});