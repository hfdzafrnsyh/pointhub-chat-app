const mongoose = require("mongoose")
require("../db");

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
}, {
    timestamps: true
})

const Group = new mongoose.model('Groups', GroupSchema);
module.exports = Group;