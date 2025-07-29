const express = require('express');
const UserController = require('../../controller/user-controller');
const router = express.Router();

router.post('/createUser', UserController.signUp );
router.post('/login', UserController.login);

module.exports = router;