const { validationResult } = require('express-validator');

module.exports.index = (req, res) => {
    res.render("index", { validacao : {} })
}

module.exports.autenticar = (req, res) => {
    var dadosForm = req.body;
    erros = validationResult(req);

    if (!erros.isEmpty()){
        res.render("index", {validacao : erros.array()});
        return;
    };

    res.send('Tudo certo até aqui')
}