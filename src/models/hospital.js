'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hospital.belongsTo(models.Organization,
        {foreignKey: 'orgId'}
      )
    }
  }
  Hospital.init({
    orgId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        modelName: 'Organizations',
        key: 'id'
      }
    },
    bedsAvailabel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['OPEN', 'CLOSED'],
      defaultValue: 'OPEN',
      allowNull: false,
    },
    accredeitationCetificate: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Hospital',
  });
  return Hospital;
};