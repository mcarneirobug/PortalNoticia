
    module.exports = function() {

        this.getNoticias = function(connection, callback) {
            connection.query('select * from noticias', callback);
        };

        this.getNoticia = function(connection, callback) {
            connection.query('select * from noticias where id_noticias = 2', callback);
        }

        this.salvarNoticia = function(noticia, connection, callback) {
            // pega o json "noticia" e transforma em string e insere na tabela
            //json possua mesmos nomes de variáveis que o db
            connection.query('insert into noticias set ? ', noticia, callback);
        }


        return this;
    }