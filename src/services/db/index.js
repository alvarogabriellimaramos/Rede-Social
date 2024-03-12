const mongoose = require('mongoose');

const USER = process.env.USER;
const PASS = process.env.PASS;

module.exports = mongoose.connect(`mongodb+srv://${USER}:${PASS}@teste.q0unlks.mongodb.net/`)