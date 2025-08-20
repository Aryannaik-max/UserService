const CrudService = require('./crud-service');
const { PreRegisterDriverRepository } = require('../repository/index');

class PreRegisterDriverService extends CrudService {
    constructor() {
        super(PreRegisterDriverRepository);
    }
};


module.exports = PreRegisterDriverService;