const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a name"],
            minlength: 3,
            maxlength: 255,
        },
        email: {
            type: String,
            required: [true, "Please add an email"],
            unique: true,
            minlength: 5,
            maxlength: 255,
        },
        password: {
            type: String,
            required: [true, "Please add a password"],
            minlength: 8,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);
