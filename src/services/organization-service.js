const {OrganizationRepository} = require('../repository/index');
const { Hospital } = require('../models/index');
const { Driver } = require('../models/index');
const CrudService = require('./crud-service');
const AuthUtils = require('../utils/authUtils');
class OrganizationService extends CrudService {
    constructor() {
        super(OrganizationRepository);
        this.auth = new AuthUtils(this.repository);
    }

    async signUp(userData) {
        try {
            const organizationData = await this.auth.signUp(userData);
            
            if(organizationData.type === 'HOSPITAL') {
                await Hospital.create({
                    orgId: organizationData.id,
                    bedsAvailable: organizationData.bedsAvailable,
                    totalDoctors: organizationData.totalDoctors,
                    status: organizationData.status,
                });
            }

            if(organizationData.type === 'DRIVER') {
                await Driver.create({
                    orgId: organizationData.id,
                    vehicleType: organizationData.vehicleType,
                })
            }
        } catch (error) {
            console.error('Error during user sign-up in OrganizationService:', error);
            throw new Error('Error signing up user');
        }
    }

    async login(email, password) {
        try {
            return await this.auth.login(email, password);
        } catch (error) {
            console.error('Error during user login in OrganizationService:', error);
            throw new Error('Error logging in user');
        }
    }

    async authentication(token) {
        try {
            return await this.auth.authentication(token);
        } catch (error) {
            console.error('Error during user authentication in OrganizationService:', error);
            throw new Error('Error authenticating user');
        }
    }



}

module.exports = OrganizationService;