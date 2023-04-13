const mongoose = require("mongoose")
require("../db");

const InvoiceSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    date: {
        type: Date
    },
    total: {
        type: Number
    }
}, {
    timestamps: true
})

const Invoice = new mongoose.model('Invoices', InvoiceSchema);
module.exports = Invoice;