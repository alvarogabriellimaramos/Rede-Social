const mongoose = require('mongoose');

const USER = process.env.USER;
const PASS = process.env.PASS;

module.exports = function () {
    if (USER === undefined) {
        console.log('Seu nome de usuario está indefinido,verifique o arquivo .env')
        return;
    };
    if (PASS === undefined) {
        console.log('Sua senha está indefinida,verifique o arquivo .env');
        return;
    }
    mongoose.connect(`mongodb+srv://${USER}:${PASS}@teste.q0unlks.mongodb.net/`).then(() => console.log('Conectado ao banco de dados com sucesso'))
    .catch(e => console.log(`Erro ao se conecta com o banco de dados ${e}`));
};