const { DriverRepository } = require('../repository/index');
const CrudService = require('./crud-service');
class DriverService extends CrudService {
    constructor() {
        super(DriverRepository);
    }

    
}

module.exports = DriverService;