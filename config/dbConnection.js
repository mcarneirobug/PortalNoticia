
    var mysql = require('mysql');

    /**
     * Dessa forma o autoload não irá 
     * chamar toda vez a função de conexão 
     * e podemos manipular a partir de uma variável
     */
    var connMySQL = function() {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'portal_noticias'
        });
    }

    module.exports = function() {
       return connMySQL;
    }