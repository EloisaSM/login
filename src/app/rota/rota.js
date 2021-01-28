const { selectSql } = require('../../config/database');
const connection = require('../../config/database');
const { response } = require('../../config/express');
const validateEmail = require('email-validator');



module.exports = (app) => {
    app.post('/auth', function(req, resp) {
        console.log(req.body)
        const email = req.body.email
        console.log(email)
        const password = req.body.password
        console.log(password)

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
        const password = req.body.newPassword;
        const passwordConfirmation = req.body.confirmPassword;
        const email = req.body.newEmail;

        const emailValidateResult = validateEmail.validate(email);

        if(!password || !email){
            return resp.status(401).send('Campos obrigatórios');
        }

        if(password != passwordConfirmation){
            return resp.status(401).send("A senha precisa ser igual ao campo anterior");
        }

        if(!emailValidateResult){
            return resp.status(401).send("email invalido");
        }

        connection.query('SELECT * FROM acounts where email = ? and senha = ?', [email, password], function (error, results, fields){
            if(error) {
                return resp.status(500).send('Ocorreu um erro interno, tente novamente mais tarde.');
            }
            
            if(results.length === 0){
                connection.query('INSERT INTO acounts (email, senha) VALUES (?,?)', [email, password], function (error, results, fields){
                    if(error) {
                        console.log(error)
                        return resp.status(500).send('Ocorreu um erro interno, tente novamente mais tarde.');
                    }
        
                    return resp.status(200).send('usuario criado');
                });
            }
            return resp.status(401).send('usuario ja cadastrado');
        });

    })
}