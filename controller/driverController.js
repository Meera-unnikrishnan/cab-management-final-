const driver = require('../model/model');
const { body, validationResult } = require('express-validator');
module.exports.driver = (req, res, next)=>{
    res.render('driverIndex');
}

module.exports.driverReg= (req, res, next)=>{
    res.render('driverRegister');
}

module.exports.driverRegPost = async (req, res, next)=>{
    console.log(req.body);
    const {fullName,address,gender,state,city,phone,aadhar,license_num,email,pass_word} = req.body;
    console.log(fullName)
    let existingUser = await driver.Driver.findOne({
        where: {
            email: email
        }
    });

    if(existingUser){
        console.log("already registered")
        return res.render('driverRegister', {message: 'ALREADY REGISTERED..PLEASE LOGIN'});
    }

    await driver.Driver.create({
      fullName: req.body.fullName,
      address: req.body.address,
      gender: req.body.inlineRadioOptions,
      state: req.body.state,
      city: req.body.city,
      phone: req.body.phone,
      aadhar:req.body.aadhar,
      license_num:req.body.license,
      email: req.body.email,
      pass_word: req.body.pass,
    }).then((user) => {
      res.redirect("/driverLogin");
    });

    
}


module.exports.driverLogin= (req, res, next)=>{
    res.render('driverLogin');
}

module.exports.driverLoginPost = async (req, res, next)=>{
    const {email, password} = req.body;
    // console.log(email)
    // console.log(password)
    // if(email=="admin@gmail.com" && password=="admin@123"){
    //     console.log("user found");
    //     res.redirect('/admin');
    // }

    const userFromDb = await driver.Driver.findOne({
        where: {email: email, pass_word: password},
    });
    
    if(userFromDb == null){
       return res.render('login', {message: 'No user with this email or password was found.'})
    } 
     showData(JSON.stringify(userFromDb),req,res)
    //  res.redirect('/userIndex');
}
function showData(arg,req,res){
    res.redirect('/driverIndex')
    module.exports.data = arg;
}



module.exports.driverUpdate =async  (req,res,next)=>{
    // user.User.findByPk(req.params.id)
    // .then(userFromDb => {
    //     res.render('user-update',{
    //         data : userFromDb,
    //     })
    // })
    let data = await driver.Driver.findByPk(req.params.id);
    console.log(data)
    res.render('driver-update',{data:data});

}


module.exports.driverUpdatePost = (req, res, next) => {
    driver.Driver.findByPk(req.params.id)
         .then(user => {
             user.update({
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
                 .then(count => {
                     res.redirect('/driverIndex');
                 });
         });
 }



module.exports.driverDelete = async(req,res,next) => {
    let id = req.params.id;
    let userFromDb = await driver.Driver.findByPk(id);
    if( userFromDb != null)
    {
        await driver.Driver.destroy(
            {
                where : 
                {
                    driver_id : id
                }
            }
        );
        res.redirect('/index');
    }
}
module.exports.fetchdriverData = (req, res, next) => {
    let array = []
    driver.Driver.findAll().then(Driver => {
            console.log(Driver)
           Driver.forEach((i)=>{   
            array.push(i.dataValues)         
           })
           res.send({data:array})
            // res.json(User)
           
        })
    }

    module.exports.showDriver = (req, res, next) => {
        driver.Driver.findAll().then(Driver => {
                res.render('admin', {
                    data: Driver
                });
            
                res.json(Driver)
            })
        }
       