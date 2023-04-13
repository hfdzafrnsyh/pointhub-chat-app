const express = require("express");
const router = express.Router();
const cors = require("cors");

const validationError = require("../../middleware/ValidationError");
const RegisterSchema = require("../../schema/Register-Schema")
const InvoiceSchema = require("../../schema/Invoice-Schema");
const ChatSchema = require("../../schema/Chat-Schema");
const ChatGroupSchema = require("../../schema/ChatGroup-Schema");
const GroupSchema = require('../../schema/Group-Schema');

const uploadImage = require('../../middleware/UploadImage');

const UserController = require("../../controller/UserController");
const ChatController = require('../../controller/ChatController');
const GroupController = require("../../controller/GroupController");
const InvoiceController = require("../../controller/InvoiceController");
const ConversationController = require("../../controller/ConversationController");

router.use(cors());


// user
router.post('/register', RegisterSchema, validationError, UserController.register);
router.post('/uploadphoto/:id', ...uploadImage, UserController.uploadImage);


// invoice
router.get('/invoice', InvoiceController.getInvoice)
router.post('/invoice/create', InvoiceSchema, validationError, InvoiceController.createInvoice);


//chat 
router.get('/chat', ChatController.getChat);
router.put('/chat/delete/onlyme/:id', ChatController.deleteMe);
router.post('/chat/create', ChatSchema, validationError, ChatController.createChatUserToUser);
router.delete('/chat/delete/:id', ChatController.deleteMessageForAll)

// conversation
router.get('/conversation', ConversationController.getConversation);

// group
router.get('/group', GroupController.getGroup);
router.post('/group/create', GroupSchema, validationError, GroupController.createGroup);
router.post('/group/chat/create', ChatGroupSchema, validationError, ChatController.createChatGroup);




module.exports = router;