const { selectSql } = require('../../config/database');
const connection = require('../../config/database');
const { response } = require('../../config/express');
const validateEmail = require('email-validator');



module.exports = (app) => {
    app.post('/auth', function(req, resp) {
        console.log(req.body)
        const email = req.body.email
        const password = req.body.password

        console.log(email)

        if(!email || !password) {
            return resp.status(401).send('Você deve preencher usuário e senha');
        } 

        connection.query('SELECT * FROM acounts where email = ? and senha = ?', [email, password], function (error, results, fields){
            if(error) {
                return resp.status(500).send('Ocorreu um erro interno, tente novamente mais tarde.');
            }
            
            if(results.length === 0){
                return resp.status(401).send('Usuario e senha nao cadastrado/não encontrado');
            }

            return resp.send('Logado');

        });

    });

    app.post('/users', function(req, resp){
        const username = req.body.username;
        const password = req.body.password;
        const passwordConfirmation = req.body.passwordConfirmation;
        const email = req.body.email;

        const emailValidateResult = validateEmail.validate(email);

        if(!username || !password || !email){
            return resp.status(401).send('Campos obrigatórios');
        }

        if(password != passwordConfirmation){
            return resp.send("A senha precisa ser igual ao campo anterior");
        }

        if(!emailValidateResult){
            return resp.send("email valido");
        }

        connection.query('INSERT INTO acounts (username, email, senha) VALUES (?,?,?)', [username, email, password], function (error, results, fields){
            if(error) {
                console.log(error)
                return resp.status(500).send('Ocorreu um erro interno, tente novamente mais tarde.');
            }

            return resp.send(results);
        })


    })
}