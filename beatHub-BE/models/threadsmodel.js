const mongoose = require("mongoose");

const threadSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a valid title."],
      minLength: [2, " title must contain at least 2 characters"],
    },

    genre: {
      type: String,
      required: [true, "Please enter a valid genre."],
    },
    bpm: {
      type: Number,
      required: [true, "please enter a valid bpm "],
    },
    text: {
      type: String,
      required: [true, "Please enter a text"],
      minLength: [10, " Text must contain at least 10 characters"],
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
    subThreads: [
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

const Thread = mongoose.model("Thread", threadSchema);

module.exports = Thread;
