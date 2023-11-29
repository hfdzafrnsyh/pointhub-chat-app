const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path');
const errorHandle = require('./middleware/ErrorHandle');

app.use(cors())
app.use('*', cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


// for path get image
app.use('/public', express.static(path.join(__dirname, 'public')))



require('dotenv').config()

const routes = require('./routes/routes');
routes(app)
app.use(errorHandle);





module.exports = app;
