'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Driver.belongsTo(models.Organization, {
        foreignKey: 'orgId'
      });
    }
  }
  Driver.init({
    
    orgId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Organizations',
        key: 'id'
      }
    },
    driverLicenseNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    driverLicenseDocument: {
      type: DataTypes.STRING,
      allowNull: false
    },
    driverPhoto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contactNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    verificationStatus: {
      type: DataTypes.ENUM,
      values: ['PENDING', 'VERIFIED', 'REJECTED'],
      allowNull: false,
      defaultValue: 'PENDING'
    },
    location_lat: {
      type: DataTypes.DECIMAL(10,8),
      allowNull: true
    },
    location_long: {
      type: DataTypes.DECIMAL(10,8),
      allowNull: true
    },
    currentEmergencyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['ONLINE', 'OFFLINE', 'BUSY'],
      allowNull: false,
    }}, {
    sequelize,
    modelName: 'Driver',
  });
  return Driver;
};