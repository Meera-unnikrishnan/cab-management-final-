const express = require('express');
const controller = require('../controller/adminController');
// const { route } = require('./accountsRoutes');

const router = express.Router();

router.get('/admin',controller.showAdmin);

router.post('/admin',controller.adminloginPost);

router.get('/adminlogin',controller.adminlogin)
router.post('/adminlogin',controller.adminloginPost)

router.get('/admin', controller.showUser);
// router.post('/adminuser-update/:id', controller.showUser);
// router.get('/register', controller.register);
// router.post('/register', controller.registerPost);
// router.get('/index',controller.home);

// router.get('/admin',controller.showUser);
router.get('/fetchData',controller.fetchData);




// router.get('/', controller.index);
router.get('/usercreate', controller.adminusercreate);
router.post('/usercreate', controller.adminusercreatePost);
// router.get('adminuser-update/:id', controller.adminuserupdate);
// router.get('adminuser-update/:id',controller.adminuserupdate);

// router.post('adminuser-update/:id', controller.adminuserupdatePost);
// router.post('/admin', controller.userupdate);
router.get('/userdelete/:id', controller.adminuserdelete);
// router.get('/admin',controller.userupdatePost);


router.get('/adminuser-update/:id', controller.adminuserupdate);
// router.get('adminuser-update/:id', controller.adminuserupdate);
router.post('/adminuser-update/:id', controller.adminuserupdatePost);
router.get('adminuser-update', controller.adminuserupdate);
router.post('adminuser-update', controller.adminuserupdatePost);
router.get('/admindriver-update/:id', controller.admindriverupdate);
router.post('/admindriver-update/:id', controller.admindriverupdatePost);
router.get('/admincabcreate', controller.admincabcreate);
router.get('/admincabcreate', controller.admincabcreatePost);
router.get('/admincabcreate', controller.admincabcreate);
router.post('/admincabcreate', controller.admincabcreatePost);
router.get('/fetchcabData',controller.fetchcabData);
router.get('/admin',controller.showcab);

module.exports = router;