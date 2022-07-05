const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    loyaltyStatus: {
        type: String,
        enum: ["Bronze", "Silver", "Gold", "Platinum"],
        default: "Bronze",
    },
    membershipStatus: {
        type: String,
        enum: ["Regular", "VIP"],
        default: "Regular",
    },
});

UserSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;
        next();
    });
});

module.exports = mongoose.model("User", UserSchema);
