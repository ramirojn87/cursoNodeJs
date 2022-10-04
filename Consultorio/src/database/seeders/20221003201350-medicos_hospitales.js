'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.medico_hospital.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    medicoId: "1",
                    hospitalId: "2"
                }
            }),
            models.medico_hospital.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    medicoId: "2",
                    hospitalId: "2"
                }
            }),
            models.medico_hospital.findOrCreate({
                where: {
                    id: "3"
                },
                defaults: {
                    medicoId: "1",
                    hospitalId: "1"
                }
            }),
            models.medico_hospital.findOrCreate({
                where: {
                    id: "4"
                },
                defaults: {
                    medicoId: "3",
                    hospitalId: "2"
                }
            }),
            models.medico_hospital.findOrCreate({
                where: {
                    id: "5"
                },
                defaults: {
                    medicoId: "4",
                    hospitalId: "2"
                }
            }),
            models.medico_hospital.findOrCreate({
                where: {
                    id: "6"
                },
                defaults: {
                    medicoId: "4",
                    hospitalId: "1"
                }
            }),
        ])
    },
};
