'use strict';
export default (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {});
  User.associate = models => {
    User.hasMany(models.Clucks, {
      foreignKey: 'userId',
      as: 'userClucks',
    });
  };
  return User;
}