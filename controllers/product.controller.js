const { Product } = require('../models/product.model');
const { User } = require('../models/user.model');
const { AppError } = require('../utils/appError');

// utils
const { catchAsync } = require('../utils/catchAsync');

const getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.findAll({
    where: { status: 'active' },
  });
  res.status(200).json({
    products,
  });
});

const getProductById = catchAsync(async (req, res, next) => {
  const { product } = req;

  res.status(200).json({
    product,
  });
});

const createProduct = catchAsync(async (req, res, next) => {
  const { title, description, price, quantity } = req.body;
  const { sessionUser } = req;
  const product = await Product.create({
    title,
    description,
    quantity,
    price,
    userId: sessionUser.id,
  });
  res.status(201).json({ status: 'success', product });
});

const updateProduct = catchAsync(async (req, res, next) => {
  const { product } = req;
  const { title, description, price, quantity } = req.body;

  await product.update({ title, description, price, quantity });
  res.status(200).json({ status: 'success', product });
});

const deleteProduct = catchAsync(async (req, res, next) => {
  const { product } = req;

  await product.update({ status: 'deleted' });

  res.status(201).json({
    status: 'success',
    message: 'Product have been deleted',
  });
});

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
};
