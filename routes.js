const express = require('express');
const router = express.Router();
const adminController = require('./controllers/adminsController');

// Admin Routes
router.post('/admin', adminController.createAdmin);
router.get('/admin', adminController.getAdmins);

module.exports = router;