# Salesforce Journey Builder - Custom Activity Examples

This repository contains a number of custom activity examples for Salesforce Journey Builder. These examples are 
intended to help you understand how Journey Builder works and get a head start on building your own custom activities.

## Getting Started

The quickest way to get started is to install [Node.js](https://nodejs.org/) then run the app locally:
```
# Install package dependencies
npm install

# Run the Express app in development mode
npm run dev
```

A webapp will be available at http://localhost:8080/

You will be greeted with a landing page with links to the various examples we've created.

## Deployment
You can deploy this example to Heroku and start working with Journey Builder Custom Activities Today!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy) 


## Examples

### /modules/discount-code
Example of a custom activity that utilizes an external service to generate a discount code where the user inputs the discount percent in the configuration.

[Custom Activities](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/creating-activities.htm)

### /modules/discount-redemption-split
Example of a Rest Decision Split where your application tells the contact which way to go through the journey.

[RestDecision Documentation](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/extending-activities.htm)

### Timeout, Retry and Concurrent Execute of Requests
We support the following execution parameters that allow you to configure the timeout and retry values Journey Builder should use when sending a request to the external web service that the custom activity will invoke. 

It is possible to configure these values for each instance of a custom activity. Use config.js to show the
config in the UI for configuring the custom activity and save it when saving the journey.

For details, please go to [Custom Activity Configuration(https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-app-development.meta/mc-app-development/custom-activity-config.htm)]

```
execute.timeout - How long, in milliseconds, before each rest activity in the journey times out. Must be from 1,000 to 100,000 milliseconds. Default is 60,000 milliseconds.
execute.retryCount - How many times to retry each rest activity in the journey after the rest activity times out. Must be from 0 to 5. Default is 0.
execute.retryDelay - How long, in milliseconds, to wait before each rest activity in the journey is retried. Must be from 0 to 10,000 milliseconds. Default is 1,000 milliseconds.
execute.concurrentRequests - How many rest activities to run in parallel. Must be from 1 to 50. Default is 1, which means no concurrent requests. Before you use concurrent requests, test the scalability and performance of the target site. If you observe increased gateway errors or timeouts, consider adding retry and increasing the timeout value.
```

### build

- Caso tenha qualquer alteração no **código** ou **dependências**:
```
docker image rm sfmc-custom-activity-app-dev:latest --force

docker build -t sfmc-custom-activity-app-dev:latest . 

cd terraform

terraform apply -auto-approve   
```

### tests

```
aws lambda invoke --region=us-east-1 --function-name=sfmc-custom-activity-app response.json
```

## License
Source code is licensed under [BSD 3-Clause](./LICENSE.txt)
