const  CrudRepository = require('./crud-repository');
const { Hospital } = require('../models/index');

class HospitalRepository extends CrudRepository {
    constructor() {
        super(Hospital);
    }
}

module.exports = HospitalRepository;