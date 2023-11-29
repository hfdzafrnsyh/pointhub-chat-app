const Conversation = require("../database/model/ConversationSchema");


module.exports.getConversation = async (req, res) => {

    try {

        const conversation = await Conversation.find({})

        res.status(200).json({
            code: '200',
            data: conversation
        })

    } catch (err) {
        res.status(500).json({
            code: '500',
            message: 'Internal Server Error'
        })
        console.log(err)
    }

}