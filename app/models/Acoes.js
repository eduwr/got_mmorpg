const { Schema, model } = require('mongoose');


const AcaoSchema = new Schema({
    usuario: {
        type: String,
        required: true,
    },
    acao: {
        type: Number,
        required: true,
    },
    quantidade: {
        type: Number,
        required: true,
    },
    terminoAcao: {
        type: Number,
        required: true,
    }
}, {
    timestamps: false,
})
   


module.exports = model('Acoes', AcaoSchema);