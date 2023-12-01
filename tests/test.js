const mockContext = require('aws-lambda-mock-context');
const AWS = require('aws-sdk');
const myLambda = require('../src/lambda');

const ctx = mockContext();

// Simulate an API Gateway event
const event = {
    version: '2.0',
    routeKey: 'GET /',
    rawPath: '/',
    rawQueryString: '',
    headers: {
      'accept': '*/*',
      'content-type': 'application/json',
      'host': 'localhost',
      'user-agent': 'curl/7.64.1',
      'x-forwarded-for': '127.0.0.1',
      'x-forwarded-port': '3000',
      'x-forwarded-proto': 'http'
    },
    requestContext: {
      accountId: '123456789012',
      apiId: 'api-id',
      domainName: 'id.execute-api.us-east-1.amazonaws.com',
      domainPrefix: 'id',
      http: {
        method: 'GET',
        path: '/',
        protocol: 'HTTP/1.1',
        sourceIp: 'IP',
        userAgent: 'agent'
      },
      requestId: 'id',
      routeKey: 'GET /',
      stage: '$default',
      time: '12/Mar/2020:19:03:58 +0000',
      timeEpoch: 1583348638390
    }
};

myLambda.handler(event, ctx).then((response) => {
  console.log(response);
}).catch((err) => {
  console.error(err);
});