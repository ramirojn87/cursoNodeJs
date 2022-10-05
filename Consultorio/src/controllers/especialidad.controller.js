const models = require("../database/models/index")
const errors = require("../const/errors")

module.exports = {

    list: async (req, res, next) => {
        try {
            const especialidades = await models.especialidad.findAll()
            res.json({
                success: true,
                data: {
                    especialidades: especialidades
                }
            });
        } catch (e) {
            return next(e);
        }
    },
    
    get: async (req, res, next) => {
        try {
            const especialidad = await models.especialidad.findByPk(req.params.id)
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

    add: async (req, res, next) => {
        try {
            const oldEspecialidad = await models.especialidad.findOne({
                where: {nombre: req.body.nombre}
            })
            
            if (oldEspecialidad) { return next(errors.EspecialidadlYaRegistrada)}
            const especialidad = await models.especialidad.create(req.body)
            res.json(especialidad);
        } catch (e) {
            return next(e);
        }
    }

}