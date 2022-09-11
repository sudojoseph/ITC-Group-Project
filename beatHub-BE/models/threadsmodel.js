
const threadSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a valid title."],
      minLength: [2, " title must contain at least 2 characters"],
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
  },
  {
    timestamps: true,
  }
);

const Thread = mongoose.model("Thread", threadSchema);

module.exports = Thread;
