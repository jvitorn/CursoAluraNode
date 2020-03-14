const express = require('express');
const app = express();
const rotas = require('../app/rotas/rotas.js');
require('marko/node-require').install();
require('marko/express');
rotas(app);
module.exports = app;