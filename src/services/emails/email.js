// Esse será o modulo responsável por envia o token para o email do usuario
const nodemailer = require('nodemailer');
require('dotenv').config();

const html = require("./html");

const EmailFrom = process.env.EMAIL;
const PasswordFrom = process.env.PASSWORD;

function SendEmail(email,token) {
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: EmailFrom,
            pass: PasswordFrom
        }
    });
    const mailOptions = {
        from: EmailFrom,
        to: email,
        subject: 'Token de verificação',
        html: html(token)
    };
    return new Promise((resolve,reject) => {
        transporter.sendMail(mailOptions,function(error) {
            if (error) {
                console.log(error);
                reject({messagem: 'Erro ao envia email,tente novamente mais tarde.'});
            }
            resolve({messagem: 'Enviamos um token de verificação para o seu e-mail'})
        })
    })
}
module.exports = SendEmail;
