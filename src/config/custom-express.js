require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rotas = require('../app/rotas/rotas.js');

app.use('/estatico',express.static('src/app/public'));
app.use(bodyParser.urlencoded({extended:true}));



rotas(app);

module.exports = app;