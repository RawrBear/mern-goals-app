const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
    {
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
