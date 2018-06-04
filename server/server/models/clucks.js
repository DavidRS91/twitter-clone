'use strict';
module.exports = (sequelize, DataTypes) => {
  var Clucks = sequelize.define('Clucks', {
    username: DataTypes.STRING,
    image_url: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Clucks.associate = function(models) {
    // associations can be defined here
  };
  return Clucks;
};