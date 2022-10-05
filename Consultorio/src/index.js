const express = require('express');
const globalConstants = require('./const/globalConstants');
const routerConfig = require('./routes/index.routes');
const logger = require('morgan');

let errorHandler = require('./middlewares/error')
let createError = require('http-errors')

const configuracionApi = (app) =>{
    app.use(express.json()); //Esto permite que Express entienda JSON
    app.use(express.urlencoded({extended:true})); //Permite que express entienda formularios enviados por post
    app.use(logger('dev'))
}

const configuracionRouter = (app) =>{
    app.use('/api/', routerConfig.rutas_init());
    app.use('/', routerConfig.rutas_auth());
    app.use(function (req, res, next) { 
        next(createError(404)) // si no se encuentra la ruta, se envia un error 404
      })
    app.use(errorHandler)
}

const init = () => {
    const app = express();
    configuracionApi(app);
    configuracionRouter(app);
    
    app.listen(globalConstants.PORT, function(){
        console.log('Servidor funcionando en el puerto '+globalConstants.PORT);
    });
}

init();