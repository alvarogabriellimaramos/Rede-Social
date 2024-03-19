// esse middleware será responsável por verifica se o usuario já está conectado


module.exports = async function (request,response,next) {
    const Users = require("../../services/db/models/usernames");
    const {username} = request.body;
    const User = await Users.findOne({username});
    if (User.auth) {
        return response.status(401).json({
            messagem: 'Usuario já conectado'
        });
    };
    next();
}