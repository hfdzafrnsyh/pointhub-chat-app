const User = require("../database/model/UserSchema");
const jwt = require("jsonwebtoken");

module.exports.register = (req, res) => {

    let SECRET = process.env.SECRET

    User.findOne({ where: { phone: req.body.phone } })
        .then((user) => {
            if (!user) {
                let newUser = new User({
                    name: req.body.name,
                    phone: req.body.phone,
                    image: 'default.png'
                })

                newUser.save()
                    .then(newuser => {

                        let token = jwt.sign({
                            userId: newuser.id
                        },
                            SECRET
                            , {
                                expiresIn: '1d'
                            })

                        res.status(201).json({
                            code: '201',
                            user: newuser,
                            token: token
                        })
                    })
                    .catch(err => {
                        res.status(422).json({
                            code: '422',
                            message: 'Phone number already exist'
                        })
                        console.log(err)
                    })
            }
        })
        .catch(err => {
            res.status(500).json({
                code: '500',
                message: 'Internal Server Error'
            })
            console.log(err)
        })



}



module.exports.uploadImage = async (req, res) => {

    try {

        let files = req.file;


        if (!files) {
            res.status(400).json({
                code: '400',
                message: "Must be file"
            })
        } else {
            const imageName = files.filename
            const basePath = `${req.protocol}://${req.get('host')}/public/user/`

            let newPhoto = {
                image: `${basePath}${imageName}`,
            }

            await User.updateOne({ _id: req.params.id }, newPhoto)
            res.status(200).json({
                code: '200',
                message: "Success Upload Photo"
            })

        }
    } catch (err) {
        res.status(500).json({
            code: '500',
            message: "Internal Server Error"
        })
        console.log(err)
    }




}

