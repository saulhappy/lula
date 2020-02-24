const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const users = require("./routes/api/users");

// DB config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(error => console.log(error));

// Use Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
