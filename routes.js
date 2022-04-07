const express = require('express');
const router = express.Router();
const controller = require('./controllers/userController');

router.get('/', controller.getUsers);
router.post('/user', controller.createUser);
router.put('/user/:id', controller.updateUser);
router.get('/user/:id', controller.getUser);
router.delete('/user/:id', controller.deleteUser);

module.exports = router;