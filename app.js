let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let app = express();
let cors = require('cors');

let cliente = require('./routes/cliente');

let opciones = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb://localhost:27017/appventas', opciones)
            .then(() => {
                console.log('Conexión Base de datos ok');
            })
            .catch((error) => {
                console.log(error);
            })

app.use(cors()); // Permite peticiones de cualquier dominio
app.use(bodyParser.urlencoded({extended: true}));

app.use('/cliente', cliente);

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
})