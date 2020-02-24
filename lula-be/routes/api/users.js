const express = require("express");
const router = require("express").Router();

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

// @route POST api/users
// @desc Create a POST
// @access Public
router.post("/", (req, res) => {
  const newUser = new User({
    email: req.body.email
  });
  newUser.save().then(user => res.json(user));
});

module.exports = router;
