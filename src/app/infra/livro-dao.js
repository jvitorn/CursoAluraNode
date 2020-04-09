class LivroDao {
    // referencia ao banco de dados 
    constructor(db){
        this._db = db;
    }
    //funcao de listagem 
    lista(callback){
        this._db.all('SELECT * FROM livros',(error,results)=>callback(error,results));
    }
}

module.exports = LivroDao;