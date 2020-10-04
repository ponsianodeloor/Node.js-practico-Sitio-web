var http = require('http');
var fs = require('fs');

http.createServer(function (peticion, respuesta){
    respuesta.writeHead(200, {'Content-Type': 'text/html'});
    
    var plantilla = './plantillas/';
    switch (peticion.url) {
        case '/':
            plantilla += 'inicio.html' ;
            break;
        case '/acerca':
            plantilla += 'sobrenode.html' ;
            break;        
        default:
            plantilla += '404.html' ;
            break;
    }

    fs.readFile(plantilla, (error, datos)=>{
        respuesta.write(datos);
        respuesta.end();
    });
    

}).listen(3000, 'localhost');

console.log('El servidor se muestra en http://localhost:3000');

