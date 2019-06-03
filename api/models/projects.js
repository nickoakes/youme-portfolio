'use strict';
module.exports = (sequelize, DataTypes) => {
  const Projects = sequelize.define('Projects', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  Projects.associate = function(models) {
    // associations can be defined here
  };
  return Projects;
};