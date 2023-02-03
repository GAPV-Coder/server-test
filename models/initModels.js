// Models
const { User } = require('./user.model');
const { Product } = require('./product.model');

const initModels = () => {
  // one user <–—> many product
  //solo cuando es <> userId (userId es lo que busca sequelize)
  //User.hasMany(Product, { foreignKey: 'user_id' });
  User.hasMany(Product);
  Product.belongsTo(User);

}
module.exports = { initModels };
