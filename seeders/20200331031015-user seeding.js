'use strict';
let { hashPass } = require('../helpers/bcrypt')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'arnold@gmail.com',
      password: hashPass('secret'),
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {});
  }
};
