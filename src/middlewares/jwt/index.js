// função que ser para valida os tokens jwt


const jwt = require('jsonwebtoken');

const InvalidTokens = require("../../services/db/models/invalidTokens");

module.exports = async function (request,response,next) {
    const token = request.query.token;
    const TokenInvalid = await InvalidTokens.findOne({token});
    if (!token || TokenInvalid !== null) {
        return response.status(401).render("/jwtinvalid/jwt",{
            title: 'Error 401: Invalid Token'
        });
    };
    const SECRET = process.env.SECRET;
    jwt.verify(token,SECRET,async function (err,user) {
        if (err) {
            return response.status(401).render("/jwtinvalid/jwt",{
                title: 'Error 401: Invalid Token'
            });
        };
        request.user = user;
        request.token = token;
        next();
    });
};