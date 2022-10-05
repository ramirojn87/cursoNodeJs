var http = require('http')

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('Hola!');
}).listen(5000);

console.log('Servidor funcionando en http://localhost:5000');