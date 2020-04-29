'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Digimon extends Model {
    static associate(models) {
      Digimon.belongsTo(models.User)
    }
  }

  Digimon.init({
    name: {
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.STRING
    },
    imgUrl: {
      type: DataTypes.TEXT
    },
    UserId: {
      type: DataTypes.INTEGER
    }
  }, {sequelize, modelName: 'Digimon'})
  
  return Digimon;
};