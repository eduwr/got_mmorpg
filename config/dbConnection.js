const mongoose = require('mongoose');
// const db = mongoose.connection;

module.exports.connectMongo = () => {
  return mongoose.createConnection('mongodb+srv://admin:admin@cluster0-jwyto.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
};

module.exports.disconnectMongo = () => {
  return mongoose.disconnect()
};

// db.on('error', console.error);
// db.on('open', () => {
//     console.log('Conectado ao Mongo')
// });