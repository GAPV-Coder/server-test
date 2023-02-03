const express = require('express');
const { body } = require('express-validator');

//middleware
const {
  productExist,
  protectProductOwner,
} = require('../middlewares/products.middleware');
const { protectToken } = require('../middlewares/users.middlewares');

const {
  createProductValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');

const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} = require('../controllers/product.controller');

//router declaration
const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', productExist, getProductById);

// Apply protectToken middleware
router.use(protectToken);

router.post('/', createProductValidations, checkValidations, createProduct);

router
  .route('/:id')
  .patch(productExist, protectProductOwner, updateProduct)
  .delete(productExist, protectProductOwner, deleteProduct);

module.exports = { productsRouter: router };
