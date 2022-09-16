const AWS = require('aws-sdk');

const getGalaxies = async (event) => {

    try {
        const dynamoDb = new AWS.DynamoDB.DocumentClient();

        const res = await dynamoDb.scan({
            TableName: 'galaxias'
        }).promise();

        const galaxies = res.Items;

        return {
            status: 200,
            body: {
                galaxies
            }
        };
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    getGalaxies
};