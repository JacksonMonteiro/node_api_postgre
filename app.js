// Requires
const express = require('express');
const routes = require('./routes');
const bodyParse = require('body-parser');
const cors = require('cors');

// Assingments
const app = express();

// App uses
app.use((req, res, next) => {
    res.header("Allow-Control-Allow-Origin", '*');
    app.use(cors());
    next();
});

app.use(express.json());
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json())
app.use(routes);

// App listen
app.listen(8080, () => {
    console.log('Servidor iniciado em http://localhost:8080/');
});