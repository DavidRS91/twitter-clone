'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  User.associate = function (models) {
    User.hasMany(models.Cluck, {
      foreignKey: 'userId',
      as: 'userClucks'
    });
  };
  return User;
};