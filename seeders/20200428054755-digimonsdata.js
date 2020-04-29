'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {  
      return queryInterface.bulkInsert('Digimons', [
        {
          "name": "Koromon",
          "imgUrl": "https://digimon.shadowsmith.com/img/koromon.jpg",
          "level": "In Training",
          "UserId": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Tsunomon",
          "imgUrl": "https://digimon.shadowsmith.com/img/tsunomon.jpg",
          "level": "In Training",
          "UserId": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Yokomon",
          "imgUrl": "https://digimon.shadowsmith.com/img/yokomon.jpg",
          "level": "In Training",
          "UserId": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Motimon",
          "imgUrl": "https://digimon.shadowsmith.com/img/motimon.jpg",
          "level": "In Training",
          "UserId": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Tanemon",
          "imgUrl": "https://digimon.shadowsmith.com/img/tanemon.jpg",
          "level": "In Training",
          "UserId": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Bukamon",
          "imgUrl": "https://digimon.shadowsmith.com/img/bukamon.jpg",
          "level": "In Training",
          "UserId": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Tokomon",
          "imgUrl": "https://digimon.shadowsmith.com/img/tokomon.jpg",
          "level": "In Training",
          "UserId": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Agumon",
          "imgUrl": "https://digimon.shadowsmith.com/img/agumon.jpg",
          "level": "Rookie",
          "UserId": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Gabumon",
          "imgUrl": "https://digimon.shadowsmith.com/img/gabumon.jpg",
          "level": "Rookie",
          "UserId": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Biyomon",
          "imgUrl": "https://digimon.shadowsmith.com/img/biyomon.jpg",
          "level": "Rookie",
          "UserId": 1,
          "createdAt": new Date(),
          "updatedAt": new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Digimons', null, {});
  }
};
