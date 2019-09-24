const { validationResult } = require('express-validator');
const Usuarios = require('../models/Usuarios');
const dbConnection = require('../../config/dbConnection')

module.exports.index = (req, res) => { 
    if(req.session.autorizado){
        res.render("jogo");
    }else{
        res.render("index", {validacao : {}});
    }
};

module.exports.autenticar = async (req, res) => {
    var dadosForm = req.body;
    erros = validationResult(req);

    if (!erros.isEmpty()){
        res.render("index", {validacao : erros.array()});
        return;
    };

    dbConnection.connectMongo();
    console.log('Conectou no Mongo!')

    const { usuario, senha } = dadosForm;
    user = await Usuarios.find({
        $and: [
            {usuario : { $eq : usuario }},
            {senha : { $eq : senha }},
        ]
    });

    console.log(user)

    if (user[0] != undefined ){
        req.session.autorizado = true;
        req.session.usuario = user[0].usuario;
        req.session.casa = user[0].casa;
    };

    if(req.session.autorizado){
        res.redirect("jogo");
    }else{
        res.render("index", { validacao : {} });
    };
    
    // dbConnection.disconnectMongo();

}