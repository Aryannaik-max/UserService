
class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log('Error creating record in crud-repo:', error);
            throw new Error('Error creating record');
        }
    }

    async findAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            console.log('Error fetching all records in crud-repo:', error);
            throw new Error('Error fetching records');
        }
    }

    async findById(id) {
        try {
            const response = await this.model.findByPk(id);
            if (!response) {
                throw new Error(`Record with id ${id} not found`);
            }
            return response;
        } catch (error) {
            console.log('Error finding record by ID in crud-repo:', error);
            throw new Error('Error finding record by ID');  
        }
    }

    async update(id, data) {
        try {
            const record = await this.findById(id);
            const response = await record.update(data);
            return response;
        } catch (error) {
            console.log('Error updating record in crud-repo:', error);
            throw new Error('Error updating record');
        }
    }

    async delete(id) {
       try {
             const record = await this.findById(id);
            await record.destroy();
            return { message: 'Record deleted successfully' };
       } catch (error) {
            console.log('Error deleting record in crud-repo:', error);
            throw new Error('Error deleting record');
       }
    }

    async findByEmail(email) {
        try {
            const response = await this.model.findOne({ where: { email } });
            if (!response) {
                throw new Error(`Record with email ${email} not found`);
            }
            return response;
        } catch (error) {
            console.log('Error finding record by email in crud-repo:', error);
            throw new Error('Error finding record by email');
        }
    }
}

module.exports = CrudRepository;