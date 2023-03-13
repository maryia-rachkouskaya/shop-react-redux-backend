const dynamo = require('./database');
const { mockProducts, mockStocks } = require('./mocks');

const populateData = async () => {
  await dynamo.batchWrite({
    RequestItems: {
      [process.env.PRODUCTS_TABLE]: mockProducts.map((product) => ({
        PutRequest: {
          Item: product,
        },
      })),
      [process.env.STOCKS_TABLE]: mockStocks.map((stock) => ({
        PutRequest: {
          Item: stock,
        },
      })),
    },
  });
};

populateData();
