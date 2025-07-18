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
    }
  }
  Hospital.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bedsAvailabel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    verificationStatus: {
      type: DataTypes.ENUM,
      values: ['PENDING', 'VERIFIED', 'REJECTED'],
      defaultValue: 'PENDING',
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['OPEN', 'CLOSED'],
      defaultValue: 'OPEN',
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Hospital',
  });
  return Hospital;
};