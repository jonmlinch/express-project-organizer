'use strict';
module.exports = (sequelize, DataTypes) => {
  var category = sequelize.define('category', {
    category: DataTypes.STRING
  }, {});
  category.associate = function(models) {
    // associations can be defined here
    models.category.belongsToMany(models.project, {through: 'categoriesProjects'})
  };
  return category;
};