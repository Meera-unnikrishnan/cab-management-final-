const sequelize = require('./db');
const {DataTypes} = require('sequelize');


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
    // role:{
    //   type:DataTypes.STRING(10),
    //   defaultValue:"USER",
    //   allowNull:false
    // }
},{timestamps:false});

const Driver = sequelize.define('driver',{
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
     type: DataTypes.BIGINT,
     allowNull: false
   },
   aadhar:{
     type: DataTypes.BIGINT,
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
   }
  //  role:{
  //   type:DataTypes.STRING(10),
  //   defaultValue:"driver",
  //   allowNull:false
  //  }
});


const Cab = sequelize.define('cab', {
  cab_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cab_name: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cab_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
});




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

// const admin = sequelize.define('admin',{
//   id:{
//     type:DataTypes.INTEGER,
//     autoIncrement:true
//   },
//   Name:{
//     type:DataTypes.STRING(25),
//     allowNull:false
//   },
//   email:{
//     type:DataTypes.STRING(25),
//     unique:true,
//     allowNull:false
//   },
//   pass_word:{
//     type:DataTypes.STRING(25),
//     allowNull:false;
//   }
// })



User.hasMany(CabBook,{foreignKey : "user_id",sourceKey : 'id'});
CabBook.belongsTo(User,{foreignKey : "user_id",targetKey : 'id'});

Driver.hasMany(Cab,{foreignKey : "driver_id",sourceKey : 'driver_id'});
Cab.belongsTo(Driver,{foreignKey : "driver_id",targetKey : 'driver_id'});

Driver.hasMany(CabBook,{foreignKey : "driver_id",sourceKey : 'driver_id'});
CabBook.belongsTo(Driver,{foreignKey : "driver_id",targetKey : 'driver_id'});

Cab.hasMany(CabBook,{foreignKey : "cab_id",sourceKey : "cab_id"});
CabBook.belongsTo(Cab,{foreignKey : "cab_id",targetKey : 'cab_id'});



module.exports.User = User;
module.exports.CabBook = CabBook;
module.exports.Driver= Driver;
module.exports.Cab= Cab;
