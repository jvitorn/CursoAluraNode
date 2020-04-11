const templates = require('../views/templates');

class BaseController {
    static routes(){
        return {
            home:'/',
            login:'/login'
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
        return function(req,res){
            resp.marko(templates.base.login);
        }
    }
    efetuaLogin(){
        return function(req,res){
            
        }
    }
}

module.exports = BaseController;