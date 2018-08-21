'use strict';
module.exports = (sequelize, DataTypes) => {
  var articleTag = sequelize.define('articleTag', {
    articleId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  articleTag.associate = function(models) {
    // associations can be defined here
  };
  return articleTag;
};