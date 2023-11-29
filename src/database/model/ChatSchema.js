const mongoose = require("mongoose")
require("../db");

const ChatSchema = new mongoose.Schema({
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    message: {
        type: String
    },
    deleteMe: {
        type: Boolean,
        default: 0
    },
    groupId: {
        type: Array
    }

}, {
    timestamps: true
})

const Chat = new mongoose.model('Chats', ChatSchema);
module.exports = Chat;