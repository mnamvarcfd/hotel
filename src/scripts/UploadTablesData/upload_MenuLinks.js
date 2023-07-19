const REGION = "ca-central-1"
const TABLENAME = "MenuLinks"

var AWS = require("aws-sdk");

AWS.config.update({
    region: REGION
});


var docClient = new AWS.DynamoDB.DocumentClient();

var fs = require('fs');
var Data = JSON.parse(fs.readFileSync('../../componentes/data/MenuLinks.json', 'utf8'));
  
Data.forEach(function(item) {
    var params = {
      TableName: TABLENAME,
      Item: {
        "class": item.class,
        "href": item.href,
        "text": item.text
      }
    };

    docClient.put(params, function(err, data) {
      if (err)
        console.error("Unable to load data into table", item.text, ". Error: ", JSON.stringify(err, null, 2))
      else
        console.log("Added", item.text, "to table.")
    });
});