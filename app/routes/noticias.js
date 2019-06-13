    
    module.exports = function(app) {

        app.get('/noticias', function(req, res) {
       
            var mysql = require('mysql');
            var connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '1234',
                database: 'portal_noticias'
            });

            connection.query('select * from noticias', function(erro, result){
               // res.send(result); //retornar o resultado da consulta ao database
                  /**
                   * Passamos as informações do database via json
                   * e será manipulada pela view ejs 
                   */
                  res.render("noticias/noticias", {noticias : result});
            });     
    });
};