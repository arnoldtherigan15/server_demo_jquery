'use strict';
const { hashPass } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Digimon)
    }
  }
  User.init({
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        isEmail : {
          args: true,
          msg: 'invalid email format'
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        len: {
          args : [6],
          msg : 'minimal 6 character'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPass(user.password)
      }
    },
    validate: {
      isUnique() {
        return User.findOne({
          where: {
            email:this.email
          }
        })
        .then(data=>{
          if(data) {
            throw new Error('email is being used')
          } 
        })
      }
    }
  })
  
  return User;
};