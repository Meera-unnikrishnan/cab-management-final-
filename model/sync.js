// const movie = require('./movie');
// const user = require('./user');
// const cab = require('./cab');
// const cabBooking = require('./cabBooking');
// const {User,Driver,Cab,CabBook} = require('./model');

const db = require('./model')
db.User.sync({alter: true});
db.CabBook.sync({alter:true});
db.Driver.sync({alter:true});
db.Cab.sync({alter:true});


