'use strict';
export default (sequelize, DataTypes) => {
  var Tag = sequelize.define('Tag', {
    tag: DataTypes.STRING
  }, {});
  Tag.associate = function (models) {
    // associations can be defined here
  };
  return Tag;
}