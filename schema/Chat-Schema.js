const { check } = require('express-validator');

const ChatSchema = [
    check('message').isString().withMessage('message is Required'),
];

module.exports = ChatSchema;