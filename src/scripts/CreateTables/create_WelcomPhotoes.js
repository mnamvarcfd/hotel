const REGION = "ca-central-1"
const TABLENAME = "WelcomPhotoes"

var AWS = require("aws-sdk");

AWS.config.update({
    region: REGION
});


var dynamodb = new AWS.DynamoDB();

var params = {
    TableName: TABLENAME,
    KeySchema: [
        //partition key
        { AttributeName: "src", KeyType: "HASH" },
        //sort key
        { AttributeName: "className", KeyType: "RANGE" }

    ],
    AttributeDefinitions: [
        {AttributeName: "alt", AttributeType: "S"},
        {AttributeName: "src", AttributeType: "S"},
        {AttributeName: "className", AttributeType: "S"}
    ],
    LocalSecondaryIndexes: [
        {
            IndexName: "AltIndex",
            KeySchema: [
                {AttributeName: "src", KeyType: "HASH"},
                {AttributeName: "alt", KeyType: "RANGE"}
            ],
            Projection: {
                ProjectionType: "KEYS_ONLY"
            }
        }
    ],
    BillingMode: "PAY_PER_REQUEST"
};

dynamodb.createTable(params, function(err, data){
    if (err)
        console.error("Unable to create table: ", JSON.stringify(err, null, 2))
    else
    console.log("Create table with description: ", JSON.stringify(data, null, 2))
})