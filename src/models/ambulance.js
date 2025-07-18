'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ambulance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here\
      Ambulance.belongsTo(models.Driver, {
        foreignKey: 'driverId',})
      Ambulance.belongsTo(models.Hospital, {
        foreignKey: 'hospitalId',
      });
    }
  }
  Ambulance.init({
    vehicalNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicalType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    driverId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Drivers',
          key: 'id'
        }
    },
    hospitalId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Hospitals',
        key: 'id'
      }
    },
    yearsOfRegistration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rcDocument: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    insuranceDocument: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    permitDocument: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    verificationStatus: {
      type: DataTypes.ENUM,
      values: ['PENDING', 'VERIFIED', 'REJECTED'],
      allowNull: false,
      defaultValue: 'PENDING'
    }
  }, {
    sequelize,
    modelName: 'Ambulance',
  });
  return Ambulance;
};