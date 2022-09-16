# Star Wars API

API REST en NodeJS desarrollada con el framework Serveless.


## Tecnologías involucradas

- [Node JS](https://nodejs.org/en/)
- [Serverless Framework](https://www.serverless.com/)
- [AWS Lambda](https://aws.amazon.com/es/lambda/)
- [DynamoDB](https://aws.amazon.com/dynamodb/)

## Requerimientos

- Node JS (14.x o superior)
- Serverless Framework
- NPM

## Documentación de uso

1. Instalar serverless (omitir si ya se ha instalado)

```bash
   npm install -g serverless
```

2. Para descargar todas las dependencias ubicarse en la raíz del proyecto y ejecutar:

```bash
   npm install
```

3. La aplicación ya se encuentra en ejecución en el entorno de AWS. Sin embargo, si se desea comprobar que no existan errores en el despliegue, ejecutar el siguiente comando:

```bash
   serverless deploy --verbose
```

## API Endpoints

Existen 3 endpoints en total: Uno de tipo POST y dos de tipo GET. Se recomienda usar Postman o cualquier otra herramienta para hacer peticiones http.

- POST: Crear un nuevo registro en la tabla galaxias. Usar el siguiente formato:
```json
{
  "nombre": "Nombre de la galaxia a crear",
  "descripcion": "Una breve descripción",
  "descubierta_en": "Año en que se descubrió esta galaxia (en string)"
}
```
```
  https://8cld8yrraj.execute-api.us-east-1.amazonaws.com/planets
```

- GET: Obtener registros de la tabla galaxias

```
  https://8cld8yrraj.execute-api.us-east-1.amazonaws.com/galaxies
```

- GET: Obtener una lista de planetas desde SWAPI

```
  https://8cld8yrraj.execute-api.us-east-1.amazonaws.com/planets
```
