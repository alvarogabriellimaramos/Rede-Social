const mongoose = require("mongoose");

const Tokens = new mongoose.Schema({
    token:{
        type: String,
        required:true,
        unique:true
    }
});

module.exports = mongoose.model('InvalidTokens',Tokens);