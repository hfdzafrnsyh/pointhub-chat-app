const Group = require('../database/model/GroupSchema');


module.exports.getGroup = async (req, res) => {

    try {
        const group = await Group.find({});

        res.status(200).json({
            code: '200',
            data: group
        })

    } catch (err) {
        res.status(500).json({
            code: '500',
            message: 'Internal Server Error'
        })
        console.log(err)
    }

}


module.exports.createGroup = async (req, res) => {

    try {

        const newGroup = new Group({
            name: req.body.name,
            admin: req.body.admin
        })

        await newGroup.save();

        res.status(200).json({
            code: '200',
            data: newGroup
        })

    } catch (err) {
        res.status(500).json({
            code: '500',
            message: 'Internal Server Error'
        })
        console.log(err)
    }

}