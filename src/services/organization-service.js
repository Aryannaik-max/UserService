const {OrganizationRepository} = require('../repository/index');
const CrudService = require('./crud-service');

class OrganizationService extends CrudService {
    constructor() {
        super(OrganizationRepository);
    }
}

module.exports = OrganizationService;