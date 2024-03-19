const bcrypt = require('bcrypt');

module.exports = {
    Hash: async function (password) {
        try {
            if (!password || password === undefined) {
                return '@';
            };
            const hash = await bcrypt.hash(password,10);
            return hash;
        }
        catch (e) {
            console.log(e);
            return 'Erro no servidor,tente novamente mais tarde';
        };
    },
    CompareHash: async function(password,hash) {
        const result = await bcrypt.compare(password,hash);
        return result;
    }
}