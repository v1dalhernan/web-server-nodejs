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

// para todos aquellos que no este en las rutas 
// app.use((req, res) => {
//   res.sendFile(__dirname +'/public/404.html');
// });

app.listen(8080);