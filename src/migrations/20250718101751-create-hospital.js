'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hospitals', {
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
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bedsAvailabel: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      verificationStatus: {
        type: Sequelize.ENUM,
        values: ['PENDING', 'VERIFIED', 'REJECTED'],
        defaultValue: 'PENDING',
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM,
        values: ['OPEN', 'CLOSED'],
        defaultValue: 'OPEN',
        allowNull: false
      },
      registrationCertificate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      accredeitationCetificate: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Hospitals');
  }
};