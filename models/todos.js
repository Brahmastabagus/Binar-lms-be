'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users, {
        foreignKey: "user_id",
        as: "users"
      })
    }
  }
  todos.init({
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    date: DataTypes.DATE,
    priority: DataTypes.ENUM(["high", "medium", "low"]),
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'todos',
  });
  return todos;
};