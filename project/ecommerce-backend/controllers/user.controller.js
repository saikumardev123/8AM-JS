var UserModel = require('../models/user.model');
var Email = require('../utils/email');
const bcrypt = require('bcryptjs');
exports.register = async (req, res) => {
    var user = req.body;
    user.password = bcrypt.hashSync(req.body.password);
    console.log("user", user);
    var UserModelObject = new UserModel(user);
    try {
        var response = await UserModelObject.save(user);
        if (response instanceof Error) {
            res.status(500).send({
                statusCode: 500,
                message: "Registration failure"
            })
        }
        else {

            Email.sendEmail(user.email);

            res.status(201).send({
                statusCode: 201,
                message: "Registration success"
            })
        }
    }
    catch (error) {
        console.log(error);
    }
}

exports.login = async (req, res) => {
    var user = req.body;
    var username = user.username;
    var password = user.password;
    var response = await UserModel.findOne({ "username": username });
    if (response == null) {
        return res.status(401).send(
            {
                statusCode: 401,
                message: "User Not Found"

            }
        )
    }
    if ("password" in response) {
        var result = bcrypt.compareSync(password, response.password);
        if (result) {
            res.status(200).send(
                {
                    statusCode: 200,
                    message: "Login Success"

                }
            )
        }
        else {
            res.status(401).send(
                {
                    statusCode: 401,
                    message: "Password incorrect"

                }
            )
        }
    }
}
