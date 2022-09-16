const axios = require('axios').default;


const getPlanetsFromSwapi = async () => {
    
    const baseUrl = "https://swapi.py4e.com/api";

    try {
        const response = await axios.get(`${baseUrl}/planets`);
        return response.data.results;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getPlanetsFromSwapi
}