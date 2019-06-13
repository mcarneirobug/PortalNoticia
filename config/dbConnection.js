
    var mysql = require('mysql');

    /**
     * Dessa forma o autoload não irá 
     * chamar toda vez a função de conexão 
     * e podemos manipular a partir de uma variável
     */
    var connMySQL = function() {
        console.log('Conexao com db foi estabelecida');
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'portal_noticias'
        });
    }

    module.exports = function() {
       console.log('O autoload carregou o módulo de conexão com bd.');
       return connMySQL;
    }