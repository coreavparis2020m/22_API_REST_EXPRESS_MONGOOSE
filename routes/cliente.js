let express = require('express');

let app = express();

let Cliente = require('../models/cliente');

app.get('/', (req, res) => {

    Cliente.find({}, (error, clientes) => {
        if (error) {
            return res.status(400).json({
                error: error
            })
        }
        // setTimeout(() => { Test latencia con 3 segundos
            res.status(200).json({
                clientes: clientes
            })
        // }, 3000)
    })
})

app.get('/:_id', (req, res) => {

    Cliente.findById(req.params._id, (error, cliente) => {
        if (error) {
            return res.status(400).json({
                error: error
            })
        }

        res.status(200).json({
            cliente: cliente
        })

    })
})

app.get('/search/:termino', (req, res) => {

    Cliente.find({nombre: {$regex: req.params.termino}}, (error, cliente) => {
        if (error) {
            return res.status(400).json({
                error: error
            })
        }

        res.status(200).json({
            cliente: cliente
        })

    })
})

app.post('/', (req, res) => {
    let cliente = new Cliente({
        nombre: req.body.nombre,
        cif: req.body.cif,
        calle: req.body.calle,
        localidad: req.body.localidad,
        provincia: req.body.provincia,
        email: req.body.email,
        pago: req.body.pago
    })

    cliente.save((error, clienteSaved) => {
        if (error) {
            return res.status(400).json({
                error: error
            })
        }
        // setTimeout(() => { Test para delay en cliente
            res.status(200).json({
                mensaje: `El cliente ${clienteSaved.nombre} ha sido creado`
            })
        //}, 3000)
    })
})

app.put('/:_id', (req, res) => {

    let cliente = {};

    if(req.body.nombre) {
        cliente.nombre = req.body.nombre;
    }
    if(req.body.cif) {
        cliente.cif = req.body.cif;
    }
    if(req.body.calle) {
        cliente.calle = req.body.calle;
    }
    if(req.body.localidad) { 
        cliente.localidad = req.body.localidad;
    }
    if(req.body.provincia) {   
        cliente.provincia = req.body.provincia;
    }
    if(req.body.email) { 
        cliente.email = req.body.email;
    }
    if(req.body.pago) { 
        cliente.pago = req.body.pago;
    }

    Cliente.findByIdAndUpdate(req.params._id, {$set: cliente}, (error, clienteSaved) => {
        if (error) {
            return res.status(400).json({
                error: error
            })
        }

        res.status(200).json({
            mensaje: `El cliente ${clienteSaved.nombre} ha sido actualizado`
        })

    })
})

app.delete('/:_id', (req, res) => {

    Cliente.findByIdAndRemove(req.params._id, (error, clienteDeleted) => {
        if (error) {
            return res.status(400).json({
                error: error
            })
        }

        res.status(200).json({
            mensaje: `El cliente ${clienteDeleted.nombre} ha sido eliminado`
        })
    })

})

module.exports = app;