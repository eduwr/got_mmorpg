const { validationResult } = require('express-validator');

const Usuarios = require('../models/Usuarios');
const Atributos = require('../models/Atributos');

// const dbConnection = require('../../config/dbConnection')

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

    // dbConnection.connectMongo();
    
    const { nome, usuario, senha, casa } = dadosForm;

    const userExists = await Usuarios.findOne({ usuario: usuario });

    if (userExists){
        return res.send('Nome de usuário já existe');
    }

    await Usuarios.create({
        nome,
        usuario,
        senha,
        casa,
    });

    await Atributos.create({
        usuario,
    })

    // dbConnection.disconnectMongo();
    res.send('Usuário cadastrado!')

    return;
}



