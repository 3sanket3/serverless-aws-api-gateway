"use strict";

module.exports.hello = async event => {
  if (event.queryStringParameters && event.queryStringParameters.name) {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: `Hi, ${event.queryStringParameters.name}!`
        },
        null,
        2
      )
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hi, there!`
      },
      null,
      2
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.submitForm = async event => {
  if (event.body) {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          data: JSON.parse(event.body)
        },
        null,
        2
      )
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Received nothing"
      },
      null,
      2
    )
  };
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
