'use strict';

const models = require("../models/index");
const bcrypt = require("bcryptjs");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.medico.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Jorge",
                    apellido: "Diaz",
                    email: "jorge.diaz@mail.com",
                    password: bcrypt.hashSync("123456"),
                    especialidadId: "1"
                }
            }),
            models.medico.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "Sandra",
                    apellido: "Rodriguez",
                    email: "sandra.rodriguez@mail.com",
                    password: bcrypt.hashSync("123456"),
                    especialidadId: "3"
                }
            }),
            models.medico.findOrCreate({
                where: {
                    id: "3"
                },
                defaults: {
                    nombre: "Natalia",
                    apellido: "Sanchez",
                    email: "natalia.sanchez@mail.com",
                    password: bcrypt.hashSync("123456"),
                    especialidadId: "3"
                }
            }),
            models.medico.findOrCreate({
                where: {
                    id: "4"
                },
                defaults: {
                    nombre: "Pablo",
                    apellido: "Gutierrez",
                    email: "pablo.gutierrez@mail.com",
                    password: bcrypt.hashSync("123456"),
                    especialidadId: "2"
                }
            })
        ])
    },
};
