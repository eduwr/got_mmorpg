const { validationResult } = require('express-validator');
const Atributos = require('../models/Atributos');
const Acoes = require('../models/Acoes');

module.exports.jogo = async (req, res) => {
    if(req.session.autorizado !== true){
        res.render("index", {validacao : {}});
        return;
    }

    var msg = '';
    if(req.query.msg !== ''){
        msg = req.query.msg;
    };
    
    var atributo = await Atributos.findOne({usuario : req.session.usuario})    
    
    res.render("jogo", {imgCasa : req.session.casa, atributo : atributo, msg});
};

module.exports.sair = (req, res) => {
    req.session.destroy((err) => {
        res.render("index", {validacao: {}})
    });
};

module.exports.suditos = (req, res) => {
    if(req.session.autorizado !== true){
        res.render("index", {validacao : {}});
        return;
    }

    res.render("aldeoes")
};

module.exports.pergaminhos = async (req, res) => {
    if(req.session.autorizado !== true){
        res.render("index", {validacao : {}});
        return;
    }
    var date = new Date();
    var momento_atual = date.getTime();
    var getAcoes = await Acoes.find({usuario : req.session.usuario, terminoAcao : {$gt:momento_atual}})

    res.render("pergaminhos", {acoes : getAcoes})
};

module.exports.ordenar_acao_sudito = async (req, res) => {
    var dadosForm = req.body;

    erros = validationResult(req);

    if (!erros.isEmpty()){
        res.redirect("jogo?msg=A");
        return;
    };

    var usuario = req.session.usuario;
    var { acao, quantidade } = dadosForm;
    var date = new Date();
    var tempo = null;

    switch(parseInt(acao)){
        case 1: tempo = 1 * 60 * 60000; break;
        case 2: tempo = 2 * 60 * 60000; break;
        case 3: tempo = 5 * 60 * 60000; break;
        case 4: tempo = 5 * 60 * 60000; break;
    };

    var terminoAcao = date.getTime() + tempo;


    await Acoes.create({
        usuario,
        acao,
        quantidade,
        terminoAcao
    });

    var moedas = null;

    switch(parseInt(acao)){
        case 1: moedas = -2 * quantidade; break;
        case 2: moedas = -3 * quantidade; break;
        case 3: moedas = -1 * quantidade; break;
        case 4: moedas = -1 * quantidade; break;
    };

    await Atributos.findOneAndUpdate(
        {usuario: usuario}, 
        { $inc: {moeda: moedas}}
    );
    
    res.redirect("jogo?msg=B")   
};

module.exports.revogar_acao = async (req, res) => {
    var url_query = req.query;
    await Acoes.findByIdAndDelete(url_query.id_acao, (err, result) => {
        res.redirect("jogo?msg=D")
    })
};
