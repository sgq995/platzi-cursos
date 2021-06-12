const productMocks = require('../utils/mocks/products');

class ProductService {
  constructor() {

  }

  getProducts({ tags }) {
    return Promise.resolve(productMocks);
  }

  createProduct({ product }) {
    return Promise.resolve(productMocks[0]);
  }

  readProduct({ productId }) {
    return Promise.resolve(productMocks[0]);
  }

  updateProduct({ productId }) {
    return Promise.resolve(productMocks[0]);
  }

  deleteProduct({ productId }) {
    return Promise.resolve(productMocks[0]);
  }
}

module.exports = ProductService;
