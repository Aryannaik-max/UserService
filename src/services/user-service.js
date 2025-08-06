const { UserRepository } = require('../repository/index');
const CrudService = require('./crud-service');
const { signUp, login, authentication, comparePassword, generateJwtToken, verifyToken } = require('../utils/authUtils');

class UserService extends CrudService {
    constructor() {
        super(UserRepository);
        this.userRepository = new UserRepository(); 
    }

    async signUp(userData) {
        try {
            return await signUp.call(this, userData);
        } catch (error) {
            console.error('Error during user sign-up in UserService:', error);
            throw new Error('Error signing up user');
        }
    }

    async login(email, plainPassword) {
        try {
            return await login.call(this, email, plainPassword);
        } catch (error) {
            console.error('Error during user login in UserService:', error);
            throw new Error('Error logging in user');
        }
    }

    async authentication(token) {
        try {
            return await authentication.call(this, token);
        } catch (error) {
            console.error('Error during user authentication in UserService:', error);
            throw new Error('Error authenticating user');
        }
    }

    async comparePassword(plainPassword, hashPassword) {
        try {
            return await comparePassword.call(this, plainPassword, hashPassword);
        } catch (error) {
            console.error('Error comparing passwords in UserService:', error);
            throw new Error('Error comparing passwords');
        }
    }

    async generateJwtToken(payload) {
        try {
            return await generateJwtToken.call(this, payload);
        } catch (error) {
            console.error('Error generating JWT token in UserService:', error);
            throw new Error('Error generating JWT token');
        }
    }

    async verifyToken(token) {
        try {
            return await verifyToken.call(this, token);
        } catch (error) {
            console.error('Error verifying token in UserService:', error);
            throw new Error('Error verifying token');
        }
    }


    

}



module.exports = UserService;