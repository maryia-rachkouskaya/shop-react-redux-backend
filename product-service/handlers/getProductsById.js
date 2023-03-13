const { headers } = require('../consts');
const dynamo = require('../database');

const getProductsById = async (event) => {
  const { productId } = event.pathParameters;

  const queryResults = await dynamo.query({
    TableName: process.env.ProductsTable,
    KeyConditionExpression: 'id = :id',
    ExpressionAttributeValues: { ':id': productId },
  });

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(queryResults.Items[0]),
  };
};

module.exports = { getProductsById };
