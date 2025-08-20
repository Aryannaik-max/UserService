const CrudRepository = require('./crud-repository');
const { PreRegisterDriver } = require('../models/index');

class PreRegisterDriverRepository extends CrudRepository {
    constructor() {
        super(PreRegisterDriver);
    }
};


module.exports = PreRegisterDriverRepository;