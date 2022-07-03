const User = require("../models/user.model");

module.exports.getAllUsers = (req, res) => {
    User.find({})
        .then((users) => res.json(users))
        .catch((err) => console.log(err));
};

module.exports.createUser = (req, res) => {
    const { firstName, lastName } = req.body;
    User.create({ firstName, lastName })
        .then((user) => res.json(user))
        .catch((err) => console.log(err));
};

module.exports.updateUser = (req, res) => {
    const { firstName, lastName } = req.body;

    User.findOneAndUpdate(
        { _id: req.params.id },
        { firstName, lastName },
        {
            new: true,
        }
    )
        .then((user) => res.json(user))
        .catch((err) => console.log(err));
};
