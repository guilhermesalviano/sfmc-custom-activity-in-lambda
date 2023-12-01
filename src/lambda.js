const serverlessExpress = require('@vendia/serverless-express');
const app = require('./app');

let serverlessExpressInstance

const setup = async (event, context) => {
  serverlessExpressInstance = serverlessExpress({ app });
  return serverlessExpressInstance(event, context);
}

const handler = (event, context) => {
  console.log(event, context);
  if (serverlessExpressInstance) return serverlessExpressInstance(event, context);

  return setup(event, context);
}

exports.handler = handler;
