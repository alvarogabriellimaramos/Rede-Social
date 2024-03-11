const {Hash,CompareHash} = require('../../utils/Hash');

// object responsável por manda mensagem de erro 
const Error = {
    messagem: 'Erro no servidor,tente novamente mais tarde'
};

module.exports = {
    async SendToken (request,response) {
        try {
            const validator = require('validator');
            const ValidatorUser = require('../../utils/ValidationUser');
            const {username,email,password,confirmPass} = request.body;
            const Validation = ValidatorUser(request.body)
            if (Validation) {
                return response.json({messagem: 'Usuario criado com sucesso'})
            };
            return response.json(Validation);
        }
        catch (e) {
            return Error
        }
    }
}