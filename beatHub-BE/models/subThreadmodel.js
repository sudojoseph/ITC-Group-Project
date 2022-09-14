const mongoose = require("mongoose");

const subThreadSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a valid title."],
      minLength: [2, " title must contain at least 2 characters"],
    },

    genre: {
      type: String,
    },

    text: {
      type: String,
    },
    audioFile: {
      type: String,
      required: [true, "Please choose an audio file.."],
    },
    threadOwner: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    userLikes: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
  },

  {
    timestamps: true,
  }
);

const subThread = mongoose.model("subThread", subThreadSchema);

module.exports = Thread;
