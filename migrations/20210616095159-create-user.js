const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Username: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      FullName: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      Confirm: {
        type: Sequelize.STRING
      },
      PhoneNum: {
        type: Sequelize.STRING
      },
      Photo: {
        type: Sequelize.BLOB('long')
      },
      NoIden: {
        type: Sequelize.BLOB('long')
      },
      DataMed: {
        type: Sequelize.BLOB('long')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        
      }
    });

  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};