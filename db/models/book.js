const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Book.init({
    title: { allowNull: false, type: DataTypes.STRING },
    description: { allowNull: false, type: DataTypes.TEXT },
    cover: { allowNull: false, type: DataTypes.STRING },
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
