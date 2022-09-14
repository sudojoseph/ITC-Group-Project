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
      parentThread: {
        type: mongoose.Schema.ObjectId,
        ref: "Thread",
      },


  },

  {
    timestamps: true,
  }
);

const subThread = mongoose.model("subThread", subThreadSchema);

module.exports = Thread;
