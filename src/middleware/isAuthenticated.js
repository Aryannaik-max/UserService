const { UserService } = require('../services/index');
const userService = new UserService();

const IsAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token) {
            return res.status(401).json({
                data: {},
                success: false,
                message: 'Token missing',
                err: {}
            });
        }
        const user = await userService.Authentication(token);
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            data: {},
            success: false,
            message: 'Error in authentication'
        });
    }
}

module.exports = IsAuthenticated;