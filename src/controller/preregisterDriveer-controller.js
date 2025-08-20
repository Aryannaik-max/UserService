const { PreRegisterDriverService } = require('../services');
const PreRegisterDriverService = require('../services/preregisterDriver-service');

const preRegisterDriverService = new PreRegisterDriverService();

const createPreRegisterDriver = async (req, res) => {
    try {
        const data = {
            orgId: req.body.orgId,
            name: req.body.name,
            email: req.body.email,
            dateOfBirth: req.body.dateOfBirth,
            licenseNumber: req.body.licenseNumber,
            phoneNumber: req.body.phoneNumber,
            insuranceExpiryDate: req.body.insuranceExpiryDate,
            medicalCertificateNumber: req.body.medicalCertificateNumber,
            verificationStatus: 'PENDING'
        }
        const response = await preRegisterDriverService.create(data);
        res.status(200).json({
            data: response,
            success: true,
            message: 'Pre-registered driver created successfully',
            err: {}
        });
    } catch (error) {
        console.error('Error during pre-register driver creation:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error creating pre-registered driver',
            err: error
        });
    }
}

const getPreRegisterDrivers = async (req, res) => {
    try {
        const response = await preRegisterDriverService.findAll();
        res.status(200).json({
            data: response,
            success: true,
            message: 'Pre-registered drivers retrieverd successfully',
            err: {}
        });
    } catch (error) {
        console.error('Error retrieving pre-registered drivers:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error retrieving pre-registered drivers',
            err: error
        });
    }
}

const updatePreRegisterDriver = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await preRegisterDriverService.update(id, req.body);
        res.status(200).json({
            data: response,
            success: true,
            message: 'Pre-registered driver updated successfully',
            err: {}
        });
    } catch (error) {
        console.error('Error updateting pre-registered driver:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error updating pre-registered driver',
            err: error
        });
    }
}

const deletePreRegisterDriver = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await preRegisterDriverService.delete(id);
        res.status(200).json({
            data: response,
            success: true,
            message: 'Pre-registered driver deleted successfully',
            err: {}
        });
    } catch (error) {
       console.error('Error deleting pre-registered driver:', error);
       res.status(500).json({
            data: {},
            success: false,
            message: 'Error deleting pre-registered driver',
            err: error
       });
    }
}

module.exports = {
    createPreRegisterDriver,
    getPreRegisterDrivers,
    updatePreRegisterDriver,
    deletePreRegisterDriver
}