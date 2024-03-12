const jwt = require('jsonwebtoken');

module.exports = function (request,response,next) {
    const token = request.query.token;
    if (!token) {
        return response.json({
            messagem: 'Token inválido'
        });
    } 
    const SECRET = process.env.SECRET;
    jwt.verify(token,SECRET,function (err,user) {
        if (err) {
            return response.json({messagem: 'Token inválido'});
        };
        request.user = user;
        next();
    });
};