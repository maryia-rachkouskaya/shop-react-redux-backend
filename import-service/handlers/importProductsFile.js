const AWS = require('aws-sdk');
const { headers } = require('../consts');

module.exports.importProductsFile = async (event) => {
  const { name } = event.queryStringParameters;

  const params = {
    Bucket: process.env.Bucket,
    Key: `uploaded/${name}`,
    Expires: 60,
    ContentType: 'text/csv',
  };

  const s3 = new AWS.S3({ region: 'eu-north-1' });
  const signedUrl = await s3.getSignedUrlPromise('putObject', params);

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(signedUrl),
  };
};
