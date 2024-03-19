const jwt = require('jsonwebtoken');
const InvalidTokens = require("../services/db/models/invalidTokens");

// liretalmente a mesma função do middleware jwt,mas essa irá redireciona para a página de login
async function JwtHome (request,response,next) {

    const token = request.query.token;
    const TokenInvalid = await InvalidTokens.findOne({token});
    if (!token || TokenInvalid !== null) {
        return response.status(401).redirect('/login');
    };
    const SECRET = process.env.SECRET;
    jwt.verify(token,SECRET,async function (err,user) {
        if (err) {
            return response.status(401).redirect('/login')
        };
        request.user = user;
        request.token = token;
        next();
    });
};

module.exports = JwtHome;