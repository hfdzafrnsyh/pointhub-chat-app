
const Invoice = require("../database/model/InvoiceSchema")

module.exports.getInvoice = async (req, res) => {

    try {
        const invoice = await Invoice.find().populate('customer', 'name phone')

        res.status(200).json({
            code: '200',
            data: invoice
        })


    } catch (err) {
        res.status(500).json({
            code: '500',
            message: 'Internal Server Error'
        })
        console.log(err)
    }

}
module.exports.createInvoice = async (req, res) => {

    try {

        const invoice = new Invoice({
            customer: req.user.userId,
            total: req.body.total,
            date: req.body.date
        })

        await invoice.save();

        res.status(201).json({
            code: '201',
            data: invoice
        })
    } catch (err) {
        res.status(500).json({
            code: '500',
            message: 'Internal Server Error'
        })
        console.log(err)
    }

}