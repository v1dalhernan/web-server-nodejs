const express = require('express');

const app = express();



// midelware para servir contenido estatico 
app.use(express.static('public'));


app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});

// para todos aquellos que no este en las rutas 
// app.use((req, res) => {
//   res.sendFile(__dirname +'/public/404.html');
// });

app.listen(8080);