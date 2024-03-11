module.exports = {
    Login (request,response) {
        return response.render('logs/login/index',{ title: 'Login Page'})
    },
    Register (request,response) {
        return response.render('logs/register/index',{title: 'Register Page'})
    }
};