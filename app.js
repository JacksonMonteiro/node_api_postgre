const express = require('express');
const bodyParse = require('body-parser');
const routes = require('./routes');

// Assingments
const app = express();

// App uses
app.use(express.json());
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json())
app.use(routes);

// App listen
app.listen(3000, () => {
    console.log('Servidor iniciado em http://192.168.124.107:3000/');
});