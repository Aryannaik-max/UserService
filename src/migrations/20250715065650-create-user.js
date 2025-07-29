'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      medicalHistory: {
        type: Sequelize.STRING,
        allowNull: true
      },
      phoneNumber: {
      type: Sequelize.STRING,
      allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true 
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM,
        values: ['RESPONDER', 'HOSPITAL', 'AMBULANCE', 'ADMIN'],
        defaultValue: 'RESPONDER',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};