// essa funçaõ será responsável por retorna um usuario com base em seu username,para fazer algumas validações no front-end

const Users = require("../services/db/models/usernames");

module.exports = async function (request,response,next) {
    const {username} = request.body;
    const User = await Users.findOne({username});
    return response.json({User});
};