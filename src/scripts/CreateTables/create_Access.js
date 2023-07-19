const REGION = "ca-central-1"
const TABLENAME = "Access"

var AWS = require("aws-sdk");

AWS.config.update({
    region: REGION
});

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName: TABLENAME,
    KeySchema: [
        //partition key
        { AttributeName: "name", KeyType: "HASH" }

    ],
    AttributeDefinitions: [
        {AttributeName: "name", AttributeType: "S"}
    ],
    BillingMode: "PAY_PER_REQUEST"
};

dynamodb.createTable(params, function(err, data){
    if (err)
        console.error("Unable to create table: ", JSON.stringify(err, null, 2))
    else
    console.log("Create table with description: ", JSON.stringify(data, null, 2))
})