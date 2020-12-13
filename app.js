const argv = require('./config/yargs.js').argv;
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

//getUbicacionInstanciada();
//const encodedUrl = encodeURI(argv.direccion);  Se supome que "escapa" los caracteres especiales como el espacio, aunque no funcionó
// console.log(argv.direccion);
// lugar.getLugarLatLngRequest(argv.direccion)
//     .then((resp)=>{
//         console.log('TODO BIEN DESDE EL APP');
//         console.log(resp);
//         clima.getWeather(resp).then(console.log).catch(err=>console.error(err));
//     })
//     .catch(err=>console.error(err));


//console.log(argv);

const getInfo = async (  direccion ) =>
{
    try{
        const datosLugar = await lugar.getLugarLatLngRequest(direccion);
        const temp = await clima.getWeather(datosLugar); //contien latitud y longitud, asi como la ciudad, se desagrega en la funcíon
        console.log(`La temperatura de ${datosLugar.ciudad} es ${temp}`);
        return true;
    }catch(err)
    {
        throw new Error(`No se pudo conseguir la temperatura de ${datosLugar.ciudad}, Se registro un arror. Consulte con el masiso`);      
    }
}

getInfo(argv.direccion);
