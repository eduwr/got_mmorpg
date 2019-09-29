const { check } = require('express-validator');

module.exports = (method) => {
    switch(method){
        case 'cadastrarUsuario' : {
            return [
                check('nome', 'Nome é obrigatório').not().isEmpty(),
                check('usuario', 'Nome de usuário é obrigatório').not().isEmpty(),
                check('usuario', 'Nome de usuário deve conter mais de 3 caracteres').isLength({min: 3, max: 15}),
                check('senha', 'Senha é obrigatória').not().isEmpty(),
                check('casa', 'Selecionar a casa é obrigatório').not().isEmpty(),
            ]
        }; 
        case 'autenticarUsuario' : {
            return [
                check('usuario', 'Digite o nome de usuário').not().isEmpty(),
                check('senha', 'Digite a sua senha').not().isEmpty(),
            ]
        };
        case 'ordenarAcao' : {
            return [
                check('acao', 'Ação deve ser informada').not().isEmpty(),
                check('quantidade', 'A quantidade deve ser informada').not().isEmpty(),
            ]
        };
    }
}