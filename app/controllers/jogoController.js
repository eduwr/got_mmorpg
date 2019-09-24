const Atributos = require('../models/Atributos');
const dbConnection = require('../../config/dbConnection')

module.exports.jogo = async (req, res) => {
    if(req.session.autorizado !== true){
        res.render("index", {validacao : {}});
        return;
    }
    
    dbConnection.connectMongo();

    var atributo = await Atributos.findOne({usuario : req.session.usuario})    
    
    res.render("jogo", {imgCasa : req.session.casa, atributo : atributo});
};

module.exports.sair = (req, res) => {
    req.session.destroy((err) => {
        res.render("index", {validacao: {}})
    });
};

module.exports.suditos = (req, res) => {
    res.render("aldeoes")
};

module.exports.pergaminhos = (req, res) => {
    res.render("pergaminhos")
};