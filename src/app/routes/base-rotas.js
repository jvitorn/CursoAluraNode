// controllers
const BaseController  = require('../controllers/base-controller');
const baseController  = new BaseController();


module.exports = (app) => {
    //rotas dos controllers 
    const rotasBase = BaseController.routes();
    //rotas da aplicação 
    app.get(rotasBase.home, baseController.home());
};