
    module.exports.index = function(application, req, res) {

        // recuperar informações do banco
        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        // recuperar as 5 últimas notícias
        noticiasModel.get5UltimasNoticias(function(error, result) {
            // renderizar o index 
            res.render("home/index.ejs", {noticias : result}); //pasar o json com os 5 reg
        });
    }