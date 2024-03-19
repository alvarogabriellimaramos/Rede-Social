const Users = require('../services/db/models/usernames');
const {CreateToken} = require("../utils/Token");


module.exports = {

    async Login (request,response) {
        return response.render('logs/login/index',{ 
            title: 'Login Page',
            cssFile: 'css/forms.css',
            jsFile: 'js/login.js'
        });
    },
    Register (request,response) {
        return response.render('logs/register/index',{
            title: 'Register Page',
            cssFile: 'css/forms.css',
            jsFile: 'js/register.js'
        });
    },
    async Home(request,response) {
        const {username,email} = request.user
        return response.render('home/index',{
            title: `Bem vindo ${username}`,
            jsFile: 'js/actions/logout.js',
            email:email
        });
    },
    async RedirectLogin(request,response) {
        const TokenInvalid = require("../services/db/models/invalidTokens");
        const token = request.query.token;
        const {username} = request.user;
        const User = await Users.findOne({username});
        User.auth = false;
        await User.save();
        await TokenInvalid.create({token:token});
        return response.redirect('/login')
    }
};