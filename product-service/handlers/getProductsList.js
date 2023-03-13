const { headers } = require('../consts');
const dynamo = require('../database');

const getProductsList = async (event) => {
  const [productsResults, stocksResults] = await Promise.all([
    dynamo.scan({ TableName: process.env.ProductsTable }),
    dynamo.scan({ TableName: process.env.StocksTable }),
  ]);

  const stocksMap = new Map(
    stocksResults.Items.map((stock) => [stock.product_id, stock.count]),
  );
  const joinedResults = productsResults.Items.map((product) => ({
    ...product,
    count: stocksMap.get(product.id) ?? 0,
  }));

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(joinedResults),
  };
};

module.exports = { getProductsList };
