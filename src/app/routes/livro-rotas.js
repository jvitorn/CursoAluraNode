// controllers
const LivroController = require('../controllers/livro-controller');
const livroController = new LivroController();
const BaseController  = require('../controllers/base-controller');
//models
const Livro    = require('../models/livro');

module.exports = (app) => {
    //rotas dos controllers 
    const rotasLivro = LivroController.routes();

    app.use(rotasLivro.autenticadas,function(req,res,next){
        //caso exista uma autenticaçao pelo passport ele vai progredir
        if(req.isAuthenticated()){
            next();
        }
        //caso nao , sera redirecionando ao login para registrar uma autenticacao
        else{
            res.redirect(BaseController.routes().login);
        }
    });
    //rotas da aplicação 
    app.get(rotasLivro.lista, livroController.lista());

    app.route(rotasLivro.cadastro)
        .get(livroController.formularioCadastro())
        .post(Livro.validacoes(),livroController.cadastra())
        .put(livroController.edita());

    app.get(rotasLivro.edicao, livroController.formularioEdicao());

    app.delete(rotasLivro.exclucao, livroController.remove());
};