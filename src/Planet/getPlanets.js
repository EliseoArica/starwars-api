const { getPlanetsFromSwapi } = require('./planetService');

const getPlanets = async (event) => {
    const result = await getPlanetsFromSwapi();

    if (result) {
        // Antes de retornar "result" debemos interceptar cada uno de los
        // parámetros de los planetas y traducirlos al espaniol.

        let i18nParams = {
            "name": "nombre",
            "rotation_period": "periodo_de_rotacion",
            "orbital_period": "periodo_orbital",
            "diameter": "diametro",
            "climate": "clima",
            "gravity": "gravedad",
            "terrain": "terreno",
            "surface_water": "agua_superficial",
            "population": "poblacion",
            "residents": "residentes",
            "films": "peliculas",
            "created": "fecha_de_creacion",
            "edited": "fecha_de_edicion",
            "url": "url",
        };
        // body será el nuevo cuerpo a enviar
        let body = [];
        
        // Recorremos el array result
        result.forEach( (element, index) => {
            let newElement = {};
            for (let key in element) {
                // Recorremos cada key-value de cada planeta
                newElement[i18nParams[key]] = element[key];
            }
            // Lo reservamos en body
            body.push(newElement);
        });
        
        // Finalmente podemos retornar el ya traducido body :)
        return {
            status: 200,
            body
        };
    } else {
        return {
            status: 500,
            result: {
                error: "Failure exception in server"
            }
        }
    }
}

getPlanets();

module.exports = {
    getPlanets
}