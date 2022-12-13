const sequelize = require('../db');
const {DataTypes} = require('sequelize');
const cab=require('./cab');
const CabBook = require('./cabBooking');

const Driver = sequelize.define('driver', {
     driver_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fullName: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      address: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      state: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      city: {
        type: DataTypes.STRING(25),
        allowNull: false
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      aadhar:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      license_num:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
      },
      pass_word: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: true
      },
     

});

Driver.hasMany(cab);
cab.belongsTo(Driver);

Driver.hasMany(CabBook);
CabBook.belongsTo(Driver);

module.exports = Driver;