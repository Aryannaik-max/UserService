const CrudRepository = require('./crud-repository');
const { UserProfile } = require('../models/index');

class UserProfileRepository extends CrudRepository {
    constructor() {
        super(UserProfile);
    }
}

module.exports = UserProfileRepository;
