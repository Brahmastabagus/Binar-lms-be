'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.todos, {
        foreignKey: "user_id",
        as: "todos"
      })
    }
  }
  users.init({
    name: DataTypes.STRING,
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};