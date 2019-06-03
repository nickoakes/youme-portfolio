'use strict';
module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    senderName: DataTypes.STRING,
    senderEmail: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  Messages.associate = function(models) {
    // associations can be defined here
  };
  return Messages;
};