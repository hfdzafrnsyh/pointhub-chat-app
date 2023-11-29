const { check } = require('express-validator');
const User = require("../database/model/UserSchema")

const RegisterSchema = [
    check('name').isAlphanumeric().withMessage('name is required'),
    check('phone').isString().withMessage('phone is required')
];

module.exports = RegisterSchema;