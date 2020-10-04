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
 })


 app.listen( 3000 , function(){
     console.log("escuchando en el puerto 3000");
 })
