// esse será o modulo,responsável por fazer o usuario loga em sua conta 
const SchemaRegister = require('../../services/db/models/registers');
const SchemaUser = require('../../services/db/models/usernames');

const {CreateToken} = require('../../utils/Token');
const {CompareHash} = require('../../utils/Hash');

module.exports = {
    async Login (request,response,next) {
        const {username,password} = request.body;
        const Usernames = await SchemaRegister.findOne({username});
        const Users = await SchemaUser.findOne({username});

        if (Usernames === null) {
            return response.json({messagem: 'Usuario não existe'});
        };
        const bool = await CompareHash(password,Usernames.password);
        if (!bool) {
            return response.json({messagem: 'Senha incorreta'});
        };
        if (username === Usernames.username && bool) {
            const User = {
                username,
                email: Usernames.email
            };
            const token = await CreateToken(User);

            Users.auth = true;

            await Users.save();

            return response.status(200).json({token});
        };
    },
};