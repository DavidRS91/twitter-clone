'use strict';
export default function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
);
  User.associate = models => {
    User.hasMany(models.Cluck, {
      foreignKey: 'userId',
      as: 'userClucks',
    });
  };
  return User;
}