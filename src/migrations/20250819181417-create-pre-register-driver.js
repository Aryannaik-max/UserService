'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PreRegisterDrivers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orgId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Organizations',
          key: 'id'
        }
      },
      verificationStatus: {
        type: Sequelize.ENUM,
        values: ['PENDING', 'VERIFIED', 'REJECTED'],
        allowNull: false,
        defaultValue: 'PENDING'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      employeeId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false
      },
      licenseNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      insuranceExpiryDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      medicalCertificateNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      medicalCertificateExpiryDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      phoneNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      email: {
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
    await queryInterface.dropTable('PreRegisterDrivers');
  }
};