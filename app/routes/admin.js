    
    module.exports = function(application) {
        application.get('/formulario_inclusao_noticia', function(req, res) {
            res.render("admin/form_add_noticia.ejs");
        });

        /** mandaremos uma req via post */

        //quando uma req é via post é importante utilizar o redirect()
        application.post('/noticias/salvar', function(req, res) {
            var noticia = req.body; //json que está sendo recuperado

            var connection = application.config.dbConnection(); //é possível por causa do consign está passando tudo pra app
            var noticiasModel = application.app.models.noticiasModel;
            
            noticiasModel.salvarNoticia(noticia, connection,  function(error, result) {
                res.redirect('/noticias'); //funcao permite redirecionar para outra página
            });
        });
    }