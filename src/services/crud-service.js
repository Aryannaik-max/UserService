class CrudService {
    constructor(repository) {
        this.repository = new repository();
    }

    async create(data) {
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log('Error creating record in crud-service:', error);
            throw new Error('Error creating record');
        }
    }

    async findAll() {
        try {
            const response = await this.repository.findAll();
            return response;
        } catch (error) {
            console.log('Error fetching all records in crud-service:', error);
            throw new Error('Error fetching records');
        }
    }

    async findById(id) {
        try {
            const response = await this.repository.findById(id);
            return response;
        } catch (error) {
            console.log('Error finding record by ID in crud-service:', error);
            throw new Error('Error finding record by ID');
        }
    }

    async update(id, data) {
        try {
            const response = await this.repository.update(id, data);
            return response;
        } catch (error) {
            console.log('Error updating record in crud-service:', error);
            throw new Error('Error updating record');  
        }
    }

    async delete(id) {
         try {
            const response = await this.repository.delete(id);
            return response;
         } catch (error) {
            console.log('Error deleting record in crud-service:', error);
            throw new Error('Error deleting record');
         }
    }

    async findByEmail(email) {
        try {
            const response = await this.repository.findByEmail(email);
            return response;
        } catch (error) {
            console.log('Error finding record by email in crud-service:', error);
            throw new Error('Error finding record by email');
        }
    }
}

module.exports = CrudService;