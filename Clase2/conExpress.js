const express = require('express');

const app = express();
app.use(express.json()); //Esto permite que Express entienda JSON
app.use(express.urlencoded({extended:true})); //Permite que express entienda formularios enviados por post



app.get('/', (req, res)=>{
    res.send("Hola desde Express (GET)");
});

app.get('/:parametro', (req, res)=>{
    res.send("Hola desde Express (GET). Recibí el parámetro "+req.params.parametro);
});

app.post('/', (req, res)=>{
    res.send("Hola desde Express (POST)");
});

app.post('/recibeParams', (req, res)=>{
    res.send("Hola desde Express (POST). Body:"+req.body.nombre);
});


app.listen(5000, function(){
    console.log('Servidor funcionando en http://localhost:5000');
});