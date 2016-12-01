var AWS = require('aws-sdk');
var uuid = require('node-uuid');

AWS.config.update({region:'us-east-1'});
AWS.config.apiVersion = {
  dynamodb: '2012-08-10'
};

var dynamodb = new AWS.DynamoDB();
var userID = uuid.v4();

var params = {
  TableName: 'NodeJS-Test',
  Item: {
    GUID: {
      S: userID
    },
    Name: {
      S: 'Nick Rankin'
    },
    Age: {
      N: '26'
    }
  }
};

dynamodb.putItem(params, (err, data) => {
  if(err){
    console.log(err, err.stack);
  } else {
    console.log(data);
  }
});
