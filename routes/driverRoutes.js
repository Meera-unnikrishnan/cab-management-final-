const express = require('express');
const controller = require('../controller/driverController');
const router = express.Router();

// router.get('/driverIndex',controller.driver);
router.get('/driverLogin', controller.driverLogin);
router.post('/driverLogin', controller.driverLoginPost);
router.get('/driverRegister',controller.driverReg);
router.post('/driverRegister',controller.driverRegPost);
router.get('/fetchdriverData',controller.fetchdriverData);
router.get('/driverIndex',(req,res)=>{
    let mod = require("../controller/driverController").data;
    mod = JSON.parse(mod)
    res.render('driverIndex',{data:mod})
});

router.get('/driver-update/:id',controller.driverUpdate);
router.post('/driver-update/:id',controller.driverUpdatePost);
router.get('/driverdelete/:id',controller.driverDelete);
router.get('/admin', controller.showDriver);

// router.get('/driverindex',controller.driverUpdatePost)


module.exports = router;
