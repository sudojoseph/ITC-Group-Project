var validator = require("validator");
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter a valid First Name."],
      minLength: [2, " First Name must contain at least 2 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter a valid Last Name"],
      minLength: [2, " First Name must contain at least 2 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter an email."],
      validate: validator.isEmail,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please enter a password"],
      minLength: [6, "a password must contain atleast 6 characters "],
    },
    image: { type: String },

    likedThreads: [{ type: mongoose.Schema.ObjectId, ref: "Thread" }],
    createdThreads: [{ type: mongoose.Schema.ObjectId, ref: "Thread" }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
