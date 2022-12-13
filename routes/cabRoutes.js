const express = require('express');
const controllers = require('../controller/cabcontroller');
const router = express.Router();
router.get('/booking',controllers.booking);
router.post('/booking',controllers.bookingPost);
router.get('/fetchbookingData',controllers.fetchbookingData);
router.get('/admin',controllers.showbooking);

module.exports = router;