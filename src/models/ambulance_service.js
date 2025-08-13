'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ambulance_service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ambulance_service.init({
    orgId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Organizations',
        key: 'id'
      }
    },
    ambulanceCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ambulance_service',
  });
  return ambulance_service;
};