const REGION = "ca-central-1"
const TABLENAME = "Services"

var AWS = require("aws-sdk");

AWS.config.update({
    region: REGION
});

const docClient = new AWS.DynamoDB.DocumentClient();

var fs = require('fs');
var Data = JSON.parse(fs.readFileSync("../../componentes/data/Services.json", "utf8"))

Data.forEach(function(item) {
  var params = {
    TableName: TABLENAME,
    Item: {
      "name": item.name
    }
  };

  docClient.put(params, function(err, data) {
    if (err)
      console.error("Unable to load data into table", item.name, ". Error: ", JSON.stringify(err, null, 2))
    else
      console.log("Added", item.name, "to table.")
  })
});