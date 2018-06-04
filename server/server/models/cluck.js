'use strict';
export default function (sequelize, DataTypes) {
  var Cluck = sequelize.define('Cluck', {
    image_url: DataTypes.STRING,
    content: {
      type: DataTypes.TEXT,
    allowNull: false,
    }
  },
);
  Cluck.associate = models => {
    Cluck.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Cluck;
}