const { DriverService } = require('../servicee/index');
const driverService = new DriverService();

const createDriver = async (req, res) => {
    try {
        const data = {
            userId: req.body.userId,
            driverLicenseNumber: req.body.driverLicenseNumber,
            contactNumber: req.body.contactNumber,
            verificationStatus: 'PENDING',
            location_lat: req.body.location_lat,
            location_long: req.body.location_long,
        }

        if (req.files && req.files.length > 0) {
            data.driverLicenseDocument = req.files['driverLicenseDocument']?.[0]?.location;
            data.driverPhoto = req.files['driverPhoto']?.[0]?.location;
        } else {
            return res.status(400).json({
                data: {},                
                success: false,
                message: 'Driver documents are required',
                err: {}
            });
        }

        const newDriver = await driverService.create(data);
        res.status(201).json({
            data: newDriver,
            success: true,
            message: 'Driver created successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error during driver creation in DriverController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error creating driver',
            err: error
        });
    }
}

const getAllDrivers = async (req, res) => {
    try {
        const drivers = await driverService.findAll();
        res.status(200).json({
            data: drivers,
            success: true,
            message: 'Drivers fetched successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error fetching drivers in DriverController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error fetching drivers',
            err: error
        });
    }
}

const getDriverById = async (req, res) => {
    try {
        const driverId = req.params.id;
        const driver = await driverService.findById(driverId);
        res.status(200).json({
            data: driver,
            success: true,
            message: 'Driver fetched successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error fetching driver by ID in DriverController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error fetching driver by ID',
            err: error
        });
    }
}

const updateDriver = async (req, res) => {
    try {
        const driverId = req.params.id;
        const updatedDriver = await driverService.update(driverId, req.body);
        res.status(200).json({
            data: updatedDriver,
            success: true,
            message: 'Driver updated successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error updating driver in DriverController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error updating driver',
            err: error
        });
    }
}

const deleteDriver = async (req, res) => {
    try {
        const driverId = req.params.id;
        const deletedDriver = await driverService.delete(driverId);
        res.status(200).json({
            data: deletedDriver,
            success: true,
            message: 'Driver deleted successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error deleting driver in DriverController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error deleting driver',
            err: error
        });
    }
}

module.exports = {
    createDriver,
    getAllDrivers,
    getDriverById,
    updateDriver,
    deleteDriver
};