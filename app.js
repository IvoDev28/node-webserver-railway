const express = require('express');
const app = express();
require('dotenv').config();

const puerto = process.env.PORT;
const hbs = require('hbs');

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        /* OPCIONES QUE PODEMOS MANDAR */
        nombre:'Ivan Lucana',
        titulo:'Dev'
    });
})


app.get('/generic', (req, res) => {
    //res.sendFile(__dirname + '/public/generic.html');
    res.render('generic',{
            nombre:'Ivan Lucana',
            titulo:'Dev'
        });
});

app.get('/elements', (req, res) => {
    //res.sendFile(__dirname + '/public/elements.html');
    res.render('elements',{
        nombre:'Ivan Lucana',
        titulo:'Dev'
    });
});


app.get('*', (req, res) => {
    /* armamos el path, por eso el dirname */
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(puerto,()=>{
    console.log('Servidor corriendo en el puerto '+puerto);
})
 