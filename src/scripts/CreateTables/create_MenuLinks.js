const REGION = "ca-central-1"
const TABLENAME = "MenuLinks"

var AWS = require("aws-sdk");

AWS.config.update({
    region: REGION
});


var dynamodb = new AWS.DynamoDB();

var params = {
    TableName: TABLENAME,
    KeySchema: [
        //partition key
        { AttributeName: "href", KeyType: "HASH" },
        //sort key
        { AttributeName: "text", KeyType: "RANGE" }

    ],
    AttributeDefinitions: [
        {AttributeName: "class", AttributeType: "S"},
        {AttributeName: "href", AttributeType: "S"},
        {AttributeName: "text", AttributeType: "S"}
    ],
    LocalSecondaryIndexes: [
        {
            IndexName: "ClassIndex",
            KeySchema: [
                {AttributeName: "href", KeyType: "HASH"},
                {AttributeName: "class", KeyType: "RANGE"}
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