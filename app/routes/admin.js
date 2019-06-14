    
    module.exports = function(app) {
        app.get('/formulario_inclusao_noticia', function(req, res) {
            res.render("admin/form_add_noticia.ejs");
        });

        /** mandaremos uma req via post */
        app.post('/noticias/salvar', function(req, res) {
            // recuperar informações do formulário
            var noticias = req.body;
            res.send(noticias); //envio o que foi escrito no form
        });

    }