'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserProfile.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'userProfile'
      });
    }
  }
  UserProfile.init({
    userId: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: 'id',
        mdel: 'Users'
      }
    },
    emergencyContact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    medicalHistory: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'UserProfile',
  });
  return UserProfile;
};