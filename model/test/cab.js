const sequelize = require('../db');
const {DataTypes} = require('sequelize');
const CabBook=require('./cabBooking');
const Cab = sequelize.define('cab', {
    cab_numb:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cab_Name: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      cab_destination: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      cab_seat: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
});
 

Cab.hasMany(CabBook);
CabBook.belongsTo(Cab);
module.exports = Cab;