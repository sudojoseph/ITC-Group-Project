const User = require("../models/usersmodel");
const Thread = require("../models/threadsmodel");
const subThreadModel = require("../models/subThreadmodel");

const getThreads = async (req, res) => {
  const query = {};

  if (req.query.genre) {
    query.genre = req.query.genre;
  }

  if (req.query.title) {
    query.title = req.query.title;
  }

  try {
    const thread = await Thread.find({
      query,
    });

    return res.status(200).send({ thread, results: thread.length });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addSubThread = async (req, res) => {
  const { title, text, bpm, genre, audioFile } = req.body;
  try {
    const subThread = await subThread.create({
      title,
      text,
      bpm,
      genre,
      audioFile,
      parentThread: req.params.id,
    });

    const updatedMainThread = await Thread.findByIdAndUpdate(
      req.params.id,
      { subThreads: subThread._id },
      {
        new: true,
      }
    );
    res.status(200).send({
      subThread,
      updatedMainThread,
    });
  } catch (err) {
    res
      .status(400)
      .send(`there was a problem adding sub thread.: ${err.message}`);
  }
};

const addThread = async (req, res) => {
  const { title, text, bpm, genre, audioFile } = req.body;
  console.log(
    "🚀 ~ file: threadController.js ~ line 6 ~ addThread ~ req.body",
    req.body
  );
  try {
    const thread = await Thread.create({
      title,
      text,
      bpm,
      genre,
      audioFile,
      // threadOwner: req.user,
      // userLikes,
    });

    const user = await User.findByIdAndUpdate(req.user, {
      createdThreads: thread._id,
    });

    /// populate user's createdThreads and send back the user with the threads
    res.status(200).send({
      thread,
      message: `your thread is succsesfully added.`,
    });
  } catch (err) {
    res.status(400).send(`there was a problem adding thread.: ${err.message}`);
  }
};

const editThread = async (req, res) => {
  // const toUpdate = {};

  // for (const property in req.body) {
  //   if (req.body[property].length > 0) {
  //     toUpdate[property] = req.body[property];
  //   }
  // }

  try {
    const updatedThread = await Thread.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    ).select({ createdAt: 0, __v: 0 });

    res
      .status(200)
      .send({ updatedThread, message: "Your thread was updated succsesfully" });
  } catch (err) {
    res.status(400).send("could not update");
  }
};

const getThreadsByUserId = async (req, res) => {
  try {
    const userThreads = await User.findById(req.params.id).populate({
      path: "createdThreads",
    });

    res.status(200).send(userThreads);
  } catch (err) {
    res.status(400).send("cannot retrive user threads");
  }
};

module.exports = {
  addThread,
  getThreadsByUserId,
  getThreads,
  addSubThread
};
