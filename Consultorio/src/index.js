const express = require('express');
const globalConstants = require('./const/globalConstants.js');

const configuracionApi = (app) =>{
    app.use(express.json()); //Esto permite que Express entienda JSON
    app.use(express.urlencoded({extended:true})); //Permite que express entienda formularios enviados por post
}

const init = () => {
    const app = express();
    configuracionApi(app);
    
    app.listen(globalConstants.PORT, function(){
        console.log('Servidor funcionando en el puerto '+globalConstants.PORT);
    });
}

init();