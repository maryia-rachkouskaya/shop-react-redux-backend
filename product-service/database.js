const { DynamoDBDocument } = require('@aws-sdk/lib-dynamodb');
const { DynamoDB } = require('@aws-sdk/client-dynamodb');

const dynamo = DynamoDBDocument.from(new DynamoDB());

module.exports = dynamo;
