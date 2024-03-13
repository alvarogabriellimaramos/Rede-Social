module.exports = {
    Login (request,response) {
        return response.render('logs/login/index',{ 
            title: 'Login Page',
            cssFile: 'css/forms.css'
        });
    },
    Register (request,response) {
        return response.render('logs/register/index',{
            title: 'Register Page',
            cssFile: 'css/forms.css',
            jsFile: 'js/register.js'
        });
    }
};