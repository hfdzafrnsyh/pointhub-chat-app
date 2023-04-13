const { check } = require('express-validator');

const InvoiceSchema = [
    check('total').isInt().withMessage('total is Number'),
    check('date').isDate().withMessage('date is required')
];

module.exports = InvoiceSchema;