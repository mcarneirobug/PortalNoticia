
    var express = require('express');
    var consign = require('consign');
    var bodyParser = require('body-parser');

    var app = express();
    app.set('views', './app/views');

    /**
     * Informa para o express que o view engine 
     * quem irá manipular é o ejs
     */
    app.set('view engine', 'ejs');

    //pasar o body-parser
    app.use(bodyParser.urlencoded({extended: true}));

    /**
     * com o consign nós incluímos todos os 
     * modulos fazendo o require de routes automaticamente
     * e passa para a instância do servidor 'app'
     */
    consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

    /**
     * com o modo .then() podemos incluir outros módulos
     */


    module.exports = app;