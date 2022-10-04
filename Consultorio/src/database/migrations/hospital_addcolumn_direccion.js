'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn('hospital', 'direccion', {
                type: Sequelize.STRING,
                allowNull: true,
            }),
        ]);
    },

    down: (queryInterface, Sequelize) => {
    }
}