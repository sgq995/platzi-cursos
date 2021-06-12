const express = require('express');
const router = express.Router();

const ProductService = require('../../services/products');

const productService = new ProductService();

router.get('/', async function (req, res, next) {
  const { tags } = req.query;

  try {
    const products = await productService.getProducts({ tags });

    res.status(200).json({
      data: products,
      message: 'Products listed'
    });
  } catch (err) {
    next(err);
  }
});

router.get('/:productId', async function (req, res, next) {
  const { productId } = req.params;

  try {
    const product = await productService.readProduct({ productId });

    res.status(200).json({
      data: product,
      message: 'Products retrieved'
    });
  } catch (err) {
    next(err);
  }
});

router.post('/', async function (req, res, next) {
  const { body } = req;

  try {
    const createdProduct = await productService.createProduct({ product: body });

    res.status(201).json({
      data: createdProduct,
      message: 'Products created'
    });
  } catch (err) {
    next(err);
  }
});

router.put('/:productId', async function (req, res, next) {
  const { productId } = req.params;
  const { body } = req;

  try {
    const updatedProduct = await productService.updateProduct({ productId, product: body });

    res.status(200).json({
      data: updatedProduct,
      message: 'Products updated'
    });
  } catch (err) {
    next(err);
  }
});

router.delete('/', async function (req, res, next) {
  const { productId } = req.params;

  try {
    const deletedProduct = await productService.deleteProduct({ productId });

    res.status(200).json({
      data: deletedProduct,
      message: 'Products deleted'
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
