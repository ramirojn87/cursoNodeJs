const models = require("../database/models/index")
const errors = require("../const/errors")

module.exports = {

    list: async (req, res, next) => {
        try {
            const hospitales = await models.hospital.findAll();
            res.json(hospitales);
        } catch (e) {
            return next(e)
        }
    },
    
    get: async (req, res, next) => {
        try {
            const hospital = await models.hospital.findByPk(req.params.id)
            if (!hospital) { return next(errors.HospitalInexistente)}
            res.json({
                success: true,
                data: {
                    hospital: hospital
                }
            })
        } catch (e) {
            return next(e)
        }
    },

    add: async (req, res, next) => {
        try {
            const oldHospital = await models.hospital.findOne({
                where: {nombre: req.body.nombre}
            })
            if (oldHospital) { return next(errors.HospitalYaRegistrado)}

            const hospital = await models.hospital.create(req.body)
            res.json(hospital);
        } catch (e) {
            return next(e)
        }
    }

}