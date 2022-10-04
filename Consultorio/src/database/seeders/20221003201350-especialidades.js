'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.especialidad.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Traumatología"
                }
            }),
            models.especialidad.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                  nombre: "Pediatría"
                }
            }),
            models.especialidad.findOrCreate({
                where: {
                    id: "3"
                },
                defaults: {
                  nombre: "Cirujano"
                }
            })
        ])
    },
};
