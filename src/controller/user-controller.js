const { UserService } = require('../services/index');
const userService = new UserService();


const signUp = async (req, res) => {
    try {
        const newUser = await userService.signUp(req.body);
        res.status(201).json({
            data: newUser,
            success: true,
            message: 'User signed up successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error during user sign-up in UserController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error signing up user',
            err: error
        });
    }
}

const Authentication = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const user = await userService.Authentication(token);
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
        const jwtToken = await userService.login(email, password);
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

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userService.delete(userId);
        res.status(200).json({
            data: deletedUser,
            success: true,
            message: 'User deleted successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error during user deletion in UserController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error deleting user',
            err: error
        });
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await userService.update(userId, req.body);
        res.status(200).json({
            data: updatedUser,
            success: true,
            message: 'User updated successfully',
            err: {}
        });
    } catch (error) {
        console.log('Error during user update in UserController:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error updating user',
            err: error
        });
    }
}

module.exports = {
    signUp,
    login,
    deleteUser,
    updateUser,
    Authentication
};