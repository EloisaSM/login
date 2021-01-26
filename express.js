const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const app = express();

const upload = multer()

const rotas = require('./rota');

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(upload.array())
rotas(app);

module.exports = app;