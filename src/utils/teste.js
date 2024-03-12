const {CreateToken} = require('./Token');

const Username = {
    username: 'alvinho',
    email: 'alvarogabriel1103@hotmail.com',
    password: 'erineide'
};

const token = CreateToken(Username);
token.then(res => console.log(res))