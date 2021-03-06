"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Symtomp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Symtomp.belongsTo(models.Disease);
    }
  }
  Symtomp.init(
    {
      name: DataTypes.STRING,
      DiseaseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Symtomp",
    }
  );
  return Symtomp;
};
