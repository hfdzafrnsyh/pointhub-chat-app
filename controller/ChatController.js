const Chat = require('../database/model/ChatSchema');
const Group = require("../database/model/GroupSchema");
const Conversation = require("../database/model/ConversationSchema");

module.exports.getChat = async (req, res) => {

    try {
        const Chats = await Chat.find({});
        res.status(200).json({
            code: '200',
            data: Chats
        })
    } catch (err) {
        res.status(500).json({
            code: '500',
            message: "Internal Server Error"
        })
    }
}

module.exports.createChatUserToUser = async (req, res) => {


    try {


        let conversations = await Conversation.findOne({
            users: {
                $in: [req.body.userId, req.body.receiverId]
            }
        })


        if (!conversations) {
            conversations = new Conversation({
                users: [req.body.userId, req.body.receiverId]
            })

            await conversations.save();
        }

        let chat = new Chat({
            conversationId: conversations.id,
            userId: req.body.userId,
            message: req.body.message,
            onDelete: 0
        })

        await chat.save();

        res.status(200).json({
            code: '200',
            message: chat
        })

    } catch (err) {
        res.status(500).json({
            code: '500',
            message: 'Internal Server Error'
        })
        console.log(err)
    }


}


module.exports.createChatGroup = async (req, res) => {

    try {

        let newChat = new Chat({
            userId: req.body.userId,
            groupId: req.query.group,
            message: req.body.message,
            onDelete: 0
        })

        await newChat.save();

        res.status(200).json({
            code: '200',
            message: newChat
        })

    } catch (err) {

        res.status(500).json({
            code: '500',
            message: 'Internal Server Error'
        })

        console.log(err)
    }

}


module.exports.deleteMe = async (req, res) => {


    try {

        const chat = await Chat.findById({ _id: req.params.id })

        if (!chat) {
            res.status(404).json({
                code: '404',
                message: 'Nothing For delete'
            })
        } else {

            let deleteChat = {
                deleteMe: 1
            }

            await Chat.updateOne({ _id: req.params.id }, deleteChat)
            res.status(200).json({
                code: '200',
                message: 'Delete for me Successfully'
            })


        }


    } catch (err) {
        res.status(500).json({
            code: '500',
            message: 'Internal Server Error'
        })
        console.log(err)
    }


}


module.exports.deleteMessageForAll = async (req, res) => {

    try {

        const chat = await Chat.findById({ _id: req.params.id })

        if (!chat) {
            res.status(404).json({
                code: '404',
                message: 'Nothing For delete'
            })
        } else {

            await Chat.deleteOne({ _id: req.params.id }, deleteChat)
            res.status(200).json({
                code: '200',
                message: 'Delete Successfully'
            })


        }

    } catch (err) {
        res.status(500).json({
            code: '500',
            message: 'Internal Server Error'
        })
    }

}
