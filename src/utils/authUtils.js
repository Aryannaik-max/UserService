const bcrypt = require('bcrypt');
const { JWT_SECRET } = require('../config/serverConfig');
const jwt = require('jsonwebtoken');




const signUp = async (userData) =>{
        try {
            const newUser = await this.userRepository.create(userData);
            return newUser;
        } catch (error) {
            console.log('Error during user sign-up in UserService:', error);
            throw new Error('Error signing up user');
        }
    }

const login = async (email, plainPassword) =>{
        try {
            const user = await this.userRepository.findByEmail(email);
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

const authentication = async (token) =>{
        try {
            const verifyToken = await this.verifyToken(token);
            if (!verifyToken) {
                throw new Error('Invalid token');
            }
            const user = await this.userRepository.findById(verifyToken.id);
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error) {
            console.log('Error during user authentication in UserService:', error);
            throw new Error('Error authenticating user'); 
        }
    }

const comparePassword = async (plainPassword, hashPassword) => {
        try {
            return bcrypt.compareSync(plainPassword, hashPassword);
        } catch (error) {
            console.log('Error comparing passwords in UserService:', error);
            throw new Error('Error comparing passwords');
        }
    }

const generateJwtToken = async (payload) => {
        try {
            const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
            return token;
        } catch (error) {
            console.log('Error generating JWT token in UserService:', error);
            throw new Error('Error generating JWT token'); 
        }
    }

const verifyToken = async (token) =>{
        try {
            const response = jwt.verify(token, JWT_SECRET);
            return response;
        } catch (error) {
            console.log('Error verifying token in UserService:', error);
            throw new Error('Error verifying token');
        }
    }


module.exports = {
    signUp,
    login,
    authentication,
    comparePassword,
    generateJwtToken,
    verifyToken
};