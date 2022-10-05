const jwt = require('jsonwebtoken')
const moment = require('moment')
const errors = require('../const/errors')
const models = require('../database/models/index')
const globalConstants = require('../const/globalConstants')

module.exports = async function (req, res, next) {
    if (req.header('Authorization') && req.header('Authorization').split(' ').length > 1) {
        try {
            let dataToken = jwt.verify(req.header('Authorization').split(' ')[1], globalConstants.JWT_SECRET)
            if (dataToken.exp <= moment().unix()){
                return next(errors.SesionExpirada) // Si el token expiró, devuelvo error
            }
            if (!dataToken.id) return next(errors.TokenInvalido)
            res.locals.token = dataToken 
            const medico = await models.medico.findOne({
                where: {
                    id: dataToken.id
                }
            })
            if (!medico) return next(errors.MedicoNoAutorizado)
            res.locals.medico = medico //me puedo guardar el usuario en el locals para usarlo en las rutas que necesiten el usuario
            next() // Si todo está bien, paso al siguiente middleware o controlador
        } catch (err) {
            console.log(err)
            return next(errors.SesionExpirada)
        }
    } else {
        return next(errors.MedicoNoAutorizado)
    }
}