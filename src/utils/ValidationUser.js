module.exports = function (body) {
    const {username,email,password,confirmPass} = body;
    if (!username || username.length < 4) {
        return {
            messagem:'Seu nome de usuario é inválido ou já está registrado. '
        };
    };
    if (!username || !validator.isEmail(email) || email.length > 255) {
        return {
            messagem: 'Seu e-mail é inválido'
        };
    }
    if (!password || password.length < 8 ) {
        return {
            messagem: 'Sua senha é menor que oito caracteres'
        };
    };
    if (confirmPass !== password) {
        return {
            messsagem: 'Suas senhas não batem'
        };
    };
    return true;
};