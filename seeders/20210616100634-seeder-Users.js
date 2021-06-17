'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('Users', [{
      Username: "John_Wick_007",
      Email: "johnwick@gmail.com",
      FullName: "John Wick",
      Password: "john007",
      Confirm: "john007",
      PhoneNum: "085123987645",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Users', null, {});
  }
};
