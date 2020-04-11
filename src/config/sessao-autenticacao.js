const uuid          = require('uuid/v4');
const sessao        = require('express-session');
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UsuarioDao    = require('../app/infra/usuario-dao');
const db            = require('./database');
module.exports=(app)=>{
    // configuração de sessao de autenticação 
    passport.use(new LocalStrategy(
        // capturando dados de formulario local 
        {
            usernameField: 'email',
            passwordField:'senha'
        },
        // função executada para efetuar o login
        (email,senha,done)=>{
            const usuarioDao = new UsuarioDao(db);
            //veficiando o email 
            usuarioDao.buscaPorEmail(email)
                       .then(usuario=>{
                           //fazendo o processo de autenticacao no usuario
                           if(!usuario || senha != usuario.senha){
                               return done(null,false,{mensagem:'Login e Senha Invalidos!'});
                           }

                           return done(null,usuario);
                       })
                       .catch(error=> done(error,false));
        }
    ));
}