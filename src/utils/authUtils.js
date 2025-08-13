const bcrypt = require('bcrypt');
const { JWT_SECRET } = require('../config/serverConfig');
const jwt = require('jsonwebtoken');



class AuthUtils {
    constructor(repo) {
        this.repo = repo;
    }

    async signUp(userData) {
        try {
            const newUser = await this.repo.create(userData);
            return newUser;
        } catch (error) {
            console.log('Error during user sign-up in UserService:', error);
            throw new Error('Error signing up user');
        }
    }

    async login(email, plainPassword) {
        try {
            const user = await this.repo.findByEmail(email);
            const passwordMatch = await this.comparePassword(plainPassword, user.password);
            if (!user) {
                throw new Error('User not found');
            }
            if (!passwordMatch) {
                throw new Error('Invalid email or password');
            }
            const jwtToken = await this.generateJwtToken({email: user.email, id: user.id});
            return jwtToken;
        } catch (error) {
            console.log('Error during user login in UserService:', error);
            throw new Error('Error logging in user'); 
        }
    }

    async authentication(token) {
        try {
            const verifyToken = await this.verifyToken(token);
            if (!verifyToken) {
                throw new Error('Invalid token');
            }
            const user = await this.repo.findById(verifyToken.id);
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error) {
            console.log('Error during user authentication in UserService:', error);
            throw new Error('Error authenticating user'); 
        }
    }

    async comparePassword(plainPassword, hashPassword) {
        try {
            return bcrypt.compareSync(plainPassword, hashPassword);
        } catch (error) {
            console.log('Error comparing passwords in UserService:', error);
            throw new Error('Error comparing passwords');
        }
    }

    async generateJwtToken(payload) {
        try {
            const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
            return token;
        } catch (error) {
            console.log('Error generating JWT token in UserService:', error);
            throw new Error('Error generating JWT token'); 
        }
    }

    async verifyToken (token){
        try {
            const response = jwt.verify(token, JWT_SECRET);
            return response;
        } catch (error) {
            console.log('Error verifying token in UserService:', error);
            throw new Error('Error verifying token');
        }
    }
}





module.exports = AuthUtils;