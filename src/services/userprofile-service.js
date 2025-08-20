const CrudService = require('./crud-service');
const { UserProfileRepository } = require('../repository/index');

class UserProfileService extends CrudService {
    constructor() {
        super(UserProfileRepository);
    }
}

module.exports = UserProfileService;