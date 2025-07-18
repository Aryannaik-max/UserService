const { AmbulanceRepository } = require('../repository/index');
const CrudService = require('./crud-service');

class AmbulanceService extends CrudService {    
    constructor() {
        super(AmbulanceRepository);
    }
}

module.exports = AmbulanceService;