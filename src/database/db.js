
const mongoose = require('mongoose');

// const URI = process.env.URI;
const URI_DEV = process.env.URI_DEV;

async function main() {
    await mongoose.connect(`${URI_DEV}`);
    console.log("Database Connection Success")
}


main().catch(err => console.log(err));
