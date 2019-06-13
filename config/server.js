
    var express = require('express');
    var app = express();

    app.set('views', './app/views');

    /**
     * Informa para o express que o view engine 
     * quem irá manipular é o ejs
     */
    app.set('view engine', 'ejs');

    module.exports = app;