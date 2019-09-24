// importar as configurações do servidor

const app = require('./config/server');

const mongoose = require('mongoose');


// parametrizar a porta de escuta

const server = require('http').Server(app);
// const io = require('socket.io')(server);

// app.use((req, res, next) => {
//     req.io = io;

//     return next();
// });

// Conectar ao mongoDB Atlas

// mongoose.connect('mongodb+srv://admin:admin@cluster0-jwyto.mongodb.net/test?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

app.use(require('./app/routes'));

server.listen(3000, () => {
    console.log('Servidor ON')
});