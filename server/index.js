const express = require('express');
const cors = require('cors');
const { acceptsLanguages } = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({extended: true,}));

const routerAnimales = require('./routes/animales.router');

app.get('/', (req,res) => {
    res.send('Ejecutando el server en Express. ¡Hola mundo!');
});

app.use('/api/v1/animales',routerAnimales);

app.listen(port, () => {
    console.log('Ejecutando en puerto ' + port);
});