const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  full_address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  pic_link: {
    type: String,
    required: false
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("user", UserSchema);
