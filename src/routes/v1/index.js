const express = require('express');
const UserController = require('../../controller/user-controller');
const DriverController = require('../../controller/driver-controller');
const OrganizationController = require('../../controller/organization-controller')
const IsAuthenticated = require('../../middleware/isAuthenticated');
const upload = require('../../middleware/upload')
const router = express.Router();

router.post('/createUser', UserController.signUp );
router.post('/login', UserController.login);
router.get('/me', IsAuthenticated, UserController.getUserProfile);



router.get('/driver/me', IsAuthenticated, DriverController.getDriverProfile);



router.post('/organization/register', upload.fields([{
    name: 'registrationCertificate',
    maxCount: 1
    }]),
    OrganizationController.createOrganization);
router.post('/organization/login', OrganizationController.login);
router.get('/organization/me', IsAuthenticated, OrganizationController.getOrganizationProfile);



module.exports = router;