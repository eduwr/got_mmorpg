const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    usuario: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    casa: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = model('Usuarios', UserSchema);