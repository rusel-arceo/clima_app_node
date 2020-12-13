const axios = require('axios');

/***********Con instancía*********/
const getLugarLatLngInstanciada = (ciudad)=>
{
    const instance = axios.create({
        baseURL: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        headers: {
            'x-rapidapi-key': '2fd0b5c7f4msh883593960aa7cfbp1407d8jsnf448d8038475',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        },
        params: { q: `${ciudad}`, days: '3'}
      });
      
      instance.get()
      .then((resp)=>{console.log(resp.data);})
      .catch((err)=>{
          console.log('ERROR!!!! DIOMIYO', err);
      });    
}
  
/********Con axios.request*****/

const getLugarLatLngRequest = async (ciudad) => {
    let lat;
    let lon;

    var options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: { q: `${ciudad}`, days: '1'},
        headers: {
            'x-rapidapi-key': '2fd0b5c7f4msh883593960aa7cfbp1407d8jsnf448d8038475',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
      };

    try{
        const resp = await axios.request(options);
         
        //console.log(resp.status);
        //console.log("DIIIIIIIIIIIIIVIIIIIIIIIIIIISIOOOOOOOOOOOONNNNNNNNNNNNN");

        if (!resp.isAxiosError)
        {
         
            const {location, current} = resp.data;
            lat = location.lat;
            lon = location.lon;
            //console.log(lat);
            //console.log(lon);
            //console.log(resp.data);          

            console.log(`${location.name} ${location.region} ${location.country}. latitud: ${lat}, longitud: ${lon}`);
            console.log(`Temperatura actual ${current.temp_c}°C`);

            return {
                ciudad,
                lat,
                lon
            }
        }
        else
        {
            console.log("HAY UN ERROR GACHO");
            throw new Error("Sucedío un error al obtener la ubicación");
        }

      //   console.log(resp);
      
    }catch(error){
        console.log("A sucedido un error, intente mas tarde o contacte al proveedor del servicio");
        console.error(error);
        throw new Error("Sucedío un error al obtener la ubicación");
    }  
            
}

module.exports = {
    getLugarLatLngInstanciada,
    getLugarLatLngRequest
}