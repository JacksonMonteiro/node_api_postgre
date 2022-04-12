const express = require('express');
const router = express.Router();
const adminController = require('./controllers/adminsController');
const employeeController = require('./controllers/employeesController');


// Admin Routes
router.get('/admin', adminController.verifyJWT, adminController.getAdmins);
router.get('/admin/:id', adminController.verifyJWT, adminController.getAdmin);

router.post('/admin', adminController.createAdmin);
router.post('/admin/login', adminController.login);

router.put('/admin/:id', adminController.verifyJWT, adminController.updateAdmin);

router.delete('/admin/:id', adminController.verifyJWT, adminController.deleteAdmin);

// Employee Routes
router.get('/employee', adminController.verifyJWT, employeeController.getEmployees);
router.get('/employee/:id', adminController.verifyJWT, employeeController.getemployee);

router.post('/employee', adminController.verifyJWT, employeeController.createEmployee);

router.put('/employee/:id', adminController.verifyJWT, employeeController.updateEmployee);
router.delete('/employee/:id', adminController.verifyJWT, employeeController.deleteEmployee);


module.exports = router;