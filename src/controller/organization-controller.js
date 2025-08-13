const { OrganizationService } = require('../services/index');
const UploadToS3 = require('../utils/s3Upload');
const organizationService = new OrganizationService();

const createOrganization = async (req, res) => {
    try {
        const data = {
            type: req.body.type,
            name: req.body.name,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            verificationStatus: 'PENDING',
            registrationNumber: req.body.registrationNumber,
            password: req.body.password
        };

        if (
            req.files &&
            req.files['registrationCertificate'] &&
            req.files['registrationCertificate'].length > 0
        ) {
            const file = req.files['registrationCertificate'][0];
            const certificateUrl = await UploadToS3(file);
            data.registrationCertificate = certificateUrl;
        } else {
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
        console.log('Error during orgainzation creation in OrganizationController:');
        console.error(error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error creating organization',
            err: error
        });
    }
}

const Authentication = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const user = await organizationService.Authentication(token);
        res.status(200).json({
            data: user,
            success: true,
            message: 'User authenticated successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error during user authentication in UserController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error authenticating user',
            err: error
        }); 
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const jwtToken = await organizationService.login(email, password);
        res.status(200).json({
            data: jwtToken,
            success: true,
            message: 'User logged in successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error during user login in UserController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error logging in user',
            err: error
        });
        
    }
}

const getOrganizationProfile = async (req, res) => {
    try {
        const organization = req.user;  
        res.status(200).json({
            data: organization,
            success: true,
            message: 'successfully got user profile'
        });
    } catch (error) {
        console.error('Error in getUserProfile controller:', error);
        res.status(500).json({ 
            data: {},
            success: false, 
            message: 'Something went wrong' ,
            err: error
        });
    }
};

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
    deleteOrganization,
    getOrganizationProfile,
    login,
    Authentication
}