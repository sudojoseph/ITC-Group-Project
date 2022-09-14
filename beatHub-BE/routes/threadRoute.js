const express = require("express");
const threadController = require("../controllers/threadController");
const {
  uploadAudio,
  uploadAudioToCloudinary,
  audioUrl,
} = require("../middleware/fileMiddleware");

const router = express.Router();

/// need to add auth



router
  .route("/")
  .post(
    uploadAudio.single("audioFile"),
    audioUrl,
    uploadAudioToCloudinary,
    threadController.addThread
  ).get(threadController.getThreads)

router.get("/:userId", threadController.getThreadsByUserId);

module.exports = router;
