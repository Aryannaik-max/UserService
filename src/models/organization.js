'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt');
const { SALT } = require('../config/serverConfig');

module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Organization.hasOne(models.Driver, {
        foreignKey: 'orgId'
      });
      Organization.hasOne(models.Hospital, {
        foreignKey: 'orgId'
      });
      Organization.hasOne(models.Ambulance, {
        foreignKey: 'orgId'
      });

    }
  }
  Organization.init({
    type: {
      type: DataTypes.ENUM,
      values: ['HOSPITAL', 'AMBULANCE_SERVICE'],
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    registrationNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    registrationCertificate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    verificationStatus: {
      type: DataTypes.ENUM,
      values: ['PENDING','REJECTED','SUCCESS'],
      defaultValue: 'PENDING',
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Organization',
  });

  Organization.beforeCreate((organization) => {
    const EncryptedPassword = bcrypt.hashSync(organization.password, SALT);
    organization.password = EncryptedPassword;
  });
  return Organization;
};