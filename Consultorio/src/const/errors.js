'use strict';

module.exports = {
    'ValidationError': {
        code: 1000,
        message: 'Error de validación'
    },

    'FaltanCampos': {
        code: 1001,
        message: 'Faltan parámetros necesarios'
    },

    "HospitalInexistente": {
        code: 4001,
        message: 'El hospital consultado es inexistente'
    },

    "HospitalYaRegistrado": {
        code: 6001,
        message: 'Ya se encuentra cargado un hospital con ese nombre'
    },

    "MedicoInexistente": {
        code: 4002,
        message: 'El médico consultado es inexistente'
    },

    "MedicoEmailYaRegistrado": {
        code: 6002,
        message: 'Otro médico ya se encuentra registrado con el email ingresado'
    },

    "EspecialidadInexistente": {
        code: 4003,
        message: 'La especialidad consultada es inexistente'
    },

    "EspecialidadYaRegistrada": {
        code: 6003,
        message: 'Ya se encuentra cargada una especialidad con ese nombre'
    }
}