
    var app = require('./config/server');

   // var rotaNoticia = require('./app/routes/noticias')(app);

   // var rotaFormularioIn = require('./app/routes/formulario_inclusao_noticia');
    //rotaFormularioIn(app); //executando funcao

    //var rotaHome = require('./app/routes/home')(app);

    app.listen(3000, function(){
        console.log("Servidor ON");
    });
