const { check, validationResult} = require('express-validator');
// const usuariosDAO = require('../models/usuariosDAO')();
// const dbConnection = require('../../config/dbConnection')

module.exports.cadastro = (req, res) => {
    res.render("cadastro", {validacao: {}, dadosForm: {}})
}

module.exports.cadastrar = (req, res) => {
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

    res.send('Podemos Cadastrar')
}


module.exports.validacaoForm = (method) => {
    switch(method){
        case 'cadastrarUsuario' : {
            return [
                check('nome', 'Nome é obrigatório').not().isEmpty(),
                check('usuario', 'Nome de usuário é obrigatório').not().isEmpty(),
                check('usuario', 'Nome de usuário deve conter mais de 3 caracteres').isLength({min: 3, max: 15}),
                check('senha', 'Senha é obrigatória').not().isEmpty(),
                check('casa', 'Selecionar a casa é obrigatório').not().isEmpty(),
            ]
        }
    }
}

