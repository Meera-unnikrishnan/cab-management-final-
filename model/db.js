const {Sequelize} = require('sequelize')

const sequelize = new Sequelize("cbms", "root", "meera@123", {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;