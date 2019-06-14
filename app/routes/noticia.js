
    module.exports = function(app) {
        
        app.get('/noticia', function(req, res) {
            /**
             * Dessa forma a conexão com o bd só vai ser 
             * estabelecida quando acessarmos a rota e 
             * não no autoload 
             */
            var connection = app.config.dbConnection(); //é possível por causa do consign está passando tudo pra app
            var noticiasModel = app.app.models.noticiasModel;

            noticiasModel.getNoticia(connection, function(error, result) {
                res.render("noticias/noticia", {noticia : result});
            });
        });
    };
    