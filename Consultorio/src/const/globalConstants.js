require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 5000,
    DB: process.env.DB,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD
}