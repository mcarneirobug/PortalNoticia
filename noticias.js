
    module.exports = function(application) {
        
        application.get('/noticias', function(req, res) {
            /**
             * Dessa forma a conexão com o bd só vai ser 
             * estabelecida quando acessarmos a rota e 
             * não no autoload 
             */
            var connection = application.config.dbConnection(); //é possível por causa do consign está passando tudo pra app
            var noticiasModel = application.app.models.noticiasModel;
            /**
             * Recupera as noticias através do 
             * getNoticias
             */
            noticiasModel.getNoticias(connection,  function(error, result) {
                res.render("noticias/noticias", {noticias : result}); //poderemos recuperar os dados do banco através de indices no ejs
            });
        });
    };
    