require('dotenv').config();
// using dotenv to protect passwords and sesitive information
const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL ?
    new Sequelize(process.env.JAWSDB_URL) :
    new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        },
    });
// setting up sequelize
module.exports = sequelize;