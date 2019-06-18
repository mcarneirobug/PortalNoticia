
    module.exports.noticias = function(application, req, res) {
 
        var connection = application.config.dbConnection(); 
        var noticiasModel = new application.app.models.NoticiasDAO(connection);
        
        noticiasModel.getNoticias(function(error, result) {
            res.render("noticias/noticias", {noticias : result}); 
        });
    }

    module.exports.noticia = function(application, req, res) {
        
        /**
         * Dessa forma a conexão com o bd só vai ser 
         * estabelecida quando acessarmos a rota e 
         * não no autoload 
         */
        var connection =  application.config.dbConnection(); //é possível por causa do consign está passando tudo pra app
        var noticiasModel = new  application.app.models.NoticiasDAO(connection);

        // atraves do request query que conseguimos recuperar o que é passado por parâmetro

        var id_noticia = req.query; //pega o id passado pela query 

        noticiasModel.getNoticia(id_noticia, function(error, result) {
            res.render("noticias/noticia", {noticia : result});
        });
    }