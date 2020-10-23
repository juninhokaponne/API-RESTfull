let express = require('express');
var routes = express.Router();

routes.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Servidor Rodando</h1>');

});

module.exports = routes;