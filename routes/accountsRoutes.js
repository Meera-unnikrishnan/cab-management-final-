const express = require('express');
const controller = require('../controller/accountsController');
// const controllers=require('../controller/adminController')
const router = express.Router();
router.get('/login', controller.login);
router.post('/login', controller.loginPost);
router.get('/register', controller.register);
router.post('/register', controller.registerPost);
router.get('/index',controller.home);


router.get('/',controller.home)

// router.get('/userIndex',controller.userhome)
router.get('/userIndex',(req,res)=>{
    let mod = require("../controller/accountsController").data;
    mod = JSON.parse(mod)
    res.render('userIndex',{data:mod})
});
router.get('/user-update/:id',controller.userUpdate);
// router.post('/user-update/:id',controllers.userupdatePost)
router.post('/user-update/:id',controller.userUpdatePost);
router.get('/delete/:id',controller.userDelete);

router.get('/booking/:id',controller.booking);
router.post('/booking/:id',controller.bookingPost);
router.get('/userIndex',controller.bookingPost);
router.get('/view-bookings/:id',controller.viewbooking);
router.get('/viewbookings/:id',(req,res)=>{
    let mod = require("../controller/accountsController").data;
    mod = JSON.parse(mod)
    res.render('viewbookings',{data:mod})
});



// router.get('adminuser-update/:id',controller.adminuserupdatePost);
// router.post('adminuser-update/:id', controller.adminuserupdate);


// router.get('user-index',controller.bookingPost)
module.exports = router;
// router.get('/update/:id',controller.userhomeupdate);
// router.post('/update/:id',controller.userUpdatePost);

// router.get('/user-update/:id',(req,res)=>{
//     let mod = require("../controller/accountsController").data;
//     mod = JSON.parse(mod)
//     res.render('user-update',{data:mod});

// });
