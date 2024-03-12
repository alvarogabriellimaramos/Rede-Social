const SchemaRegister = require('../../services/db/models/registers');
const SendEmail = require('../../services/emails/email');
const {CreateToken} = require('../../utils/Token');

// object responsável por manda mensagem de erro 
const Error = {
    messagem: 'Erro no servidor,tente novamente mais tarde'
};

module.exports = {
    async SendToken (request,response) {
        try {
            const validator = require('validator');
            const {username,email,password,confirmPass} = request.body;
            const UsernameExists = await SchemaRegister.findOne({username});
            const EmailExists = await SchemaRegister.findOne({email});
            if (!username || username.length < 4 || UsernameExists !== null) {
                return response.json({
                    messagem: 'Seu nome de usuário é inválido ou já está registrado'
                });
            };
            if (!email || !validator.isEmail(email) || EmailExists !== null) {
                return response.json({
                    messagem: 'Seu e-mail é inválido ou já está registrado'
                });
            };
            if (!password || password.length < 8 ){
                return response.json({messagem:'Sua senha precisa ter no minimo 8 caracteres'});
            };
            if (confirmPass !== password) {
                return response.json({messagem: 'Suas senhas não batem'})
            };
            const User = {
                username,
                email,
                password
            };
            const token = await CreateToken(User)
            return response.status(200).json(await SendEmail(email,token));
        }
        catch (e) {
            return Error
        };
    },
    async CreateUser(request,response) {
        const {username,email,password} = request.user;
        const UsernameExists = await SchemaRegister.findOne({username});
        const EmailExists = await SchemaRegister.findOne({email});
        if (UsernameExists !== null || EmailExists !== null) {
            return response.json({messagem: 'Essa conta já está registrada'});
        };
        await SchemaRegister.create({
            username,
            email,
            password
        });
        return response.redirect('/login');
    }
};