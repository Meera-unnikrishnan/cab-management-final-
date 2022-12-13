const sequelize = require('../db');
const {DataTypes} = require('sequelize');


const CabBook = sequelize.define('cabBooking', {
      booking_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fullName:{
        type:DataTypes.STRING(25),
        allowNull:false
      },
      phone: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
      },
      cab_type:{
        type:DataTypes.STRING(50),
        allowNull:false
      },
     
      booking_date:{
        type:DataTypes.DATE,
        allowNull:false
      },
      booking_time:{
        type:DataTypes.TIME,
        allowNull:false
      },
      pickup_loc:{
        type: DataTypes.STRING(25),
        allowNull: false
      },
      dropoff_loc: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      Num_passenger: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      direction: {
        type: DataTypes.STRING(25),
        allowNull: false
      }
    
});



module.exports = CabBook;
