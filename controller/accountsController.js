const user= require("../model/model")
const cabBooking=require("../model/model")
const { body, validationResult } = require('express-validator');
const { request } = require("express");


module.exports.login = (req, res, next)=>{
    res.render('login');
}
module.exports.loginPost = async (req, res, next)=>{
    const {email, password} = req.body;
    // console.log(email)
    // console.log(password)
    // if(email=="admin@gmail.com" && password=="admin@123"){
    //     console.log("user found");
    //     res.redirect('/admin');
    // }

    const userFromDb = await user.User.findOne({
        where: {email: email, pass_word: password},
    });
    
    if(userFromDb == null){
       return res.render('login', {message: 'No user with this email or password was found.'})
    } 
     showData(JSON.stringify(userFromDb),req,res)
    //  res.redirect('/userIndex');
}
function showData(arg,req,res){
    res.redirect('/userIndex')
    module.exports.data = arg;
}

module.exports.adminuserupdate = async(req, res, next) => {
    // user.User.findByPk(req.params.id)
    //     .then(userFromDb => {
    //         console.log(JSON.stringify(userFromDb));
    //         res.render('adminuser-update', {
    //             data: JSON.parse(JSON.stringify(userFromDb))
    //         });
    //     });
    let data = await user.User.findByPk(req.params.id);
    console.log(data)
    res.render('adminuser-update',{data:data});
    }
module.exports.adminuserupdatePost = async(req, res, next) => {
  await user.User.findByPk(req.params.id)
        
          await  user.User.update({
                fullName: req.body.fullName,
                address: req.body.address,
                gender: req.body.inlineRadioOptions,
                state: req.body.state,
                city: req.body.city,
                phone: req.body.phone,
                email: req.body.email,
                pass_word: req.body.pass
                   
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                
                  await  res.redirect('/admin');
                
}




module.exports.userindex = (req,res,next) =>{
    res.render('userIndex');
}

module.exports.userUpdate =async  (req,res,next)=>{
    // user.User.findByPk(req.params.id)
    // .then(userFromDb => {
    //     res.render('user-update',{
    //         data : userFromDb,
    //     })
    // })
    let data = await user.User.findByPk(req.params.id);
    console.log(data)
    res.render('user-update',{data:data});

}

// module.exports.userUpdatePost = async (req,res,next)=>{
//     await user.User.update(
//         {
//       fullName: req.body.fullName,
//       address: req.body.address,
//       gender: req.body.inlineRadioOptions,
//       state: req.body.state,
//       city: req.body.city,
//       idproof: req.body.idproof,
//       phone: req.body.phone,
//       email: req.body.email,
//       pass_word: req.body.pass,
//         },
//         {
//             where: {
//                 id: req.params.id
//             }
//         }
//     )
//     res.redirect('/userIndex')

// }


module.exports.userUpdatePost = (req, res, next) => {
    user.User.findByPk(req.params.id)
         .then(user => {
             user.update({
                 fullName: req.body.fullName,
                 address: req.body.address,
                 gender: req.body.inlineRadioOptions,
                 state: req.body.state,
                 city: req.body.city,
                 phone: req.body.phone,
                 email: req.body.email,
                 pass_word: req.body.pass
                    
                 }, {
                     where: {
                         id: req.params.id
                     }
                 })
                 .then(count => {
                     res.redirect('/userIndex');
                 });
         });
 }
module.exports.userDelete = async(req,res,next) => {
    let id = req.params.id;
    let userFromDb = await user.User.findByPk(id);
    if( userFromDb != null)
    {
        await user.User.destroy(
            {
                where : 
                {
                    id : id
                }
            }
        );
        res.redirect('/index');
    }
}

module.exports.home = (req, res, next)=>{
    res.render('index');
}


module.exports.register = (req, res, next)=>{
    res.render('register');
}

module.exports.registerPost = async (req, res, next)=>{
    console.log(req.body);
    const {fullName,address,gender,state,city,idproof,phone,email,pass_word} = req.body;
    console.log(fullName)
    let existingUser = await user.User.findOne({
        where: {
            email: email
        }
    });

    if(existingUser){
        console.log("already registered")
        return res.render('register', {message: 'ALREADY REGISTERED..PLEASE LOGIN'});
    }

    await user.User.create({
      fullName: req.body.fullName,
      address: req.body.address,
      gender: req.body.inlineRadioOptions,
      state: req.body.state,
      city: req.body.city,
      idproof: req.body.idproof,
      phone: req.body.phone,
      email: req.body.email,
      pass_word: req.body.pass,
    }).then((user) => {
      res.redirect("/login");
    });

    
}
module.exports.booking =async  (req,res,next)=>{
    let data = await user.User.findByPk(req.params.id);
    console.log(data)
    res.render('booking',{data:data});
}

module.exports.bookingPost= (req, res, next) => {
        cabBooking.CabBook.create({
        fullName: req.body.Name,
        phone: req.body.phone,
        email: req.body.email,
        cab_type:req.body.cabtype,
        booking_date:req.body.bdate,
        booking_time:req.body.btime,
        pickup_loc:req.body.pLocation,
        dropoff_loc:req.body.dLocation,
        Num_passenger:req.body.passnum,
        direction:req.body.direction,
        user_id:req.params.id
            })
            .then(user => {
                res.redirect("/userIndex");
            })
    }
 module.exports.viewbooking=async (req,res)=>{
    let id=req.params.id;
    let booking = await cabBooking.CabBook.findOne({
        where: {
            user_id:id
        }
    })
    console.log(booking);
    res.render('view-bookings',{data:booking});   
 }


    