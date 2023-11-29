const { check } = require('express-validator');

const ChatGroupSchema = [
    check('message').isString().withMessage('message is Required'),
];

module.exports = ChatGroupSchema;