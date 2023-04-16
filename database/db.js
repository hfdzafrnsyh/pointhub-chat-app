
const mongoose = require('mongoose');

const URI = process.env.URI;
// const DB_NAME = process.env.DB_NAME;

const schema = new mongoose.Schema({
  name: String
});


async function main() {
    await mongoose.connect(`${URI}`);
    console.log("Database Connection Success")
    
    mongoose.model('User', schema);

    await mongoose.model('User').findOne(); // Works!
}



main().catch(err => console.log(err));

