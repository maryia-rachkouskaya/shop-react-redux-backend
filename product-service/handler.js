'use strict';

const mockProducts = require('./mocks').mockProducts;

const headers = {
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Origin': '*',
};

module.exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(mockProducts),
  };
};

module.exports.getProductsById = async (event) => {
  const { productId } = event.pathParameters;
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(
      mockProducts.find((product) => product.id === productId),
    ),
  };
};
