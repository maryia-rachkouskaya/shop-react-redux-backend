const uuid = require('uuid');
const { headers } = require('../consts');
const dynamo = require('../database');

const createProduct = async (event) => {
  const { title, description, price } = JSON.parse(event.body);
  const newProduct = { id: uuid.v4(), title, description, price };

  await dynamo.put({
    TableName: process.env.ProductsTable,
    Item: newProduct,
  });

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(newProduct),
  };
};

module.exports = { createProduct };
