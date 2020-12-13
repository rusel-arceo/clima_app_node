const axios = require ('axios');
/////////*******************Obtener el tiempo con otra API openweathermap, usando las coordenadas**********************/////////////////////////////

const getWeather = async ({lat, lon}) => {
    console.log("Entrandro a la función que muestra el clima");
    try
    {
    const resp = await axios.get(`httpS://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=453392d11b4d847517cf0baa30a379b6&units=metric`);
         //No se necesita pasar los parametros o crear una instancia debido a que no hay que pasar parametros en los header
        //Todo se hace en la URL eso depende de la API
       return resp.data.main.temp;
    }
    catch(err)
    {
        console.log('Ha sucedido un Error');
        throw new Error('Ha sucedido un error durante la petición del clima, intente mas tarde');
    }  
}

module.exports = {
    getWeather
}