const { check } = require('express-validator');

const GroupSchema = [
    check('name').isString().withMessage('name group is Required'),
];

module.exports = GroupSchema;