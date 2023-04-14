const app = require('./app');
const serverless = require("serverless-http");

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server run in ${PORT}`);
})

module.exports.handler = serverless(app)