const mongoose = require("mongoose")
require("../db");

const ConversationSchema = new mongoose.Schema({
    users: {
        type: Array
        
    }
}, {
    timestamps: true
})

const Conversation = new mongoose.model('Conversations', ConversationSchema);
module.exports = Conversation;