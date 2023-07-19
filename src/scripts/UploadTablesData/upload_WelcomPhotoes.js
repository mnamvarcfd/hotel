const REGION = "ca-central-1"
const TABLENAME = "WelcomPhotoes"

var AWS = require("aws-sdk");

AWS.config.update({
    region: REGION
});

var docClient = new AWS.DynamoDB.DocumentClient();

var fs = require('fs');
var Data = JSON.parse(fs.readFileSync('../../componentes/data/WelcomPhotoes.json', 'utf8'));
  
Data.forEach(function(item) {

    var className = item.className;
    if (className.trim() === "") className = "no_class";

    var params = {
      TableName: TABLENAME,
      Item: {
        "src": item.src,
        "alt": item.alt,
        "className": className
      }
    };

    docClient.put(params, function(err, data) {
      if (err)
        console.error("Unable to load data into table WelcomPhotoes", item.src, ". Error: ", JSON.stringify(err, null, 2))
      else
        console.log("Added", item.src, "to table.")
    });
});