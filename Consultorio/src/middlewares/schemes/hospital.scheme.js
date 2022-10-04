const Joi = require('joi') // importar Joi para validar los datos de entrada

let add = Joi.object({
    nombre: Joi.string().required(),
    direccion: Joi.string().optional()
})

module.exports = {
    add
}