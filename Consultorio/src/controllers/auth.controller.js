const bcrypt = require("bcryptjs")

const models = require("../database/models/index")
const sign = require("../middlewares/signJWT")
const errors = require("../const/errors")

module.exports = {

    login: async (req, res, next) => {
        try {
            const medico = await models.medico.findOne({
                where: {email: req.body.email}
            })
            if (!medico || !bcrypt.compareSync(req.body.password, medico.password)) { 
                return next(errors.MedicoLoginInvalido)
            }
            res.json({
                success: true,
                data:{
                    token: sign(medico),
                    id: medico.id
                }
            });
        } catch (e) {
            return next(e);
        }
    },
    
    register: async (req, res, next) => {
        try {
            const especialidad = await models.especialidad.get(req.params.id)
            if (!especialidad){ return next(errors.EspecialidadInexistente)}
            res.json({
                success: true,
                data: {
                    especialidad: especialidad
                }
            });
        } catch (e) {
            return next(e);
        }
    },

}