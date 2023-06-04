const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Flower extends Model {
    static associate() {
    }
  }
  Flower.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Flower',
  });
  return Flower;
};
