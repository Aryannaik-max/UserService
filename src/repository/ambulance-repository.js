const  CrudRepository = require('./crud-repository');
const { Ambulance } = require('../models/index');

class AmbulanceRepository extends CrudRepository {
    constructor() {
        super(Ambulance);
    }
}

module.exports = AmbulanceRepository;