const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

module.exports.getAllUsers = (req, res) => {
    User.find({})
        .then((users) => res.json(users))
        .catch((err) => console.log(err));
};

module.exports.register = (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    console.log(req.body);

    User.create({ firstName, lastName, email, password })
        .then((user) => {
            const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
            res.cookie("usertoken", token).json({
                msg: "success!",
            });
        })
        .catch((err) => {
            console.log("Error Code: ", err);
            res.status(409).json({ code: err.code });
        });
};
module.exports.login = (req, res) => {
    const { email, password } = req.body;
    let USER;
    User.findOne({ email })
        .then((user) => {
            if (user === null) {
                return res.sendStatus(400);
            }
            USER = user;

            return bcrypt.compare(password, user.password);
        })
        .then((correctPassword) => {
            if (!correctPassword) {
                return res.sendStatus(400);
            }
            const token = jwt.sign({ id: USER._id }, process.env.SECRET_KEY);

            res.cookie("usertoken", token).json({
                msg: "success!",
            });
        })
        .catch((err) => {
            console.log("erx", err);
            res.json(err);
        });
};

module.exports.logout = (req, res) => {
    res.clearCookie("usertoken");
    res.sendStatus(200);
};
module.exports.getUser = (req, res) => {
    const { id } = req.params;
    if (id !== req.USER_ID) {
        return res.status(401).json({ Unauthorized: false });
    } else {
        User.findOne({ _id: id }).then((user) => {
            res.json(user);
        });
    }
};

module.exports.updateUser = (req, res) => {
    const { id } = req.params;
    if (id !== req.USER_ID) {
        return res.status(401).json({ Unauthorized: false });
    } else {
        const data = ({ firstName, lastName, email } = req.body);
        User.findOneAndUpdate({ _id: id }, data, { new: true }).then((user) => {
            res.json(user);
        });
    }
};
