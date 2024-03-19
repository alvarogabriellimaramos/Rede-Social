


module.exports = function (token) {
 return `
 <html lang="pt-br">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <style>
         body {
            font-family: sans-serif;
         }
         a {
             text-decoration: none;
             font-size: 1.3em;
             color: rgb(82, 82, 248);
         }
         a:hover {
             text-decoration: underline;
         }
         span {
             width: 100%;
             
             display: flex;
             align-items: center;
             justify-content: center;
         }
     </style>
     <title>Token de validação</title>
 </head>
 <body>
     <main>
         <h1>Bem vindo</h1>
         <hr>
         <p>Olá,ficamos felizes por participa do nosso projeto,esperamos que você goste</p>
         <hr>
         <div>
             <p> 
                 Abaixo estára o token de validação,para completa o seu registro ou a sua recuperação de senha 
             </p>
             <hr>
            <span>
                 <a href="http://localhost:8080/jwt/create?token=${token}">Clique aqui</a>
            </span>
         </div>
         <div>
             <hr>
             <p>Caso tenha algum feedbeck sobre o nosso projeto</p>
             <hr>
             <p>
                 <a href="https://github.com/alvarogabriellimaramos/Rede-Social/tree/main">Acesse aqui</a>
             </p>
         </div>
     </main>
 </body>
 </html>
 `
}