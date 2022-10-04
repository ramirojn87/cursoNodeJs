const Joi = require('joi') // importar Joi para validar los datos de entrada

let add = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email().required(),
    especialidadId: Joi.number().optional()
})

module.exports = {
    add
}