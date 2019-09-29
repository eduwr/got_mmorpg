const { Schema, model } = require('mongoose');


const JogoSchema = new Schema({
    usuario: {
        type: String,
        required: true,
    },
    moeda: {
        type: Number,
        required: true,
        default: 15,
    },
    suditos: {
        type: Number,
        required: true,
        default: 10,
    },
    temor: {
        type: Number,
        required: true,
        default: Math.floor(Math.random()*1000),
    },
    sabedoria: {
        type: Number,
        required: true,
        default: Math.floor(Math.random()*1000),
    },
    comercio: {
        type: Number,
        required: true,
        default: Math.floor(Math.random()*1000),
    },
    magia: {
        type: Number,
        required: true,
        default: Math.floor(Math.random()*1000),
    }    
}, {
    timestamps: false,
})
   


module.exports = model('Atributos', JogoSchema);