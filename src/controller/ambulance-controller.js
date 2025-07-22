const { AmbulanceService } = require('../service/index');
const ambulanceService = new AmbulanceService();


const createAmbulance = async (req, res) => {
    try {
        const data = {
            vehicalNumber: req.body.vehicalNumber,
            vehicalType: req.body.vehicalType,
            driverId: req.body.driverId,
            hospitalId: req.body.hospitalId,
            yearsOfRegistration: req.body.yearsOfRegistration,
            verificationStatus: 'PENDING'
        }
        if (req.files && req.files.length > 0) {
            data.rcDocument = req.files['rcDocument']?.[0]?.location;
            data.insuranceDocument = req.files['insuranceDocument']?.[0]?.location;
            data.permitDocument = req.files['permitDocument']?.[0]?.location;
            
        } else {
            return res.status(400).json({
                data: {},
                success: false,
                message: 'Documents are required',
                err: {}
            });
        }
        const newAmbulance = await ambulanceService.create(data);
        res.status(201).json({
            data: newAmbulance,
            success: true,
            message: 'Ambulance created successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error during ambulance creation in AmbulanceController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error creating ambulance',
            err: error
        });
    }
}

const getAllAmbulances = async (req, res) => {
    try {
        const ambulances = await ambulanceService.findAll();
        res.status(200).json({
            data: ambulances,
            success: true,
            message: 'Ambulances fetched successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error fetching ambulances in AmbulanceController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error fetching ambulances',
            err: error
        });
    }
}

const getAmbulanceById = async (req, res) => {
    try {
        const ambulanceId = req.params.id;
        const ambulance = await ambulanceService.findById(ambulanceId);
        res.status(200).json({
            data: ambulance,
            success: true,
            message: 'Ambulance fetched successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error fetching ambulance by ID in AmbulanceController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error fetching ambulance by ID',
            err: error
        });
    }
}

const updateAmbulance = async (req, res) => {
    try {
        const ambulanceId = req.params.id;
        const updatedAmbulance = await ambulanceService.update(ambulanceId, req.body);
        res.status(200).json({
            data: updatedAmbulance,
            success: true,
            message: 'Ambulance updated successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error updating ambulance in AmbulanceController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error updating ambulance',
            err: error
        });
    }
}

const deleteAmbulance = async (req, res) => {
    try {
        const ambulanceId = req.params.id;
        const deletedAmbulance = await ambulanceService.delete(ambulanceId);
        res.status(200).json({
            data: deletedAmbulance,
            success: true,
            message: 'Ambulance deleted successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error deleting ambulance in AmbulanceController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error deleting ambulance',
            err: error
        });
    }
}


module.exports = {
    createAmbulance,
    getAllAmbulances,
    getAmbulanceById,
    updateAmbulance,
    deleteAmbulance
};