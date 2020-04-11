const LivroController = require('./livro-controller');
const templates = require('../views/templates');

class BaseController {
    static routes(){
        return {
            home:'/',
            login:'/login',
        }
    }
    home() {
        return function(req, resp) {
            resp.marko(
                templates.base.home
            );
        };
    }
    login(){
        return function(req,resp){
            resp.marko(templates.base.login);
        }
    }
    efetuaLogin(){
        return function(req,res,next){
            const passport = req.passport;
            passport.authenticate('local',(error,usuario,info)=>{
                if(info){
                    return res.marko(templates.base.login);
                }
                if(error){
                    return next(error);

                }
                req.login(usuario,(error)=>{
                    if(error){
                        return next(error);
                    }
                    return res.redirect(LivroController.routes().lista);
                });
            })(req,res,next);
        }
    }
}

module.exports = BaseController;