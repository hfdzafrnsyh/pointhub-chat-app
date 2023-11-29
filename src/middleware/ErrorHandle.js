function errorHandler(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({
            code: '401',
            message: 'Unauthorized Access'
        })
    }
    return res.status(500).json({
        message: "500 Internal Server Error",
        error: err
    })
}

module.exports = errorHandler;