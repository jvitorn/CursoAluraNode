class LivroDao {
    // referencia ao banco de dados 
    constructor(db){
        this._db = db;
    }
    adiciona(livro){
        return new Promise((resolve,reject)=>{
            this._db.run('INSERT INTO livros(titulo,preco,descricao) values (?,?,?)',
            [livro.titulo,livro.preco,livro.descricao],function(err){
                if(err){
                    console.log(err);
                    return reject('Não Foi possivel adicionar o livro');
                }
                resolve();
            })    
        });
    }
    //funcao de listagem 
    lista(){
        // criando uma nova promisse 
        return new Promise((resolve,reject)=>{
            this._db.all('SELECT * FROM livros',(error,results)=>{
                if(error) return reject('Não foi possivel listar os livros!')
                return resolve(results);
            });
        })
        
    }
}

module.exports = LivroDao;