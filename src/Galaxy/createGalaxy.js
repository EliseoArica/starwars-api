const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

// Crear un registro en la tabla galaxias de DynamoDB
const createGalaxy = async (event) => {
    try {
        const body = JSON.parse(event.body);
        const dynamoDb = new AWS.DynamoDB.DocumentClient();

        const id = uuidv4();
        const fecha_creacion = new Date().toISOString();

        const putParams = {
            TableName: "galaxias",
            Item: {
                id: id,
                nombre: body.nombre,
                descripcion: body.descripcion,
                descubierta_en: body.descubierta_en,
                fecha_creacion: fecha_creacion
            }
        };

        await dynamoDb.put(putParams).promise();

        return {
            status: 200,
            body: JSON.stringify(putParams.Item)
        };
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createGalaxy,
};

const x = new Date();
const text = x.toString();
console.log(typeof x, typeof text, typeof uuidv4());