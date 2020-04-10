// controllers
const LivroController = require('../controllers/livro-controller');
const livroController = new LivroController();
const BaseController = require('../controllers/base-controller');
const baseController = new BaseController();

const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

const { check, validationResult } = require('express-validator/check');

module.exports = (app) => {
    //rotas
    const rotasBase = BaseController.routes();
    const rotasLivro = LivroController.routes();

    app.get(rotasBase.home, baseController.home());

    app.get(rotasLivro.lista, livroController.lista());

    app.get(rotasLivro.cadastro, livroController.formularioCadastro());

    app.get(rotasLivro.edicao, livroController.formularioEdicao());

    app.post(rotasLivro.lista, [
        check('titulo').isLength({ min: 5 }).withMessage('O título precisa ter no mínimo 5 caracteres!'),
        check('preco').isCurrency().withMessage('O preço precisa ter um valor monetário válido!')
    ], 
    livroController.cadastra());

    app.put(rotasLivro.lista, livroController.edita());

    app.delete(rotasLivro.exclucao, livroController.remove());
};