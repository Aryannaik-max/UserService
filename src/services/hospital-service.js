const { HospitalRepository } = require('../repository/index');
const CrudService = require('./crud-service');

class HospitalService extends CrudService {
    constructor() {
        super(HospitalRepository);
    }
}

module.exports = HospitalService;