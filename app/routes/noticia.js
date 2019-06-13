
    module.exports = function(app) {
        
        app.get('/noticia', function(req, res) {
            /**
             * Dessa forma a conexão com o bd só vai ser 
             * estabelecida quando acessarmos a rota e 
             * não no autoload 
             */
            var connection = app.config.dbConnection(); //é possível por causa do consign está passando tudo pra app

            connection.query('select * from noticias where id_noticias = 2', function(error, result) {
                res.render("noticias/noticia", {noticia : result}); //poderemos recuperar os dados do banco através de indices no ejs
            });
        });
        
    };
    