'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Organization.belongsTo(models.User,
        {foreignKey: 'userId'}
      );
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
      values: ['HOSPITAL', 'AMBULANCE-SERVICE'],
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
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
  return Organization;
};