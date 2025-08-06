const express = require('express');
const UserController = require('../../controller/user-controller');
const DriverController = require('../../controller/driver-controller');
const OrganizationController = require('../../controller/organization-controller')
const IsAuthenticated = require('../../middleware/isAuthenticated');
const router = express.Router();

router.post('/createUser', UserController.signUp );
router.post('/login', UserController.login);
router.post('/organization/register',OrganizationController.createOrganization);
router.get('/me', IsAuthenticated, UserController.getUserProfile);
router.get('/driver/me', IsAuthenticated, DriverController.getDriverProfile);
router.get('/organization/me', IsAuthenticated, OrganizationController.getOrganizationProfile);



module.exports = router;