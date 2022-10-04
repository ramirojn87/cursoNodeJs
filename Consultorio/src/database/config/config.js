const globalConstants = require('../../const/globalConstants.js');

module.exports = {
  "development": {
    "username": globalConstants.DB_USER,
    "password": globalConstants.DB_PASSWORD,
    "database": globalConstants.DB,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "logging": true
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "consultorio_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "consultorio_prod",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
