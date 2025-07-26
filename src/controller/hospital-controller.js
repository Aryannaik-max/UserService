const { HospitalService } = require('../service/index');
const hospitalService = new HospitalService();


const createHospital = async (req, res) => {
    try {

        const data = {
            orgId: req.body.orgId,
            bedsAvailabel: req.body.bedsAvailabel,
            status: req.body.status,
        }
        
        if (req.files && req.files.length > 0) {
            data.accredeitationCetificate = req.files['accredeitationCetificate']?.[0]?.location;
        } else {
            return res.status(400).json({
                data: {},
                success: false,
                message: 'Hospital documents are required',
                err: {}
            });
        }

        const newHospital = await hospitalService.create(data);
        res.status(201).json({
            data: newHospital,
            success: true,
            message: 'Hospital created successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error during hospital creation in HospitalController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error creating hospital',
            err: error
        });
    }
}

const getAllHospitals = async (req, res) => {
    try {
        const hospitals = await hospitalService.findAll();
        res.status(200).json({
            data: hospitals,
            success: true,
            message: 'Hospitals fetched successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error fetching hospitals in HospitalController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error fetching hospitals',
            err: error
        });
    }
}

const getHospitalById = async (req, res) => {
    try {
        const hospitalId = req.params.id;
        const hospital = await hospitalService.findById(hospitalId);
        res.status(200).json({
            data: hospital,
            success: true,
            message: 'Hospital fetched successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error fetching hospital by ID in HospitalController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error fetching hospital by ID',
            err: error
        });
    }
}

const updateHospital = async (req, res) => {
    try {
        const hospitalId = req.params.id;
        const updatedHospital = await hospitalService.update(hospitalId, req.body);
        res.status(200).json({
            data: updatedHospital,
            success: true,
            message: 'Hospital updated successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error updating hospital in HospitalController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error updating hospital',
            err: error
        });
    }
}

const deleteHospital = async (req, res) => {
    try {
        const hospitalId = req.params.id;
        const deletedHospital = await hospitalService.delete(hospitalId);
        res.status(200).json({
            data: deletedHospital,
            success: true,
            message: 'Hospital deleted successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error during hospital deletion in HospitalController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error deleting hospital',
            err: error
        });
    }
}

module.exports = {
    createHospital,
    getAllHospitals,
    getHospitalById,
    updateHospital,
    deleteHospital
};