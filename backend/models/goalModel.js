const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Please add a user"],
            ref: "User",
        },
        text: {
            type: String,
            required: [true, "No goal text provided"],
        },
    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.model("Goal", goalSchema);
