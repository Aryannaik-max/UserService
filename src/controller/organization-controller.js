const { or } = require('sequelize');
const { OrganizationService } = require('../services/index');
const organizationService = new OrganizationService();

const createOrganization = async () => {
    try {
        const data = {
            type: req.body.type,
            name: req.body.name,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            verificationStatus: 'PENDING',
            userId: req.body.userId,
            registrationNumber: req.body.registrationNumber
        }

        if(req.files && req.files.lenght>0){
            data.registrationCertificate = req.files['registrationCertificate']?.[0]?.location;
        }else{
            return res.status(400).json({
                data: {},
                success: false,
                message: 'Documents are required',
                err: {}
            });
        }

        const newOrganization = await organizationService.create(data);
        res.status(200).json({
            data: newOrganization,
            success: true,
            message: 'Organization created successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error during hospital creation in HospitalController:');
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error creating organization',
            err: error
        });
    }
}

const getAllOrrganizations = async (req, res) => {
    try {
        const hospitals = await organizationService.findAll();
        res.status(200).json({
            data: hospitals,
            success: true,
            message: 'Organizations fetched successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error fetching organizations in OrganizationController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error fetching Organizations',
            err: error
        });
    }
}

const getOrganizationById = async (req, res) => {
    try {
        const orgId = req.params.id;
        const organization = await organizationService.findById(orgId);
        res.status(200).json({
            data: organization,
            success: true,
            message: 'Organization fetched successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error fetching organization by ID in OrganizationController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error fetching organization by ID',
            err: error
        });
    }
}

const updateOrganization = async (req, res) => {
    try {
        const orgId = req.params.id;
        const updatedOrganization = await organizationService.update(orgId, req.body);
        res.status(200).json({
            data: updatedOrganization,
            success: true,
            message: 'Organization updated successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error updating organization in OrganizationController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error updating Orgainzation',
            err: error
        });
    }
}

const deleteOrganization = async (req, res) => {
    try {
        const orgId = req.params.id;
        const deletedOrganization = await organizationService.delete(orgId);
        res.status(200).json({
            data: deletedOrganization,
            success: true,
            message: 'Organization deleted successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error during organization deletion in OrganizationController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error deleting organization',
            err: error
        });
    }
} 


module.exports = {
    createOrganization,
    getAllOrrganizations,
    getOrganizationById,
    updateOrganization,
    deleteOrganization
}