const argv=require('yargs')
.options({ //Aqui no hay comando, directamente el parametro por eso usamos options, permite definir el paremtro a recibir pero sin necesidad de tener un comando
    direccion: {
        demand: true,
        alias:'d',
        desc:'Dirección de la ciudad para obtener el clima',
    }
})    
.argv;

module.exports = {
    argv
}