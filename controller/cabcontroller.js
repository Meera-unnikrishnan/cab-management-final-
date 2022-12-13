// const CabBook = require('../model/model').cabBooking;
const cabBooking = require('../model/model');
const { body, validationResult } = require('express-validator');

module.exports.booking= (req, res, next)=>{
    res.render('booking');
}

module.exports.bookingPost = async (req, res, next)=>{
    console.log(req.body);

    await cabBooking.CabBook.create({
          fullName:req.body.Name,
          phone:req.body.phone,
          email: req.body.email,
          cab_type:req.body.cabtype,
          booking_date:req.body.date,
          booking_time:req.body.Time,
          pickup_loc:req.body.pLocation,
          dropoff_loc: req.body.dLocation,
          Num_passenger:req.body.passnum, 
          direction:req.body.direction
      }).then((user) => {
        res.redirect("/index");
      });
  
      
  }

  module.exports.fetchbookingData = (req, res, next) => {
    let array = []
    cabBooking.CabBook.findAll().then(CabBook => {
            console.log(CabBook)
           CabBook.forEach((i)=>{   
            array.push(i.dataValues)         
           })
           res.send({data:array})
            // res.json(User)
           
        })
    }
    module.exports.showbooking = (req, res, next) => {
        cabBooking.CabBook.findAll().then(CabBook => {
                res.render('admin', {
                    data: CabBook
                });
            
                res.json(CabBook)
            })
        }