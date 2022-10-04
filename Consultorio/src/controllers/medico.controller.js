const models = require("../database/models/index")
const errors = require("../const/errors")

module.exports = {
    
    list: async (req, res, next) => {
        try {
            const medicos = await models.medico.findAll()
            res.json({
                success: true,
                data: {
                    medicos: medicos
                }
            });
        } catch (e) {
            return next(e);
        }
    },
    
    get: async (req, res, next) => {
        try {
            const medico = await models.medico.findOne({
                where: {id: req.params.id},
                include: [{
                        model: models.medico_hospital,
                        include: [{
                            model: models.hospital
                        }]
                    },
                    {
                        model: models.especialidad
                    }]
            })
            if (!medico){ return next(errors.MedicoInexistente)}
            res.json({
                success: true,
                data: {
                    medico: medico
                }
            });
        } catch (e) {
            return next(e);
        }
    },

    add: async (req, res, next) => {
        try {
            const oldMedico = await models.medico.findOne({
                where: {email: req.body.email}
            })
            if (oldMedico) { return next(errors.MedicoEmailYaRegistrado)}
            const medico = await models.medico.create(req.body)
            res.json({
                success: true,
                data: {
                    medico: medico
                }
            });
        } catch (e) {
            return next(e);
        }
    }

}