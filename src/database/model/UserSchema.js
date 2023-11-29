const mongoose = require("mongoose")
require("../db");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    },
    groupId: {
        type: Array,
        default: null
    }
}, {
    timestamps: true
})

const User = new mongoose.model('Users', UserSchema);
module.exports = User;