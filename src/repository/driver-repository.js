const  CrudRepository = require('./crud-repository');
const { Driver } = require('../models/index');

class DriverRepository extends CrudRepository {
    constructor() {
        super(Driver);
    }
}

module.exports = DriverRepository;