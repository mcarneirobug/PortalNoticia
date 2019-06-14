    
    module.exports = function(application) {
        application.get('/formulario_inclusao_noticia', function(req, res) {
            res.render("admin/form_add_noticia.ejs");
        });


        application.post('/noticias/salvar', function(req, res) {
            var noticia = req.body;

            // tratar info com express validator para verificar se são validas

            // passamos o name e a mensagem para o campo obrigatório
            req.assert('titulo', 'Título é obrigatório').notEmpty();
            req.assert('resumo', 'Resumo é obrigatório').notEmpty();
            // podemos setar também que o tamanho do resumo tem que estar entre 10 e 100
            req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
            req.assert('autor', 'Autor é obrigatório').notEmpty();
            req.assert('data_noticia', 'Data é obrigatório').notEmpty();
            req.assert('noticia', 'Notícia é obrigatório').notEmpty();

            // caso algum campo não atenta ao critério de validação 

            var error = req.validationErrors();

            console.log(error);

            if(error) {
                // se der erro eu não continuo com a execução da conexão com o db
                res.render("admin/form_add_noticia.ejs", {validacao : error});
                return; 
            }

            var connection = application.config.dbConnection(); 
            var noticiasModel = new application.app.models.NoticiasDAO(connection);
            
            noticiasModel.salvarNoticia(noticia, function(error, result) {
                res.redirect('/noticias');
            });
        });
    }