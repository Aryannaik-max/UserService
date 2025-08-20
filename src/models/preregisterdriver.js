'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PreRegisterDriver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PreRegisterDriver.belongsTo(models.Organization, {
        foreignKey: 'orgId',
        onDelete: 'CASCADE'
      });
    }
  }
  PreRegisterDriver.init({
    orgId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: 'id',
        model: 'Organizations'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    employeeId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    licenseNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    insuranceExpiryDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    medicalCertificateNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    medicalCertificateExpiryDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    verificationStatus: {
      type: DataTypes.ENUM,
      values: ['PENDING', 'VERIFIED', 'REJECTED'],
      allowNull: false,
      defaultValue: 'PENDING'
    }
  }, {
    sequelize,
    modelName: 'PreRegisterDriver',
  });
  return PreRegisterDriver;
};