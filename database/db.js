
const mongoose = require('mongoose');

const URI = process.env.URI;
// const DB_NAME = process.env.DB_NAME;

<<<<<<< HEAD
async function main() {
    await mongoose.connect(`${URI}`);
    console.log("Database Connection Success")
}


main().catch(err => console.log(err));
=======


async function main() {
    await mongoose.connect(`${URI}`);
    console.log("Database Connection Success")
    
}



main().catch(err => console.log(err));

>>>>>>> 33d05c8035f776a1a2e78d6b286868faa8c023d0
