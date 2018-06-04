'use strict';

module.exports = function (sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    tag: DataTypes.STRING
  }, {});
  Tag.associate = function (models) {
    // associations can be defined here
  };
  return Tag;
};