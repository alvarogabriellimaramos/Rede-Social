module.exports = function (request,response) {
    return response.status(404).render('err/err',{
        title: 'Error 404: Page not exists'
        });
};
