let mongoose = require('mongoose');

let FacturaSchema = new mongoose.Schema({
    cliente: Object,
    fecha: Object,
    concepto: String,
    base: Number,
    tipo: Number
})

module.exports = mongoose.model('Factura', FacturaSchema);