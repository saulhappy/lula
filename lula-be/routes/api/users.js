const express = require("express");
const router = express.Router();

// User Model

const User = require("../../models/User");

// @route GET api/users
// @desc GET all users
// @access Public
router.get("/", (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(users => res.json(users));
});

module.exports = router;
