const mongoose = require('mongoose');
const db = mongoose.connection;

var connectMongo = () => {
  console.log('conectando no Mongo!')
  return mongoose.connect('mongodb+srv://admin:admin@cluster0-jwyto.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
};

module.exports = () => {
    return connectMongo;
};

// db.on('error', console.error);
// db.on('open', () => {
//     console.log('Conectado ao Mongo')
// });


