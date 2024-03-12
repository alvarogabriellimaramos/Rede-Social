const jwt = require('jsonwebtoken');
const {Hash} = require('./Hash');

module.exports = {
    async CreateToken (user) {
        const SECRET = process.env.SECRET;
        const User = {
            username: user.username,
            email: user.email,
            password: await Hash(user.password)
        };
        const token = jwt.sign(User,SECRET);
        return token;
    }
}

