const mongoose = require('mongoose');
const {Schema} = mongoose;

const CitasSchema = new Schema({
    
    doctor: {
        type: String,
        required: true,
    },
    hora_inicio: {
        type: String,
        required: true
    },
    hora_final: {
        type: String,
        required: false,
    },
    nota:{
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Citas',CitasSchema);