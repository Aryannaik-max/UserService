const userprofile = require('../models/userprofile');
const { UserProfileService } = require('../services/index');
const userProfileService = new UserProfileService();    

const createUserProfile = async (req, res) => {
    try {
        const data = {
            userId: req.body.userId,
            emergencyContact: req.body.emergencyContact,
            medicalHistory: req.body.medicalHistory
        }
        const response = await userProfileService.createUserProfile(data);
        res.status(200).json({
            data: response,
            success: true,
            message: 'User profile created successfully',
            err: {}
        });
    } catch (error) {
        console.error('Error during user profile creation:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error creating user profile',
            err: error 
        });
    }
}

const getUserProfile = async (req, res) => {
    try {
        const userId = req.params.userId;
        const response = await userProfileService.getUserProfile(userId);
        res.status(200).json({
            data: response,
            success: true,
            message: 'User profile retrieved successfully',
            err: {}
        });
    } catch (error) {
        console.error('Error retrieving user profile:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error retrieving user profile',
            err: error
        });
    }
}

const updateUserProfile = async (req, res) => {
    try {
        const userId = req.params.userId;
        const response = await userProfileService.updateUserProfile(userId, req.body);
        res.status(200).json({
            data: response,
            success: true,
            message: 'User profile updated successfully',
            err: {}
        });
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error updating user profile',
            err: error
        });
    }
}

const deleteUserProfile = async (req, res) => {
    try {
        const userId = res.params.userId;
        const response = await userprofileService.deleteUserProfile(userId);
        res.status(200).json({
            data: response,
            success: true,
            message: 'User profile deleted successfully',
            err: {}
        });
    } catch (error) {
        console.error('Error deleting user profile:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error deleting user profile',
            err: error 
        });
    }
}

const getUserProfileById = async (req, res) => {
    try {
        const userId = req.params.id;
        const userProfile = await userProfileService.getUserProfile(userId);
        res.status(200).json({
            data: userProfile,
            success: true,
            message: 'User profile fetched successfully',
            err: {}
        });
    } catch (error) {
        console.error('Error fetching user profile by ID:', error);
        res.status(500).json({
            data: {},
            success: false,
            message: 'Error fetching user profile bt ID',
            err: error
        });
    }
}

module.exports = {
    createUserProfile,
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
    getUserProfileById
}