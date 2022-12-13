const sequelize = require('../db');

const CabBook = require('./cabBooking');

const User = sequelize.define('user', {
    id:{
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
      idproof: {
        type: DataTypes.STRING(25),
        allowNull: false
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
      pass_word: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: true
      }
});


User.hasMany(CabBook);
CabBook.belongsTo(User);
module.exports = User;