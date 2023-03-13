const AWS = require('aws-sdk');
const csv = require('csv-parser');
const { headers } = require('../consts');

module.exports.importFileParser = async (event) => {
  let statusCode;
  let message;

  for (const record of event.Records) {
    const params = {
      Bucket: process.env.Bucket,
      Key: record.s3.object.key,
    };

    const s3 = new AWS.S3({ region: 'eu-north-1' });
    const s3Stream = s3.getObject(params).createReadStream();

    s3Stream
      .pipe(csv())
      .on('data', (data) => {
        console.log('DATA ', data);
      })
      .on('error', (error) => {
        statusCode = 500;
        message = error;
        console.log('ERROR ', error);
      })
      .on('end', () => {
        statusCode = 200;
        message = 'Successfully parsed';
        console.log(message);
      });
  }
  return {
    statusCode,
    headers,
    body: JSON.stringify(message),
  };
};
