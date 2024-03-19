const mongoose = require("mongoose");

const Usernames = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    auth: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Usernames',Usernames);