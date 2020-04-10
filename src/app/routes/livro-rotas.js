// controllers
const LivroController = require('../controllers/livro-controller');
const livroController = new LivroController();
//models
const Livro    = require('../models/livro');

module.exports = (app) => {
    //rotas dos controllers 
    const rotasLivro = LivroController.routes();
    //rotas da aplicação 
    app.get(rotasLivro.lista, livroController.lista());

    app.route(rotasLivro.cadastro)
        .get(livroController.formularioCadastro())
        .post(Livro.validacoes(),livroController.cadastra())
        .put(livroController.edita());

    app.get(rotasLivro.edicao, livroController.formularioEdicao());

    app.delete(rotasLivro.exclucao, livroController.remove());
};