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
    {color:'Naranja', imagen:'/images/camiseta1.png'},
    {color:'Rojo', imagen:'/images/camiseta2.png'},
    {color:'Azul', imagen:'/images/camiseta3.png'},
    {color:'Verde', imagen:'/images/camiseta4.png'}
];

app.get('/tienda' , function( peticion, respuesta){
respuesta.render('tienda.pug', { camisetas : lst_camisetas });
});

//app.get('/tienda/comprar/:color/:talla/' , function( peticion, respuesta){
app.get('/tienda/comprar/:color', function( peticion, respuesta){
    let datos_de_camiseta = lst_camisetas.filter( function(item){
        if (peticion.params.color == item.color) {
            return item;
        }
    })[0]
    respuesta.render('tienda_detalle.pug', { 
        color : peticion.params.color,
        camiseta: datos_de_camiseta
    });
});

app.use(function (peticion, respuesta){
    respuesta.status(400);
    let URL_error = peticion.originalUrl;
    respuesta.render('404.pug', {texto_error: URL_error});
});


 app.listen( 3000 , function(){
     console.log("escuchando en el puerto 3000");
 })
