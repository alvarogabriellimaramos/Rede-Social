const {Hash,CompareHash} = require('../../utils/Hash');

// object responsável por manda mensagem de erro 
const Error = {
    messagem: 'Erro no servidor,tente novamente mais tarde'
};

module.exports = {
    async SendToken (request,response) {
        try {
            const validator = require('validator');
            const {username,email,password,confirmPass} = request.body;
            if (!username || username.length < 4) {
                return response.json({
                    messagem: 'Seu nome de usuário é inválido ou já está registrado'
                });
            };
            if (!email || !validator.isEmail(email) || email.length > 255) {
                return response.json({
                    messagem: 'Seu e-mail é inválido ou já está registrado'
                });
            };
            if (!password || password.length < 8 ){
                return response.json({messagem:'Sua senha precisa ter no minimo 8 caracteres'});
            };
            if (confirmPass !== password) {
                return 'Suas senhas não batem';
            };
            
        }
        catch (e) {
            return Error
        };
    }
};