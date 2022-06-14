const asyncHandler = require("express-async-handler");

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ Message: "Get goals" });
});

// @desc set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("No goal text provided");
    }
    res.status(200).json({ Message: "Set goal" });
});

// @desc Update goals
// @route PUT /api/goals
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ Message: `Update goal ${req.params.id}` });
});

// @desc Delete goals
// @routeDETE /api/goals
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ Message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
