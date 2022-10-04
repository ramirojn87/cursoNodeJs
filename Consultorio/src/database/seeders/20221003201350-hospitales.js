'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.hospital.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "San Juan de Dios",
                    direccion: "Calle 27 y 70, B1900 La Plata, Provincia de Buenos Aires"
                }
            }),
            models.hospital.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                  nombre: "San Martín",
                  direccion: "Av. 1 y 70, B1900 La Plata, Provincia de Buenos Aires"
                }
            })
        ])
    },
};
