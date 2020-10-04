var express = require('express');
var app = express();

var pug = require('pug');

/**
cada vez que se desee buscar un archivo lo hara en esta ruta
*/
app.use (express.static(__dirname + '/public') );

app.get('/' , function( peticion, respuesta){
    respuesta.render('index.pug', {
        titulo: 'Test',
        textoParrafo: 'Este es un parrafo de prueba'
    });
 });

var lst_camisetas = [
    {color:'Naranja', imagen:'images/camiseta1.png'},
    {color:'Roja', imagen:'images/camiseta2.png'},
    {color:'Azul', imagen:'images/camiseta3.png'},
    {color:'Verde', imagen:'images/camiseta4.png'}
];
app.get('/tienda' , function( peticion, respuesta){
respuesta.render('tienda.pug', { camisetas : lst_camisetas });
});


 app.listen( 3000 , function(){
     console.log("escuchando en el puerto 3000");
 })
