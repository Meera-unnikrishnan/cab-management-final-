const user = require('../model/model')
const cabBooking=require("../model/model")
const driver=require("../model/model")
const cab=require("../model/model");
const { body, validationResult } = require('express-validator');
const { request } = require("express");


module.exports.showAdmin = (req, res, next) => {
    res.render('admin');
}
module.exports.adminlogin = (req, res, next)=>{
    res.render('adminlogin');
}
module.exports.adminloginPost = async (req, res, next)=>{
    const {email, password} = req.body;
    // console.log(email)
    // console.log(password)
    if(email=="admin@gmail.com" && password=="admin@123"){
        console.log("user found");
        res.redirect('/admin');
    }
    else{
       
            return res.render('adminlogin', {message: 'No user with this email or password was found.'})
         } 
    }

module.exports.showUser = (req, res, next) => {
    user.User.findAll().then(User => {
            res.render('admin', {
                data: User
            });
        
            res.json(User)
        })
    }
   
 module.exports.fetchData = (req, res, next) => {
        let array = []
        user.User.findAll().then(User => {
                console.log(User)
               User.forEach((i)=>{   
                array.push(i.dataValues)         
               })
               res.send({data:array})
                // res.json(User)
               
            })
        }


module.exports.adminuserupdate = async(req, res, next) => {
            user.User.findByPk(req.params.id)
                .then(userFromDb => {
                
                    console.log("admin --------------------------")
                    console.log(JSON.stringify(userFromDb));
                    res.render('adminuser-update', {
                        data: JSON.parse(JSON.stringify(userFromDb))
                    });
                });
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
        
    

module.exports.adminusercreate = (req, res, next) => {
    res.render('usercreate');
}

module.exports.adminusercreatePost = (req, res, next) => {
    user.User.create({
        fullName: req.body.fullName,
        address: req.body.address,
        gender: req.body.inlineRadioOptions,
        state: req.body.state,
        city: req.body.city,
        idproof: req.body.idproof,
        phone: req.body.phone,
        email: req.body.email,
        pass_word: req.body.pass
        })
        .then(userFromDb => {
            res.redirect("/admin");
        })
}


module.exports.adminuserdelete = async (req, res, next) => {
    let id = req.params.id;
    let userFromDb = await user.User.findByPk(id);
    console.log("finding")
    if (userFromDb != null) {
        await user.User.destroy({
            where: {
                id: id
            }
           
        });
        console.log("deleted");
        res.redirect("/admin");
    }
}

module.exports.admindriverupdate = async(req, res, next) => {
    driver.Driver.findByPk(req.params.id)
        .then(userFromDb => {
        
            console.log("admin --------------------------")
            console.log(JSON.stringify(userFromDb));
            res.render('admindriver-update', {
                data: JSON.parse(JSON.stringify(userFromDb))
            });
        });
    }

    module.exports.admindriverupdatePost = async(req, res, next) => {
        await driver.Driver.findByPk(req.params.id)
              
                await  driver.Driver.update({
                    fullName: req.body.fullName,
                    address: req.body.address,
                    gender: req.body.inlineRadioOptions,
                    state: req.body.state,
                    city: req.body.city,
                    phone: req.body.phone,
                    aadhar:req.body.aadhar,
                    license_num:req.body.license,
                    email: req.body.email,
                    pass_word: req.body.pass
                         
                      }, {
                          where: {
                              driver_id: req.params.id
                          }
                      })
                      
                        await  res.redirect('/admin');
                      
      }

    module.exports.admincabcreate = (req, res, next)=>{
        driver.Driver.findAll().then((driver)=>{
           res.render('admincabcreate',{
                driver : driver,
           })
        //    console.log(driver)
            })
            
        }

module.exports.admincabcreatePost = (req, res, next) => {
    console.log(req.body.drivername);
    var temp = req.body.drivername;
    temp = temp.split(':')[1]
    console.log(temp)

            cab.Cab.create({
                cab_name: req.body.cabname,
                cab_type: req.body.cabtype,
                driver_id:temp
                })
                .then(userFromDb => {
                    res.redirect("/admin");
                })
        }
    
        module.exports.fetchcabData = (req, res, next) => {
            let array = []
            cab.Cab.findAll().then(Cab => {
                    console.log(Cab)
                   Cab.forEach((i)=>{   
                    array.push(i.dataValues)         
                   })
                   res.send({data:array})
                    // res.json(User)
                   
                })
            }
            module.exports.showcab = (req, res, next) => {
                cab.Cab.findAll().then(Cab=> {
                        res.render('admin', {
                            data: Cab
                        });
                    
                        res.json(Cab)
                    })
                }
    
    
           
    
            // driver.every(user => console.log(user.dataValues.Drive_name))
    
    
    
       
    
    