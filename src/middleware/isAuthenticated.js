const { UserService, OrganizationService } = require('../services/index');
const userService = new UserService();
const organizationService = new OrganizationService();

const IsAuthenticated = async (req, res, next) => {
    try {

        if (!req.headers.authorization) {
            return res.status(401).json({
                data: {},
                success: false,
                message: 'Authorization header missing',
                err: {}
            });
        }


        if (!req.headers.authorization.startsWith('Bearer ')) {
            return res.status(401).json({
                data: {},
                success: false,
                message: 'Invalid token format. Use Bearer <token>',
                err: {}
            });
        }

        const token = req.headers.authorization.split(' ')[1];
        

        if (!token || token === 'null' || token === 'undefined') {
            return res.status(401).json({
                data: {},
                success: false,
                message: 'Token missing or invalid',
                err: {}
            });
        }

        let authenticatedEntity = null;
        
    
        if (req.originalUrl.includes('/organization/')) {
            authenticatedEntity = await organizationService.authentication(token);
        } else if (req.originalUrl.includes('/driver/')) {
            authenticatedEntity = await userService.authentication(token);
        } else {
            authenticatedEntity = await userService.authentication(token);
        }
        
        if (!authenticatedEntity) {
            return res.status(401).json({
                data: {},
                success: false,
                message: 'Invalid token - entity not found',
                err: {}
            });
        }

        req.user = authenticatedEntity;
        next();
        
    } catch (error) {
        console.error('Authentication error:', error);
        
        let message = 'Authentication failed';
        if (error.message.includes('jwt expired')) {
            message = 'Token has expired';
        } else if (error.message.includes('invalid token') || error.message.includes('jwt malformed')) {
            message = 'Invalid token format';
        } else if (error.message.includes('not found')) {
            message = 'Entity not found';
        }

        return res.status(401).json({
            data: {},
            success: false,
            message: message,
            err: error.message
        });
    }
}

module.exports = IsAuthenticated;