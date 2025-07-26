const { Organization } = require('../models/index');
const CrudRepository = require('./crud-repository');

class OrganizationRepository extends CrudRepository {
        constructor(){
            super(Organization);
        }
}

module.exports = OrganizationRepository;