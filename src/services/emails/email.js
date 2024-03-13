const nodemailer = require('nodemailer');


const EmailFrom = '';
const PasswordFrom = '';

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
        html: `
        <a href='http://localhost:8080/jwt/create?token=${token}'>
            Clique aqui
        </a>
        
        `
    };
    return new Promise((resolve,reject) => {
        transporter.sendMail(mailOptions,function(error) {
            if (error) {
                console.log(error);
                reject({messagem: 'Erro ao envia email,tente novamente mais tarde.'});
            }
            resolve({messagem: 'Email enviado com sucesso'})
        })
    })
}
module.exports = SendEmail;
