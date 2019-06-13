
    module.exports = function(app) {
        
        app.get('/noticias', function(req, res) {
            /**
             * Dessa forma a conexão com o bd só vai ser 
             * estabelecida quando acessarmos a rota e 
             * não no autoload 
             */
            var connection = app.config.dbConnection(); //é possível por causa do consign está passando tudo pra app

            connection.query('select * from noticias', function(error, result) {
                res.render("noticias/noticias", {noticias : result}); //poderemos recuperar os dados do banco através de indices no ejs
            });
        });
        
    };
    