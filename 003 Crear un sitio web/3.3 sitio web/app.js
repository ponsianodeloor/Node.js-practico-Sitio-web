var express = require('express');
var fs = require('fs');
var app = express();

/**
cada vez que se desee buscar un archivo lo hara en esta ruta
*/
app.use (express.static(__dirname + '/public') );

app.get('/' , function( peticion, respuesta){
    respuesta.sendFile('index.html')
 })


 app.listen( 3000 , function(){
     console.log("escuchando en el puerto 3000");
 })
