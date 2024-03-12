const mongoose = require('mongoose');

const SchemaRegister = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required:true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        max: 255
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('UsuariosRegistrados',SchemaRegister);