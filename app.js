require('dotenv').config();

const express = require('express');
const hbs = require('hbs');


const app = express();



hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'hbs');




// midelware para servir contenido estatico 
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jhonathan vidal',
        titulo: 'Curso de nodeJs'
    });
});


app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Jhonathan vidal',
        titulo: 'Curso de nodeJs'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Jhonathan vidal',
        titulo: 'Curso de nodeJs'
    });
});


const port = process.env.PORT || 8080;

app.listen(port);