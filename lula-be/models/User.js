const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("user", UserSchema);
