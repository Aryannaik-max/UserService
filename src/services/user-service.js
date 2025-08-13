const { UserRepository } = require('../repository/index');
const CrudService = require('./crud-service');
const AuthUtils = require('../utils/authUtils');

class UserService extends CrudService {
    constructor() {
        super(UserRepository);
        this.auth = new AuthUtils(this.repository);
    }

    async signUp(userData) {
        try {
            return await this.auth.signUp(userData);
        } catch (error) {
            console.error('Error during user sign-up in UserService:', error);
            throw new Error('Error signing up user');
        }
    }

    async login(email, password) {
        try {
            return await this.auth.login(email, password);
        } catch (error) {
            console.error('Error during user login in UserService:', error);
            throw new Error('Error logging in user');
        }
    }

    async authentication(token) {
        try {
            return await this.auth.authentication(token);
        } catch (error) {
            console.error('Error during user authentication in UserService:', error);
            throw new Error('Error authenticating user');
        }
    }

}



module.exports = UserService;