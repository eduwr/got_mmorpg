const mongoose = require('mongoose');


module.exports.connectMongo = () => {
  return mongoose.connect('mongodb+srv://admin:admin@cluster0-jwyto.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
  });
};

module.exports.disconnectMongo = () => {
  return mongoose.disconnect()
};
