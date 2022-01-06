'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    uname: {
      type:DataTypes.STRING,
      validate:{
        isUniqueUname: function(newUnmae){
          return User.findOne({
            where : {
              uname: newUnmae
            }
          }).then(function(user){ // object user kalau ada || Null kalo gada
            if(user){
              throw ('Úname sudah dipakai')
            }
          })
        }
      }
    },
    upass: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};