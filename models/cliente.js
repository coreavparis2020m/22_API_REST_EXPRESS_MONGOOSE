let mongoose = require('mongoose');

let provincias = ['Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona','Burgos','Cáceres',
'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'];

let ClienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cif: {
        type: String,
        required: true,
        unique: true
    },
    calle: String,
    localidad: String,
    provincia: {
        type: String,
        enum: provincias
    },
    email: String,
    pago: String
})

module.exports = mongoose.model('Cliente', ClienteSchema);