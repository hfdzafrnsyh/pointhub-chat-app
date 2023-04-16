
const mongoose = require('mongoose');

const URI = process.env.URI;
// const DB_NAME = process.env.DB_NAME;

async function main() {
    await mongoose.connect(`${URI}`);
    console.log("Database Connection Success")
}


main().catch(err => console.log(err));
