'use strict';
const { expressjwt: jwt } = require('express-jwt')

const api = require('./api/api')
const API_URL = process.env.API_URL
const SECRET = process.env.SECRET;

const routes = (app) => {

    app.use('/api', jwt({ secret: `${SECRET}`, algorithms: ["HS256"] }).unless({
        path: [
            { url: /\/api\/invoice(.*)/, methods: ['GET', 'OPTIONS'] },
            `${API_URL}`,
            `${API_URL}/register`
        ]
    }), api);

}

module.exports = routes;