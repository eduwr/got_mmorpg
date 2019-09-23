const { validationResult } = require('express-validator');

const Usuarios = require('../models/Usuarios');
const dbConnection = require('../../config/dbConnection')

module.exports.cadastro = (req, res) => {
    res.render("cadastro", {validacao: {}, dadosForm: {}})
}

module.exports.cadastrar = async (req, res) => {
    var dadosForm = req.body;
    var erros = validationResult(req)
    

    if (!erros.isEmpty()){
        res.render("cadastro", {validacao: erros.array(), dadosForm: dadosForm});
        console.log(erros.array())
        return
    };

    // // connection = dbConnection();
    // usuariosDAO = new usuariosDAO();
    // usuariosDAO.inserirUsuario(dadosForm); 

    dbConnection.connectMongo();
    console.log('Conectou no Mongo!')

    const { nome, usuario, senha, casa } = dadosForm;
    await Usuarios.create({
        nome,
        usuario,
        senha,
        casa,
    });

    dbConnection.disconnectMongo();
    console.log('Desconectou do Mongo!')
    res.send('Usuário cadastrado!')

    return
}



