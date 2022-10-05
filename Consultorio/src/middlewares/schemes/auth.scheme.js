const Joi = require('joi') // importar Joi para validar los datos de entrada

let login = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()

})
module.exports = {
    login
}