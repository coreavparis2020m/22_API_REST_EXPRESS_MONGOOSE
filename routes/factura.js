let express = require('express');

let app = express();

let Factura = require('../models/factura');

app.post('/', (req, res) => {
    let factura = new Factura({
        cliente: req.body.cliente,
        fecha: req.body.fecha,
        concepto: req.body.concepto,
        base: req.body.base,
        tipo: req.body.tipo
    })

    factura.save((error, facturaSaved) => {
        if (error) {
            return res.status(400).json({
                error: error
            })
        }
        // setTimeout(() => { Test para delay en cliente
            res.status(200).json({
                mensaje: `La factura ha sido creada`
            })
        //}, 3000)
    })
})

app.get('/', (req, res) => {

    Factura.find({}, (error, facturas) => {
        if (error) {
            return res.status(400).json({
                error: error
            })
        }
        // setTimeout(() => { Test latencia con 3 segundos
            res.status(200).json({
                facturas: facturas
            })
        // }, 3000)
    })
})

module.exports = app;