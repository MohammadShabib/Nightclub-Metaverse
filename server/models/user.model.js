const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
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

module.exports = mongoose.model("User", UserSchema);
