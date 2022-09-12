const User = require("../models/usersmodel");
const Thread = require("../models/threadsmodel");

const addThread = async (req, res) => {
  const { title, text, bpm, genre, audioFile } = req.body;
  try {
    const thread = await Thread.create({
      title,
      text,
      bpm,
      genre,
      audioFile,
      threadOwner : req.user,
      userLikes,
    });
    res.status(200).send({
        thread,
      message: `your thread is succsesfully added.`,
    });
  } catch (err) {
    res.status(400).send("there was a problem adding thread.");
  }
};


module.exports = {
  addThread,
};
