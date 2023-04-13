const { validationResult } = require('express-validator');


const validationError = (req, res, next) => {
    const error = validationResult(req).formatWith(({ msg }) => msg);

    if (!error.isEmpty()) {
        return res.status(422).json({
            code: '422',
            message: 'Unprocessable Entity',
            error: error.mapped()
        })

    }
    next()
}

module.exports = validationError;
